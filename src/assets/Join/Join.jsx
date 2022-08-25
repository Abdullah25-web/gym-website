import React from "react";
import { useRef } from "react";
import "../Join/Join.css";
import emailjs from "@emailjs/browser";
function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aza9vji",
        "template_5mcne8i",
        form.current,
        "9IRE3CxHgUAZd6lkJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text">With us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input
            ref={form}
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />

          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
