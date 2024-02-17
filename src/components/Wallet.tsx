export default function Wallet() {
  return (
    <section className="grid grid-rows-6 grid-cols-11 w-screen max-h-screen min-w-fit">
      {/* Greeting  */}
      <h1 className="flex justify-center items-center row-start-1 row-end-2 col-start-2 col-end-4 text-center text-2xl font-semibold">
        <h2>
          Hello, <strong className="text-purple-500 ml-1"> user!</strong>
        </h2>
      </h1>

      {/* Dashboard  */}
      <div className=" row-start-2 row-end-2 col-start-2 col-end-5 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total income:</h2>
      </div>
      <div className=" row-start-2 row-end-2 col-start-5 col-end-8 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total expenses:</h2>
      </div>
      <div className=" row-start-2 row-end-2 col-start-8 col-end-11 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Total balance:</h2>
      </div>
      <div className="row-start-3 row-end-4 col-start-2 col-end-4 bg-purple-100 p-3 m-4 border-2 border-purple-300 rounded-xl">
        <h2 className="text-purple-600">wallet:</h2>
      </div>
      <div className="row-start-3 row-end-4 col-start-4 col-end-6 bg-green-100 p-3 m-4 border-2 border-green-300 rounded-xl">
        <h2 className="text-green-600">savings:</h2>
      </div>

      {/* Icons  */}
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-6 col-end-7 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/food.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-7 col-end-8 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/health.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-8 col-end-9 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/home.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-9 col-end-10 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/pets.svg" />
      </div>
      <div className="flex items-center justify-center row-start-3 row-end-4 col-start-10 col-end-11 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-xl">
        <img src="/public/icons/others.svg" />
      </div>

      {/* Stats  */}
      <div className="row-start-4 row-end-6 col-start-2 col-end-6 bg-slate-50  p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Incomes:</h2>
      </div>
      <div className="row-start-4 row-end-6 col-start-6 col-end-11 bg-slate-50  p-5 m-4 border-2 border-slate-300 rounded-xl">
        <h2>Expenses:</h2>
      </div>
    </section>
  );
}
