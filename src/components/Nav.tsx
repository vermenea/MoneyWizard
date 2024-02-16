import userIcon from "/public/icons/user.svg";
import walletIcon from "/public/icons/wallet.svg";
import chartIcon from "/public/icons/chart-pie.svg";
import settingsIcon from "/public/icons/settings.svg";
import logo from "/public/icons/logo.png";

const icons = [
  { icon: userIcon, alt: "User" },
  { icon: walletIcon, alt: "Wallet" },
  { icon: chartIcon, alt: "Chart" },
  { icon: settingsIcon, alt: "Settings" },
];

export default function Nav() {
  return (
    <nav className="flex flex-col items-center justify-center w-20 h-screen  bg-purple-600 ">
      <img src={logo} width={45} className="my-10"></img>
      <ul>
        {icons.map((item, index) => (
          <li key={index}>
            <button>
              <img
                src={item.icon}
                alt={item.alt}
                className="w-10 my-10 cursor-pointer"
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
