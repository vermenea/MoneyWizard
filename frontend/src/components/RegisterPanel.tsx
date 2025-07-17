export default function RegisterPanel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      <div>
        <h1>Register</h1>
        <form action="">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" required className="mt-1 block w-full px-3 py-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" />
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">Register</button>
          
        </form>

      </div>
    </div>
  )
}