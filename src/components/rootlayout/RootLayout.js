import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
// import MainNavigation from "./MainNavigation";

export default function RootLayout(){
    return(
        <div style={{display:'flex'}}>  
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}