import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

function AppRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<App />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRoute;
