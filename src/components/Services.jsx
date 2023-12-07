import React from "react";
import { FaUsersLine, FaVirusCovid, FaYinYang } from "react-icons/fa6";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "Our membership management software provides full automation of membership renewals payments",
      image: <FaUsersLine />,
    },
    {
      id: 2,
      title: "National Association",
      description:
        "Our membership management software provides full automation of membership renewals payments",
      image: <FaVirusCovid />,
    },
    {
      id: 3,
      title: "Club and Group",
      description:
        "Our membership management software provides full automation of membership renewals payments",
      image: <FaYinYang />,
    },
  ];

  return (
    <div className="md:px-14 px-4 my-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2 ">
          Our Clients
        </h2>
        <p className="text-neutralGray ">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo  */}
        <div className="my-12 flex flex-wrap justify-between gap-8">
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/premium-vector/creative-lion-logo-with-slogan-template_611015-820.jpg?size=626&ext=jpg"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/save-date-card-with-golden-foliage-letters_24908-59121.jpg?t=st=1701872475~exp=1701873075~hmac=9060d7f0652157f48db8076b07fb6d3b30e8f8f53c2a2b00a207ca9253a818c9"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/premium-vector/luxury-monogram-logo-template-vector-object-logotype-badge-design_93487-3120.jpg"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/golden-luxury-logotype-template_23-2147859913.jpg?size=626&ext=jpg"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/graphic-label-with-ornament-frame-shape-style_24877-54115.jpg?size=626&ext=jpg"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/golden-luxury-logotype-template_23-2147859913.jpg?size=626&ext=jpg"
            alt="brandLogo"
          />
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/premium-vector/creative-lion-logo-with-slogan-template_611015-820.jpg?size=626&ext=jpg"
            alt="brandLogo"
          />
        </div>
        {/* service card  */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGray font-semibold mb-2 ">
            Manage your entire community ina a single system.
          </h2>
          <p className="text-neutralGray ">Who is Nextcent suitable for?</p>
        </div>
        {/* cards  */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12  gap-12">
          {services.map((service) => (
            <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
              <div>
                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <span className=" text-2xl text-brandPrimary ">{service.image}</span>
                </div>
                <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGray ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
