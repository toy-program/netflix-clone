import React from "react";
import axios from "axios";

const App: React.FC = () => {
  return (
    <div className="App">
      <span>"Hello World!"</span>
      <Test />
    </div>
  );
};

class Test extends React.Component {
  state = {
    message: ""
  };

  componentDidMount() {
    axios.get("/api").then(response => {
      this.setState({ message: response.data });
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.message}</span>
      </div>
    );
  }
}

export default App;
