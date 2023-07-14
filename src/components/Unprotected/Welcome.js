import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTItle";

const Welcome = () => {
  useTitle("Home Page");
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to
          <span className="nowrap">&nbsp; A Notes Assigning Application</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Please
          <Link to="/login">
            &nbsp;<span style={{ textDecoration: "underline" }}>LogIn</span>
            &nbsp;
          </Link>{" "}
          to start taking and assigning notes!
        </p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Welcome;
