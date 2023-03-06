let Without = createReactClass({
  render: function () {
    let display = 6;
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
      <div className="birdeye without">
        {this.props.display}
      </div>
    )
  }
});


ReactDOM.render(<Without />,
  document.getElementById('birdeye_without')
);
