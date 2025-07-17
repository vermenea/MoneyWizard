import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Wallet from "./components/Wallet";
import Header from "./components/Header";
import Settings from "./components/Settings";
import RegisterPanel from "./components/RegisterPanel";
import LoginPanel from "./components/LoginPanel";

function App() {
  return (
    <main className="flex">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/wallet" Component={Wallet} />
          <Route path="/register" Component={RegisterPanel} />
          <Route path="/login" Component={LoginPanel} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
