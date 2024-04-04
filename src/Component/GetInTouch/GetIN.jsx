import React, { useState } from "react";
import style from "./GetIN.module.css";

const GetIN = () => {
  const [data, UpdateData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    Message: "",
  })
  const handleChange = (a) => {
    const { name, value, files } = a.target;
    UpdateData((preData) => ({
      ...preData,
      [name]: name === "" ? URL.createObjectURL(files[0]) : value,
    }));
  };
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data)
  }

  return (
    <>
      <div className={style.GetForm}>
        <div id={style.Get}>Get In Touch</div><br />
        <div className={style.Me}> Contact me</div>

        <form onSubmit={handleSubmit} className={style.containForm}>
          <div className={style.formDiv}>
            <label id={style.Me}> Full Name</label> <br />
            <input type="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
            />
            <br />
            <label id={style.Me}> Email</label> <br />
            <input type="email"
              name="email"
              value={data.email}
              onChange={handleChange} />
            <br />
            <label id={style.Me}> Phone Number</label><br />
            <input type="number" 
            id="phoneNumber"
            name="phoneNumber"
            value={data.phoneNumber} />
            <br />
            <label id={style.Me}> Message</label><br />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="write your Message"></textarea>
            <br /> <br />
            <button type="Submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GetIN
