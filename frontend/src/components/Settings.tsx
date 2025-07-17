export default function Settings() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-50 p-2">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-purple-500">Settings</h1>
      <div className="
        flex flex-col w-full max-w-md bg-white rounded-xl p-4 md:p-8 shadow
        md:max-w-4xl md:flex-row
      ">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-gray-500 font-semibold my-4">Account</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-sm flex items-center gap-3">
            <img alt="user avatar" className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <h3 className="font-semibold">Natalia Zagórska</h3>
              <p>
                That's not you?
                <span className="underline ml-1 cursor-pointer">Change user</span>
              </p>
            </div>
          </div>
          <h2 className="text-gray-500 font-semibold my-4">Username</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-sm">@vermenea</div>
          <h2 className="text-gray-500 font-semibold my-4">Currency</h2>
          <div className="flex flex-wrap gap-2">
            {["PLN", "EUR", "GBP", "USD"].map(c => (
              <button
                key={c}
                className="py-1 px-4 bg-purple-200 border-2 border-purple-500 rounded-2xl text-xs font-semibold"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-gray-500 font-semibold my-4">Preferences</h2>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-lg p-4 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Dark mode
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Show username instead of real name
            </label>
          </div>

          <h2 className="text-gray-500 font-semibold my-4">Categories</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                placeholder="set..."
                className="w-24 bg-gray-100 rounded-lg text-center"
              />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="py-1 px-6 bg-purple-500 rounded-2xl text-sm font-semibold text-white shadow">
              save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
