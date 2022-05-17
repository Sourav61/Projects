const Header = ({ Config }) => {
  return (
    <nav className="Header navbar navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <span className="navbar-brand mb-0 h1">
          {Config.Name}: Claim / Verify Certificates powered by Sandru
        </span>
      </div>
    </nav>
  );
};

export default Header;
