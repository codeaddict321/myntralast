import React from "react";
import Cart from "../assets/cart.png"
import logo from "../assets/logo.png"
import Sorting from "../components/Sorting";
import { Link } from "react-router-dom";
// import Searchbar from "./Components/Searchbar.jsx";
// import CartLogo from './Components/CartLogo.jsx';
import SearchBar from "../components/SearchBar";
export default function Header({search,setSearch}){
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <div className="logo">
                        <a href="/"><img src={logo} alt="logo" style={{height: "7vh", paddingTop: "14%"}}></img></a>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="/">MEN</a></li>
                            <li><a href="/">WOMEN</a></li>
                            <li><a href="/">KID</a></li>
                        </ul>
                    </div>
             
                </div>
                <SearchBar search={search} setSearch={setSearch} />
                {/* <Searchbar/>
                <CartLogo/> */}
              <div className="cart__container">
            <Link to={"/cart"}>
            <img src={Cart} alt="" />
            </Link>  
                </div> 
            </nav>
        </header>
    )
}

