import React from "react";
import iiitbh_logo from "../Content/iiitbh_logo.jpg";
import RLSY_logo from "../Content/Rlsy_logo.png";
import Mdj_logo from "../Content/mdj_logo.jpg";
import robo_logo from "../Content/Robo_club.jpg";
import hostel_logo from "../Content/gsha_logo.png";
import hindi_logo from "../Content/hindi logo.jpeg";

const Edex = () => {
  return (
    <div className="flex flex-col max-w-[1200px] item-center justify-between mx-auto mt-10 md:flex-row px-5 gap-5">
      <div>
        <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-[#0077B6] underline mb-10">
          Education
        </div>
        <div className="flex flex-row gap-5 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={iiitbh_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
              Indian Institute of Information Technology Bhagalpur
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              B.Tech in Mechatronics and Automation Engineering 
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">
              2020 - 2024
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={RLSY_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
              Ram Lakhan Singh College, Bakhtiyarpur
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              Class 12 Senior Secondary (BSEB)
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">2019</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={Mdj_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
              MDJ Public School, Ara
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              Class 10 Secondary (CBSE)
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">2017</p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-[#0077B6] underline mb-10">
          Experience
        </div>
        <div className="flex flex-row gap-5 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={iiitbh_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
            Training and placement Coordinator
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              Indian Instititute of Information Technology, Bhagalpur{" "}
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">
              September, 2022 - Present{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={robo_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
              Robotics Club Coordinator
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              Technical Board IIITBH, Bhagalpur{" "}
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">
              June, 2022 - Aug, 2023
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-8 items-center shadow-md p-3 rounded-md shadow-slate-200 hover:scale-105">
          <div>
            <img src={hostel_logo} alt="" srcset="" width={90} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-[1rem] sm:text-[1.5rem]">
            General Secretary of Hostel Affairs
            </h2>
            <p className="italic text-[0.875rem] sm:text-[1.25rem]">
              Hostel Board IIITBH, Bhagalpur
            </p>
            <p className="font-bold text-[0.875rem] sm:text-[1.25rem]">
              September, 2022 - October, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edex;
