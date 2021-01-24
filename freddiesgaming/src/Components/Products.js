import React from 'react'

const products = () => {
    return (
        <div>
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <label for="price">Search Product</label>
                    <select id="price">

                        <option>Default Sorting</option>
                        <option>Sort by Price</option>
                        <option>Sort by Porpularity</option>
                        <option>Sort by Rating</option>
                        <option>Sort by Sale</option>
                    </select>


                </div>


                <div className="small-container1">
                    <div className="col-4">
                        <img src="./Project%20Images/fifa%2021%20new.jpg" alt="Soccer" />
                        <h4>Fifa 21</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$59.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/NBA%202k21.jpg" alt="basketball" />
                        <h4>NBA 2k21-Playstation 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$59.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/Spider%20man%20.jpg" alt="console" />
                        <h4>Marvel's Spider-Man: Miles Morales Launge Edition-Playstation 5</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$59.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/WII%20Console.jpg" alt="console 2" />
                        <h4>Nintendo Wii Console, Black with New Super Mario Bros Wii (Renewed)</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$273.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="small-container2">
                    <div className="col-4">
                        <img src="./Project%20Images/xbox%20controller%20.jpg" alt="controller" />
                        <h4>Xbox Wirelesss Controller-Shock Blue<br />by Microsoft- Xbox one
                </h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$64.00</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>

                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/xbox%20series%20x.jpg" alt="controller 2" />
                        <h4>Xbox Series X<br />by microsoft</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$499.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/Playstation%20classic.jpg" alt="ps classic" />
                        <h4>Sony Playstation Classic-Playstation</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$74.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/PS5%20Digital.jpg" alt="ps5 digital" />
                        <h4>Sony Playstation 5 Digital Edition<br />by Playstation</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$399.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="small-container3">
                    <div className="col-4">
                        <img src="./Project%20Images/PS5%20disk.jpg" alt="disk ps5" />
                        <h4>Sony Playstation 5 Console<br />by Playstation</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$499.99</p>
                        <button className="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/Assasins%20Greed%20.jpg" alt="new assasins" />
                        <h4>Assasin's Creed Valhalla-Playstation 5<br /> by Ubisoft</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>$65.99</p>
                        <button class="mycart">
                            <span>Add to Cart</span>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/Call%20of%20Duty%20.jpg" alt="cod new" />
                        <h4>Call of Duty: Black Ops Cold War<br />by ACTIVITION</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>$69.99</p>
                        <button class="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./Project%20Images/Dual%20sense.jpg" alt="controller ps5" />
                        <h4>DualSens Wireless Controller<br />by Playstation</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>$69.99</p>
                        <button class="mycart">
                            <span>Add to Cart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default products;