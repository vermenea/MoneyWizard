export default function Settings() {
  return (
    <section className="flex flex-col justify-center items-center w-screen">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Settings</h1>
      <div className="flex bg-white rounded-xl p-8">
        <div className="w-1/2 mr-12">
          <h2 className="text-gray-500 font-semibold my-5">Account</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-sm">
            <img alt="user avatar"></img>
            <h3 className="font-semibold m">Natalia Zagórska</h3>
            <p>
              That's not you?
              <span className="underline ml-1">Change user</span>
            </p>
          </div>
          <h2 className="text-gray-500 font-semibold my-5">Username</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-sm">@vermenea</div>
          <h2 className="text-gray-500 font-semibold my-5">Currency</h2>
          <div className="flex ">
            <button className="py-0.5 px-3 m-1 bg-purple-200 border-2 border-purple-500 rounded-2xl text-xs font-semibold">
              PLN
            </button>
            <button className="py-0.5 px-3 m-1 bg-purple-200 border-2 border-purple-500 rounded-2xl text-xs font-semibold">
              EUR
            </button>
            <button className="py-0.5 px-3 m-1 bg-purple-200 border-2 border-purple-500 rounded-2xl text-xs font-semibold">
              GBP
            </button>
            <button className="py-0.5 px-3 m-1 bg-purple-200 border-2 border-purple-500 rounded-2xl text-xs font-semibold">
              USD
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="text-gray-500 font-semibold my-5">Preferences</h2>
          <div className="flex flex-col">
            <input type="checkbox" name="" id="" />
            <label>Dark mode</label>
            <input type="checkbox" name="" id="" />
            <label>Show username instead of real name</label>
          </div>

          <h2 className="text-gray-500 font-semibold my-5">Categories</h2>
          <div className="flex mx-1 my-10">
            <input
              type="text"
              placeholder="set..."
              className=" w-24 bg-gray-100 rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="set..."
              className="mx-1 w-24 bg-gray-100 rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="set..."
              className="mx-1 w-24 bg-gray-100 rounded-lg text-center"
            />
          </div>
          <div className="flex mx-1 my-12">
            <input
              type="text"
              placeholder="set..."
              className=" w-24 bg-gray-100 rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="set..."
              className="mx-1 w-24 bg-gray-100 rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="set..."
              className="mx-1 w-24 bg-gray-100 rounded-lg text-center"
            />
          </div>
          <div className="flex justify-end mt-8">
            <button className="py-0.5 px-4 m-1 bg-purple-500 rounded-2xl text-sm text-center font-semibold text-white">
              save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
