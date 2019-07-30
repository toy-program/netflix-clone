import * as React from "react";
import * as axios from "axios";

type messageProps = { message: string };

const Message: React.FC<messageProps> = ({ message }) => <div>{message}</div>;

const App: React.FC = () => {
  return (
    <div className="App">
      <span>"Hello World!"</span>
    </div>
  );
};

export default App;
