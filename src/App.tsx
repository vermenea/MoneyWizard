import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wallet from "./components/Wallet";

function App(): JSX.Element {
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(false);

  const handleWalletClick = (): void => {
    setShowWallet(!showWallet);
    setShowHome(false);
  };

  const handleGoHome = (): void => {
    setShowHome(!showHome);
    setShowWallet(false);
  };

  return (
    <>
      <div className="flex bg-slate-200">
        <Nav onWalletClick={handleWalletClick} goHome={handleGoHome} />
        {showHome && <Header />}
        {showWallet && <Wallet />}
      </div>
    </>
  );
}

export default App;
