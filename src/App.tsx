import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Wallet from "./components/Wallet";
import Header from "./components/Header";
// import Stats from "./components/Stats";
import Settings from "./components/Settings";

function App() {
  return (
    <main className="flex bg-slate-200">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/wallet" Component={Wallet} />
          {/* <Route path="/stats" Component={Stats} /> */}
          <Route path="/settings" Component={Settings} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
