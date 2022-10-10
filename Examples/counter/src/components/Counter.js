import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  return (
    <div>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>
            <Alert key="primary" variant="primary">
              This is a Counter App, check it out!
            </Alert>
          </Card.Title>
          <Card.Subtitle>
            <Alert key="secondary" variant="secondary">
              Current count : {count}
            </Alert>
          </Card.Subtitle>
          <Button variant="primary" onClick={onIncrement} className="btn-lg">
            Add
          </Button>{" "}
          <Button variant="secondary" onClick={onDecrement} className="btn-lg">
            Reduce
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};
