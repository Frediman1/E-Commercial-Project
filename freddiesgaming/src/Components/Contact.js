import React from 'react'
// import SimpleSlider from './Slider'

const contact = () => {
    return (

        <div className="container" >
            <form >
                <h1>Contact Us</h1>
                <label for="fname">First Name</label><br />
                <input type="text" id="fname" placeholder="John" required /><br />
                <label for="lname">Last Name</label><br />
                <input type="text" id="lname" placeholder="Doe" required /><br />
                <label for="Pnumber">Phone Number</label><br />
                <input type="tel" id="Pnumber" placeholder="1234567890" /><br />
                <label for="email">Email</label><br />
                <input type="Email" id="email" placeholder="@gmail.com" required /><br />
                <label for="DOB">Date of Birth</label><br />
                <input type="date" id="DOB" required /><br />
                <label for="Gender">Gender</label><br />
                <select id="Gender" >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select><br />
                <label for="comment" > Comment<br /><textarea cols="35" rows="5" name="mes" id="comment" ></textarea> </label><br />
                <button>Submit</button>
            </form>
            <button />
            {/* <section>
                    <SimpleSlider />
                </section> */}
        </div>

    )
}

export default contact;