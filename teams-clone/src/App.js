import logo from './logo.svg';
import './App.css';
import './css/index.css'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Teams Clone</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Profile </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Instant Meeting</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Requests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Connections</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Groups</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Themes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Ocean Blue</a>
                <div class="dropdown-divider divider"></div>
                <a class="dropdown-item" href="#">Forest Green</a>
                <div class="dropdown-divider divider"></div>
                <a class="dropdown-item" href="#">Space Black</a>
                <div class="dropdown-divider divider"></div>
                <a class="dropdown-item" href="#">Fire Red</a>
                <div class="dropdown-divider divider"></div>
                <a class="dropdown-item" href="#">Sunny Yellow</a>
                <div class="dropdown-divider divider"></div>
                <a class="dropdown-item" href="#">Thunder Grey</a>
              </div>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
