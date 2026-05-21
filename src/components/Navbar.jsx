import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Jobgram
      </Link>

      <div className="nav-links">
        {username ? (
          <>
            <span className="welcome-text">
              Welcome {username}
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;