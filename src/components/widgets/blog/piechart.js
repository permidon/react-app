import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }
  
  componentWillReceiveProps() {
    this.chart.load({ columns: this.props.columns });
  }
  
  render() {
    return (
      <div ref="chart" /> 
    );
  }  
}

PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;
