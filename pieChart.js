class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type : 'pie'
      }
    })
  };
  
  componentWillUnmount() {
    this.chart.destroy();
  };
  
  componentWillReceiveProps() {
    this.chart.load({ columns: this.props.columns });
  };
  
  render() {
    return (
      <div ref="chart" /> 
    );
  }  
};
