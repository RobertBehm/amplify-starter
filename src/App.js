import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<HomePage />} />
            {/* Admin Routes */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
