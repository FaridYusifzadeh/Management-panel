import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./modules/Login/Login";
import SignUp from "./modules/SignUp/SignUp";
import User from "./modules/User/User";
import UserList from "./modules/UserList/UserList";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/list" element={<UserList />} />
      <Route
        path="/user-manage"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
