/* eslint-disable */
const plan = require('flightplan');

const tmpDir = 'blog-client-' + new Date().getTime();
const user = 'permidon';

plan.target('production', {
  host: 'localhost',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote host');
  const files = local.exec('git ls-files', {silent: true});
  local.transfer(files, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('npm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm(' -rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('(cd ~/' + tmpDir + '/semantic && gulp build)');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Tests');
  remote.exec('npm --prefix ~/' + tmpDir + ' run test');

  remote.log('Reload');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
