import carmen from "./carmen.svg";
import Tours from "./Tours";
import "./sass/App.css";

export default function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <Tours />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}
