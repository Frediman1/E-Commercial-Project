import React, { useState } from 'react'
import Filter from './Filter'
import ProductsJson from './Products.json'
import Product from './Product'
// import filter from './Filter'

const Products = () => {
    const [productFilterValue, updateProductFilterValue] = useState('')
    const productComponents = ProductsJson.filter((val) => {
        if (productFilterValue === "") {
            return true
        } else if (val.name.toLowerCase().includes(productFilterValue.toLowerCase())) {
            return true
        } else if (val.price.toLowerCase().includes(productFilterValue.toLowerCase())) {
            return true
        } else if (val.image.toLowerCase().includes(productFilterValue.toLowerCase())) {
            return true
        }
        return false
    }).map((val, key) => {
        return (
            <Product key={key} {...val} />
        );
    });

    return (

        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <Filter onChange={value => {
                    updateProductFilterValue(value)
                }} />
                {/* <label> <input type="text" name="Search" placeholder="Search Products" /></label> */}
                <select id="price">

                    <option>Default Sorting</option>
                    <option>Sort by Price</option>
                    <option>Sort by Rating</option>

                </select>


            </div>


            <div className="small-container1">
                {productComponents}

            </div>
        </div>

    )
}
export default Products;