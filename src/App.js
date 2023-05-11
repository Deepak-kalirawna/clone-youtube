import "./App.css";
import Header from "./Header";
import Recommended from "./Recommended";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:deepak"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <Recommended />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
