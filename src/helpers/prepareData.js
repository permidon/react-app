import { map, compact, filter } from 'lodash';

export default function (store, state) {
  const { query, params, routes } = state;
  const prepareDataFns = compact(map(routes, route => route.prepareData));
  
  const values = map(
    prepareDataFns,
    prepareData => prepareData(store, query, params)
  );

  const promises = filter(values);
  return Promise.all(promises);
}
