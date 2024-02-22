export default function Settings() {
  return (
    <section className="flex flex-col justify-center items-center w-screen">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Settings</h1>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 bg-white w-6/12 p-6 rounded-lg shadow-md">
        <div className="m-3 p-2 w-52">
          <label htmlFor="theme" className="mb-2 font-medium block">
            Theme
          </label>
          <select
            id="theme"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="m-3 p-2 w-52">
          <label htmlFor="currency" className="mb-2 font-medium block">
            Currency
          </label>
          <select
            id="currency"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currency options as needed */}
          </select>
        </div>

        <div className="row-span-1 col-span-4">
          <label htmlFor="categories" className="m-2 p-3 font-medium block">
            Categories
          </label>
          <div className="p-2">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Category ${index + 1}`}
                className="m-3 p-2 border border-gray-300 rounded-md w-2/12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
