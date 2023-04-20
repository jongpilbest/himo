

import Main from './Component/Main';
import RootLayout from './RootLayout';
import Bike_inner from './Bike_page/Bike_inner';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Footer from './Footer';
const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout></RootLayout>,
  children: [
    { path: '/', element: <Main></Main> },
    { path: '/product', element: <Bike_inner ></Bike_inner> }

  ]

}])


function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
