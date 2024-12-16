import "./App.css";
import "./components/Headers";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Headers from "./components/Headers";
import Addnotes from "./components/Addnotes";

import Listnotes from "./components/Listnotes";
import axios from "axios";
function App() {
  // axios.defaults.baseURL = "http://localhost:8080";
  axios.defaults.baseURL = "http://localhost:8080";
  return (
    <div className="App">
      <Headers></Headers>
      {/* <Addnotes></Addnotes> */}
      <Listnotes></Listnotes>
    </div>
  );
}

export default App;
