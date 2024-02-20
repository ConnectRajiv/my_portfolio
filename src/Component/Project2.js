import React from "react";
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Project2 = () => {
  return (
    <div className="mt-10 px-5">
      <h2 className="max-w-[1200px] mx-auto text-[1.5rem] sm:text-[2rem] font-semibold text-[#0077B6] underline mb-6 text-center lg:text-left lg:text-[2.5rem] ">
        Project
      </h2>
      <div className="flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-4 gap-5">
        <div className="border-2 p-3 rounded-md shadow-md px-3 max-w-[275px] shadow-red-500">
          <div className="text-[1.3rem] font-semibold mb-2">To-do-App</div>
          <div className="text-[1rem] italic">
            Developed a full-stack web application using React, Java Spring
            Boot, and MySQL to create, update, and delete tasks .Utilized Spring
            Boot framework to build RESTful APIs for CRUD operations and
            authentication Configured MySQL database to store and retrieve task
            data and user credentials
          </div>
          <div className="flex border-1 rounded-md bg-red-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div>
              <a href="https://github.com/ConnectRajiv/to_do_App">
                {" "}
                Source Code{" "}
              </a>
            </div>
            <div className="text-sm">
              <FaCode />
            </div>
          </div>
        </div>
        <div className="border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-orange-500">
          <div className="text-[1.3rem] font-semibold mb-2">Code-pen-Clone</div>
          <div className="text-[1rem] italic">
            A code-pen clone project is a dynamic web application that empowers
            users to write and execute HTML, CSS, and JavaScript code directly
            within their browser, akin to the renowned online code editor,
            CodePen. This platform facilitates seamless creation and sharing of
            web pages.
          </div>
          <div className="flex border-1 rounded-md bg-orange-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div>
              <a href="https://github.com/ConnectRajiv/Code_Pen_Clone">
                {" "}
                Source Code{" "}
              </a>
            </div>
            <div className="text-sm">
              <FaCode />
            </div>
          </div>
        </div>
        <div className="border-2 p-3 rounded-md shadow-md px-3 max-w-[275px]  shadow-yellow-500">
          <div className="text-[1.3rem] font-semibold mb-2">
            Home Automation Using IOT
          </div>
          <div className="text-[1rem] italic">
            The primary objective of this project is to develop a home
            automation system utilizing an Arduino board equipped with Bluetooth
            technology, enabling remote control via any Android operating
            system-based smartphone for convenience and efficiency.
          </div>
          <div className="flex border-1 rounded-md bg-yellow-500 p-2 text-white mt-3 text-sm items-center gap-2 max-w-[120px]">
            <div>
              <a href="https://github.com/ConnectRajiv/autometrons-code-and-volts-IIITBH">
                {" "}
                Source Code{" "}
              </a>
            </div>
            <div className="text-sm">
              <FaCode />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap max-w-[1200px] item-center justify-center mx-auto my-8">
        <div className="text-[#023E8A] font-semibold underline cursor-pointer text-md sm:text-xl flex gap-1 items-center">
          <a href="https://github.com/ConnectRajiv">
            Other Projects : github.com/ConnectRajiv{" "}
          </a>{" "}
          <FaLink />
        </div>
      </div>
    </div>
  );
};

export default Project2;
