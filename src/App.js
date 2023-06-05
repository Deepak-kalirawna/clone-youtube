import "./App.css";
import Header from "./pages/UI/Header";
import Recommended from "./components/Recommended";
import Sidebar from "./pages/UI/Sidebar";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchContextProvider from "./utils/SearchContextProvider";

function App() {
  return (
    <SearchContextProvider>
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
    </SearchContextProvider>
  );
}

export default App;
