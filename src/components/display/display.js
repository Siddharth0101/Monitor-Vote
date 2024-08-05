import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { StudentsActions } from "../../store/students";

export default function Display() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.student.All);
  const Suresh = useSelector((state) => state.student.Suresh);
  const Deepak = useSelector((state) => state.student.Deepak);
  const Abhi = useSelector((state) => state.student.Abhi);
  const deleteHandler = (item) => {
    dispatch(StudentsActions.DELETE(item));
  };

  return (
    <div>
      <div>
        <h3>Suresh</h3>
        {Suresh.map((item, index) => (
          <li key={index}>
            {item.Name}
            <Button
              variant="danger"
              style={{ marginLeft: "30px" }}
              onClick={() => deleteHandler(item)}
            >
              Delete
            </Button>
          </li>
        ))}
        <div>Total:{Suresh.length}</div>
      </div>
      <div>
        <h3>Deepak</h3>
        {Deepak.map((item, index) => (
          <li key={index}>
            {item.Name}
            <Button
              variant="danger"
              style={{ marginLeft: "30px" }}
              onClick={() => deleteHandler(item)}
            >
              Delete
            </Button>
          </li>
        ))}
        <div>Total:{Deepak.length}</div>
      </div>
      <div>
        <h3>Abhi</h3>
        {Abhi.map((item, index) => (
          <li key={index}>
            {item.Name}
            <Button
              variant="danger"
              style={{ marginLeft: "30px" }}
              onClick={() => deleteHandler(item)}
            >
              Delete
            </Button>
          </li>
        ))}
        <div>Total:{Abhi.length}</div>
      </div>
    </div>
  );
}
