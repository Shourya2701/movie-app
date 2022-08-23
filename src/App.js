import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import Error from "./components/Error";
import { AppProvider } from "./components/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:id" element={<SingleMovie />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
