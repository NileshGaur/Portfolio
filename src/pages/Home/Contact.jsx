import React from "react";
import SectionHeader from "../../components/SectionTitle";
import Lottie from "lottie-react";
import contact from "../../assets/lottie-animations/contact.json";

function Contact() {
  const user = {
    name: "Nilesh Gaur",
    age: 26,
    email: "nileshgaur99@gmail.com",
    phone: "+91 9079796615",
    currentLocation: "Bangalore, India",
    country: "India",
  };
  return (
    <div className="contact">
      <SectionHeader title="Let's Talk" />
      <div className="flex justify-between items-center py-10 sm:flex-col">
        <div className="flex flex-col justify-center gap-5 w-1/2">
          <h1 className="text-tertiary">{"{"}</h1>
          {Object.keys(user).map((key, index) => {
            return (
              <div className="flex flex-col">
                <h1 key={index} className=" text-white pl-10 text-xl">
                  <span className="text-tertiary">{key}</span> :{" "}
                  <span className="text-secondary">{user[key]}</span>
                </h1>
              </div>
            );
          })}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-auto w-1/2 flex justify-center">
          <Lottie
            animationData={contact}
            loop
            autoplay
            style={{ height: 500, width: 500 }}
          />
        </div>
      </div>
    </div>
  );
}
export default Contact;
