import React from "react";
import Counter from './state/Counter';

// array of objects each with a name and content
class App extends React.Component {
  render() {
    return <div>
      <Counter step={5}/>
    </div>
  }
}

export default App;
