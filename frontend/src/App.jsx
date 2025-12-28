import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./pages/AssignmentList";
import Editor from "./pages/Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
