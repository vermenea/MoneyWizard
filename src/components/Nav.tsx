import userIcon from '/public/icons/user.png';
import walletIcon from '/public/icons/wallet.png';
// import userIcon from '/public/icons/user.png';
// import userIcon from '/public/icons/user.png';



export default function Nav() {
  return (
    <nav>
      <h1>MoneyWizard</h1>
      <li><img src={userIcon} width={30}></img></li>
      <li><img src={walletIcon} width={30}></img></li>
      <li></li>
      <li></li>
    </nav>
  );
}
