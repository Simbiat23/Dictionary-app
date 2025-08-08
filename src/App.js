import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded By Simbiat Taofeek and opensorced on{" "}
          <a
            href="https://github.com/Simbiat23/Dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
