import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./components/Unprotected/Welcome";
import Login from "./components/Unprotected/Login";
import DashLayout from "./components/Protected/DashLayout";
import DashWelcome from "./components/Protected/DashWelcome";
import UsersList from "./features/users/UsersList";
import NotesList from "./features/notes/NotesList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import NewNote from "./features/notes/NewNote";
import EditNote from "./features/notes/EditNote";
import Prefetch from "./components/Protected/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import { ROLES } from "./config/ROLES";
import RequireAuth from "./features/auth/RequireAuth";
import useTitle from "./hooks/useTItle";
function App() {
  useTitle("Notes Application");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />

        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<DashWelcome />} />

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>
                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
