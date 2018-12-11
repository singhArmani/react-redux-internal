import React from 'react';
import { createStore, counter } from './redux.js';

//creating a store
const store = createStore(counter);

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    // this Wrapper class component will encapsulate the behaviour of getting state and
    // passing the required props to the wrapped Component
    return class Wrapper extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }
      componentDidMount() {
        // handling the logic of subscribing to the store
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }

      componentWillUnMount() {
        this.unsubscribe();
      }

      handleChange() {
        this.forceUpdate();
      }
    };
  };
}
