
import { Outlet } from "react-router-dom";
import Nav from "./Component/nav";

function RootLayout() {
 return (

  <>
   <Nav></Nav>
   <Outlet></Outlet>
  </>

 )


}
export default RootLayout