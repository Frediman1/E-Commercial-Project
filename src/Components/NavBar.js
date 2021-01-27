import React from 'react'
import { Link } from 'react-router-dom'


const navBar = () => {
    return (

        <div className="navbar">


            <nav>

                <img src="./Project Images/Ecom Logo.jpeg" width="125" alt="Designed logo" />

                <ul>
                    <Link to="/home"> <li><a href="HomePage">Home</a></li></Link>
                    <Link to="/products"> <li><a href="Products">Products</a></li></Link>
                    <Link to="/contact"><li><a href="Contact">Contact</a></li></Link>
                </ul>






            </nav>
        </div>

    )
}
export default navBar;
