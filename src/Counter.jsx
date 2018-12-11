import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Counter extends PureComponent {
  render() {
    return (
      <>
        Count: {this.props.count}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </>
    );
  }
}

const mapState = state => ({
  count: state.count
});

const mapProps = dispatch => ({
  increment: () => dispatch({ type: 'Increment' }),
  decrement: () => dispatch({ type: 'Decrement' })
});
// let's try to connect it with our custom react-redux library
export default connect(
  mapState,
  mapProps
)(Counter);
