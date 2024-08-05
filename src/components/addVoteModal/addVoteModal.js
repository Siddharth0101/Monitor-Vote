import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { StudentsActions } from "../../store/students";

export default function AddVoteModal({ show, handleClose }) {
  const [name, setName] = useState("");
  const [monitor, setMonitor] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (monitor === "") {
      alert("Please select a monitor.");
      return;
    }

    const data = {
      Name: name,
      Monitor: monitor,
    };

    dispatch(StudentsActions.ADD(data));
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vote For Monitor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <h4>Student Name:</h4>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <h4>Choose Monitor</h4>
            <Form.Select
              aria-label="Select monitor"
              value={monitor}
              onChange={(e) => setMonitor(e.target.value)}
            >
              <option value="">Select a monitor</option>
              <option value="1">Suresh</option>
              <option value="2">Deepak</option>
              <option value="3">Abhi</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Vote
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
