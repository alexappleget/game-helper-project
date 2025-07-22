import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { AuthenticatedLayout } from "./components/AuthenticatedLayout";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes under AuthenticatedLayout */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/dashboard" />
          <Route path="/enemies" />
          <Route path="/build" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
