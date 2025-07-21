import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="" />
        <Route path="" />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
