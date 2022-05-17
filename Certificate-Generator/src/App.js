import Config from "./config";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  window.document.title =
    Config.Name + ": Claim / Verify Certificates powered by Sandru";
  return (
    <div className="App">
      <Header Config={Config} />
      <Main Config={Config} />
    </div>
  );
}
