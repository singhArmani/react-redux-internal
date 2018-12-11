import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Counter from 'Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
