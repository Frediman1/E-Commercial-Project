import React from 'react'


const homePage = () => {
    return (
        <div>
            <div className="navbar">

                <div className="logo">
                    <img src="./Project%20Images/Ecom%20Logo.jpeg" width="125" alt="Designed logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Product.html">Products</a></li>
                        <li><a href="Contact.html">Contact</a></li>
                    </ul>


                    <img src="./Project%20Images/shopping%20cart.png" width="30" height="20" alt="cart" />

                </nav>
            </div>
        </div>
    )
}
export default homePage;