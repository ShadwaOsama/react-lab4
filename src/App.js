
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import MasterLayout from './Layout/MasterLayout/MasterLayout';
import Home from './Layout/Home/Home'
import About from './Layout/About/About'
import Login from './Layout/Login/Login'
import Movies from './Layout/Movies/Movies'
import Notfound from './Layout/NotFound/Notfound';
import MovieDetails from './Layout/MovieDetails/MovieDetails';
import Favorites from './Layout/Favorites/Favorites';
const router= createBrowserRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'login',element:<Login/>},
    {path:'favorite',element:<Favorites/>},
    {path:'movies',element:<Movies/>},
    {path:'movies/:movieId',element:<MovieDetails/>},
    {path:'*',element:<Notfound/>},
  ]}
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
