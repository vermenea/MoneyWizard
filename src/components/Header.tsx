import logo from "/public/icons/logo.png";

export default function Nav() {
  return (
    <div className="flex flex-col justify-center items-center  w-screen">
      <header className="flex flex-col justify-center items-center">
        <div className="sm:w-16 sm:h-16 w-16 h-16 m-2">
          <img src={logo} alt="MoneyWizard Logo" />
        </div>
        <h1 className="text-4xl m-2 sm:text-5xl">MoneyWizard</h1>
      </header>
      <div className="flex justify-center items-center m-5">
        <button className="before:ease relative p-2 m-2  overflow-hidden border border-purple-400 bg-purple-400 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 rounded-md">
          Login
        </button>
        <button className="before:ease relative p-2 m-2  overflow-hidden border border-purple-400 bg-purple-400 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 rounded-md">
          Create an account
        </button>
      </div>
    </div>
  );
}
