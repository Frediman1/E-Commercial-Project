import React from 'react'
// import React, { useState } from 'react'
// import ProductsJson from './Products.json'



const Filter = ({ onChange }) => {
    // const [searchProducts, setSearchProducts] = useState("")
    return (
        <div>
            <label ><input className="yes" type="text" name="Search" placeholder="Search Products" onChange={(ev) => { onChange(ev.target.value) }} /></label>
            {/* <label> <input type="text" name="Search" placeholder="Search Products" onChange={event => { setSearchProducts(event.target.values) }} /></label>
            {ProductsJson.filter((val) => {
                if (searchProducts === "") {
                    return val
                } else if (val.name.toLowerCase().includes(searchProducts.toLowerCase())) {
                    return val
                } else if (val.price.toLowerCase().includes(searchProducts.toLowerCase())) {
                    return val
                } else if (val.image.toLowerCase().includes(searchProducts.toLowerCase())) {
                    return val
                }
                else return false
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.image}</p>
                        <p>{val.name}</p>
                        <p>{val.price}</p>
                    </div>
                );
            })} */}
        </div>
    );
}
export default Filter;