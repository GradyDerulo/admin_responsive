
/* import './App.css'; */
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

import {createBrowserRouter, RouterProvider, Route, Link,Outlet} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from "./pages/login/Login";

import './styles/global.scss';
import User from "./pages/user_Unique/User";
import Product from "./components/product_Unique/Product";
/* import { Exercise } from "./exercice/Exercise"; */
//-----------------------------------------------
const Layout = () =>{
  return(
    <div className="main">

  <Navbar/>
 {/*  <Exercise/> */}
  <div className="container">
    <div className="menuContainer">
    <Menu/>    
    </div>
    <div className="contentContainer">
    <Outlet />
    </div>
  </div>

  
  <Footer/>

    </div>
  )
}
//-----------------------------------------------



/* const router_1 = createBrowserRouter([
  {
    path:"/",
    element: (
      <Home/>
    ),
  },
  {
    path:"/users",
    element: (
      <Users/>
    ),
  },
  {
    path:"/products",
    element: (
      <Products/>
    ),
  },
])
 */

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/users",
        element:<Users />
      },
      {
        path:"/products",
        element:<Products />
      },

      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },

    ],
  },
 
  {
    path:"/login",
    element:<Login/>
  }
])




function App() {

  return (
     
      <RouterProvider router={router}/>
  )
}

export default App
