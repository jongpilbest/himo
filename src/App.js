import Main from './Component/Main';
import RootLayout from './RootLayout';
import Bike_inner from './Bike_page/Bike_inner';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Bike_Categori from './Bike_Categori/Bike_Categori';

import axios from 'axios';
const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout RootLayout ></RootLayout>,
  children: [
    { path: '/', element: <Main></Main> },
    {
      path: '/product/:productname',

      loader: async ({ params }) => {


        const rr = await axios(`/product/${params.productname}`, {
          method: 'GET',
          mode: 'no-cors',
          headers: { "Access-Control-Allow-Origin": "*" },

          withCredentials: true,
          credentials: 'same-origin',
        })
        console.log(rr.data);

        return rr.data;

      }
      ,

      element: <Bike_inner ></Bike_inner>,
    },
    {
      path: '/products', loader: async () => {


        const rr = await axios(`/products`, {
          method: 'GET',
          mode: 'no-cors',
          headers: { "Access-Control-Allow-Origin": "*" },

          withCredentials: true,
          credentials: 'same-origin',
        })

        return rr.data;

      }, element: <Bike_Categori ></Bike_Categori>
    }

  ]

}])


function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;