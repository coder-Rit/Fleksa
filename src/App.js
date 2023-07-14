import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

import AllUser from "./components/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AllUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
