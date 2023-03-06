let Without = createReactClass({
  render: function () {
    let display = 8;
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


ReactDOM.render(<Without />,
  document.getElementById('birdeye_without')
);
