import React from "react";
import style from "./GetIN.module.css";

 const GetIN= () => {
  return (
    <>
      <div className="GetForm">
        <h1>Get In Touch</h1>
        <label> Contact me</label>

        <form className="containForm"> 
          <div>
            <label> Full Name</label> <br />
            <input type="text" name="fullName" />
            <br />
            <label> Email</label> <br />
            <input type="text" name="fullName" />
            <br />
            <label> Phone Number</label><br />
            <input type="text" name="fullName" />
            <br />
            <label> Message</label><br />
            <textarea name="message" id="" cols="30" rows="10" placeholder="write your Message"></textarea>
            <br />
            <button type="Submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GetIN
