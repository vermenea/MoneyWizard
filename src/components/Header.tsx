import logo from "/public/icons/logo.png";

export default function Nav() {
  return (
    <header className="flex justify-center items-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">MoneyWizard</h1>
      <img src={logo} alt="MoneyWizard Logo" width={70} />
    </header>
  );
}
