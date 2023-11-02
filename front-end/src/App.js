import logo from './logo.svg';
import './App.css';
import PullArticles from './Components/PullArticles';
import RoutingTest from './View/RoutingTest';
import Article from './View/Article';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './View/Home';

function App() {

  const router = createBrowserRouter([{
    path: "/RoutingTest",
    element: <RoutingTest></RoutingTest>
  },
  {
    path: "/",
    element: <Home></Home>
  },
  //the rotue below is an example of dynamic routing
  {
    path: "/article/:articleID",
    element: <Article></Article>
  }])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
