import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import Home from "./pages/Home";
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'


const Layout = () => {
  return(
    <div className="App">
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
])

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
