import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTItle";
const DashWelcome = () => {
  const date = new Date();
  const { username, isAdmin, isManager } = useAuth();
  useTitle(username);
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(date);

  const content = (
    <section className="welcome">
      <p>{today}</p>

      <h1>Welcome! {username}</h1>

      <p>
        <Link to="/dash/notes">View Notes</Link>
      </p>
      <p>
        <Link to="/dash/notes/new">Create New Note</Link>
      </p>
      {(isAdmin || isManager) && (
        <p>
          <Link to="/dash/users">View User Settings</Link>
        </p>
      )}
      {(isAdmin || isManager) && (
        <p>
          <Link to="/dash/users/new">Create New User</Link>
        </p>
      )}
    </section>
  );

  return content;
};

export default DashWelcome;
