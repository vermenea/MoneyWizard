import React from "react";
import userIcon from "/public/icons/user.svg";
import walletIcon from "/public/icons/wallet.svg";
import chartIcon from "/public/icons/chart-pie.svg";
import settingsIcon from "/public/icons/settings.svg";
import logo from "/public/icons/logo.png";

interface NavProps {
  onWalletClick: () => void;
  goHome: () => void;
}

interface Icon {
  icon: string;
  alt: string;
}

const icons: Icon[] = [
  { icon: userIcon, alt: "User" },
  { icon: walletIcon, alt: "Wallet" },
  { icon: chartIcon, alt: "Chart" },
  { icon: settingsIcon, alt: "Settings" },
];

const Nav: React.FC<NavProps> = ({ onWalletClick, goHome }): JSX.Element => {
  return (
    <nav className="flex flex-col items-center justify-center min-w-16 h-screen bg-purple-800 ">
      <button onClick={goHome}>
        <img src={logo} width={45} className="my-10" alt="Logo" />
      </button>
      <ul>
        {icons.map((item, index) => (
          <li key={index}>
            <button onClick={() => onWalletClick()}>
              <img src={item.icon} alt={item.alt} className="w-8 my-10" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
