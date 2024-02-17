import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wallet from "./components/Wallet";

const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/wallet", element: <Wallet /> },
 
]);

// const router = createBrowserRouter(routes, { basename: "/" });

function App() {
  return (
    <>
      <div className="flex bg-slate-200">
        <Nav />
        <RouterProvider router={router} />
      </div>
      <BrowserRouter/>
    </>
  );
}

export default App;
