export default function Wallet() {
  return (
    <section className="grid grid-rows-4 grid-cols-6 w-screen max-h-screen">
      <h1 className="flex justify-center items-center row-start-1 row-end-2 col-start-2 col-end-6 text-center text-2xl uppercase font-semibold">
        wallet💵
      </h1>
      <div className="row-start-2 row-end-4 col-start-2 col-end-4 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-md">
        <h2 className="font-semibold uppercase">your current budget:</h2>
        <p className="p-5">
          2350<strong> PLN</strong>
        </p>
        <h2 className="font-semibold uppercase">expenses:</h2>
        <ul className="p-1">
          <li className="bg-purple-200 rounded-md p-0.5 m-2">food</li>
          <li className="bg-yellow-200 rounded-md p-0.5 m-2">home</li>
          <li className="bg-blue-200 rounded-md p-0.5 m-2">transport</li>
          <li className="bg-pink-200 rounded-md p-0.5 m-2">health</li>
          <li className="bg-green-200 rounded-md p-0.5 m-2">unexpected</li>
        </ul>
      </div>
      <div className="row-start-2 row-end-3 col-start-4 col-end-5 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-md">
        Add to wallet
      </div>
      <div className="row-start-2 row-end-3 col-start-5 col-end-6 bg-slate-50 p-5 m-4 border-2 border-slate-300 rounded-md">
        Remove from wallet
      </div>
      <div className="row-start-3 row-end-4 col-start-4 col-end-6 bg-slate-50  p-5 m-4 border-2 border-slate-300 rounded-md">
        <h2>See expenses</h2>
      </div>
    </section>
  );
}
