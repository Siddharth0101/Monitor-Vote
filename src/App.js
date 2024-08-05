import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Monitor from "./components/monitor/monitor";
import Display from "./components/display/display";

function App() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <Monitor />
      <Display />
    </div>
  );
}

export default App;
