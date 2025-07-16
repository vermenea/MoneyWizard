import { Link } from "react-router-dom";
import logo from "/public/icons/logo.png";
import walletIcon from "/public/icons/wallet.svg";
import chartIcon from "/public/icons/chart-pie.svg";
import settingsIcon from "/public/icons/settings.svg";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center justify-center min-w-16 min-h-screen bg-purple-800 p-1 max-w-16">
      <ul className="flex flex-col justify-between items-center text-white m-2">
        <li className="flex items-center my-5">
          <Link to="/">
            <img src={logo} width={45} className="mr-2" alt="Logo" />
          </Link>
        </li>
        <li className="flex items-center my-5">
          <Link to="/wallet">
            <img
              src={walletIcon}
              className="mr-2"
              alt="Wallet Icon"
              width={30}
            />
          </Link>
        </li>
        <li className="flex items-center my-5">
          <Link to="/stats">
            <img src={chartIcon} className="mr-2" alt="Chart Icon" width={30} />
          </Link>
        </li>
        <li className="flex items-center my-5">
          <Link to="/settings">
            <img
              src={settingsIcon}
              className="mr-2"
              alt="Settings Icon"
              width={30}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
