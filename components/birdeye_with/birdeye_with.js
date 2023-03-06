let With = createReactClass({
  render: function () {
    let display = 3,489;
    return (
      <div>
        <Display display={display} />
      </div>
    )
  }
});


let Display = createReactClass({
  render: function () {
    return (
      <div className="display">
        {this.props.display}
      </div>
    )
  }
});


ReactDOM.render(<With />,
  document.getElementById('birdeye_with')
);
