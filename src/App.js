

import Main from './Component/Main';
import RootLayout from './RootLayout';
import Bike_inner from './Bike_page/Bike_inner';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Bike_Categori from './Bike_Categori/Bike_Categori';
import Footer from './Footer';
const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout></RootLayout>,
  children: [
    { path: '/', element: <Main></Main> },
    { path: '/product', element: <Bike_inner ></Bike_inner> },
    {
      path: '/products', element: <Bike_Categori ></Bike_Categori>
    }

  ]

}])


function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
