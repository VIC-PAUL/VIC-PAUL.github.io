import React from "react";

const Contact = () => {
  return (
    <div name="contact" className=" w-full h-auto text-black bg-white md:h-full ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-40">
          <p className=" text-4xl font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7234cc19-9bd0-42c2-865a-f6f96709561a" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
        
      </div>
      
    </div>



  );
};

export default Contact;
