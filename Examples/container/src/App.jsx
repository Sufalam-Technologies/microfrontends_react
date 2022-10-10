import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "counter/Counter";
import { Alert, Card } from "react-bootstrap";
import "./index.css";

const App = () => (
  <div className="container">
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>
          <Alert key="success" variant="success">
            This is a Container App!
          </Alert>
        </Card.Title>
        <Counter />
      </Card.Body>
    </Card>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
