import React from "react";
import {
  FaUserShield,
  FaWallet,
  FaVoicemail,
  FaTeamspeak,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="">
      {/* about text  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 gap-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais"
              alt="about img"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at pixelgrage.
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas deleniti, ducimus corrupti nostrum aliquam architecto
              excepturi explicabo dicta provident officia in. Eaque, velit.
              Alias ipsa vero veritatis repellendus ducimus.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company starts  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              Helping a Local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          {/* stats  */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaUserShield className="text-brandPrimary" size={25} />
                <div>
                  <h4 className="text-2xl text-neutralDGray font-semibold">
                    2,245341
                  </h4>
                  <p>Member</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaWallet className="text-brandPrimary" size={25} />
                <div>
                  <h4 className="text-2xl text-neutralDGray font-semibold">
                    4,5896
                  </h4>
                  <p>Member</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaUserShield className="text-brandPrimary" size={25} />
                <div>
                  <h4 className="text-2xl text-neutralDGray font-semibold">
                    2,245341
                  </h4>
                  <p>Event Booking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaWallet className="text-brandPrimary" size={25} />
                <div>
                  <h4 className="text-2xl text-neutralDGray font-semibold">
                    2,245341
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
