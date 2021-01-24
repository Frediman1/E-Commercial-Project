import React from 'react'


const navBar = () => {
    return (
        <div>
            <div className="navbar">

                <div className="logo">
                    <img src="../Project Images/Ecom Logo.jpeg" width="125" alt="Designed logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Product.html">Products</a></li>
                        <li><a href="Contact.html">Contact</a></li>
                    </ul>


                    <img src="../Project Images/shopping cart.png" width="30" height="20" alt="cart" />

                </nav>
            </div>
        </div>
    )
}
export default navBar;
