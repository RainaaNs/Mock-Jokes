import React from "react";
import Jokely from "../assets/Jokely.png"

const Navbar: React.FC = () =>{
    return(
        <nav>
            <ul>
            <ul className="absolute z-10">
                <li className="pt-10 pl-10"> <img src={Jokely} className="w-[90px]" alt="Jokely logo"/> </li>
            </ul>
            </ul>
        </nav> 
    )

}
 

export default Navbar;