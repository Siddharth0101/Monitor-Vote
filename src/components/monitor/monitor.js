import { useState } from "react";
import { Button } from "react-bootstrap";
import AddVoteModal from "../addVoteModal/addVoteModal";
import { useSelector } from "react-redux";

export default function Monitor() {
  const data = useSelector((state) => state.student.All);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <AddVoteModal show={show} handleClose={handleClose} />
      <h1
        style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}
      >
        Class Monitor Vote
      </h1>
      <h3
        style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}
      >
        Total Votes:{data.length}
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleShow}>Add Vote</Button>
      </div>
    </div>
  );
}
