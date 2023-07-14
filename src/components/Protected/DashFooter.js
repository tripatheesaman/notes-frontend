import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HiHome } from "react-icons/hi";

const DashFooter = () => {
  const { username, status } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onGoHomeClicked = () => {
    navigate("/dash");
  };
  let homeButton = null;
  if (pathname !== "/dash") {
    homeButton = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <HiHome />
      </button>
    );
  }
  const content = (
    <footer className="dash-footer">
      {homeButton}
      <p>Current User:{username}</p>
      <p>Status:{status}</p>
    </footer>
  );

  return content;
};

export default DashFooter;
