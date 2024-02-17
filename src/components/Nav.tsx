import { Link } from "react-router-dom";
import userIcon from "/public/icons/user.svg";
import walletIcon from "/public/icons/wallet.svg";
import chartIcon from "/public/icons/chart-pie.svg";
import settingsIcon from "/public/icons/settings.svg";
import logo from "/public/icons/logo.png";

interface Icon {
  icon: string;
  alt: string;
  linkTo: string;
  id: number; 
}

const icons: Icon[] = [
  { icon: userIcon, alt: "User", linkTo: "/nav/1", id: 1 },
  { icon: walletIcon, alt: "Wallet", linkTo: "/nav/2", id: 2 },
  { icon: chartIcon, alt: "Chart", linkTo: "/nav/3", id: 3 },
  { icon: settingsIcon, alt: "Settings", linkTo: "/nav/4", id: 4 },
];

export default function Nav() {
  // const params = useParams();

  return (
    <nav className="flex flex-col items-center justify-center min-w-16 h-screen bg-purple-800">
      <button>
        <img src={logo} width={45} className="my-10" alt="Logo" />
      </button>
      <ul>
        {icons.map((item) => (
          <li key={item.id}>
            <Link to={item.linkTo}>
              <img src={item.icon} alt={item.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
