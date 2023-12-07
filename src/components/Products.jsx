import React from "react";
import {
  FaUserShield,
  FaWallet,
  FaVoicemail,
  FaTeamspeak,
  FaArrowRightLong,
} from "react-icons/fa6";

const Products = () => {
  return (
    <div className="">
      {/* about text  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 gap-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais"
              alt="about img"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did.
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-8">
              architecto excepturi explicabo dicta provident officia in. Eaque,
              velit. Alias ipsa vero veritatis repellendus ducimus. Lorem
              ipsumdolor sit amet consectetur adipisicing elit. Atque voluptas
              deleniti, ducimus corrupti nostrum aliquam
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company starts  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src="https://img.freepik.com/free-vector/cubes-geometric-composition_1284-41185.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais" alt="img" />
          </div>
          {/* stats  */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGray mb-8 leading-7">
                repudiandae eius sequi. A nostrum ab ullam nulla, dicta totam
                provident quod corrupti facere quis aspernatur. Ratione aperiam
                numquam voluptatum. Quia doloribus nobis natus saepe enim
                consectetur consequuntur at cumque velit iste libero voluptatem
                dolorem, asperiores quibusdam commodi dolore omnis sit ducimus
                fuga praesentium repudiandae exercitationem tenetur? Obcaecati
                odit cupiditate voluptatibus quam? consectetur consequuntur at
                cumque velit iste libero voluptatem dolorem, asperiores
                quibusdam commodi dolore omnis sit ducimus
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGray mb-8">British Drgon Boat Racing Association.</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/premium-vector/creative-lion-logo-with-slogan-template_611015-820.jpg?size=626&ext=jpg"
                    alt="brandLogo"
                  />
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/free-vector/save-date-card-with-golden-foliage-letters_24908-59121.jpg?t=st=1701872475~exp=1701873075~hmac=9060d7f0652157f48db8076b07fb6d3b30e8f8f53c2a2b00a207ca9253a818c9"
                    alt="brandLogo"
                  />
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/premium-vector/luxury-monogram-logo-template-vector-object-logotype-badge-design_93487-3120.jpg"
                    alt="brandLogo"
                  />
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/free-vector/golden-luxury-logotype-template_23-2147859913.jpg?size=626&ext=jpg"
                    alt="brandLogo"
                  />
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/free-vector/graphic-label-with-ornament-frame-shape-style_24877-54115.jpg?size=626&ext=jpg"
                    alt="brandLogo"
                  />
                  <img
                    className="w-12 h-12"
                    src="https://img.freepik.com/free-vector/golden-luxury-logotype-template_23-2147859913.jpg?size=626&ext=jpg"
                    alt="brandLogo"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href=""
                      className="font-semibold text-brandPrimary hover:text-neutral-700 "
                    >
                      My all customers <FaArrowRightLong className="inline-block ml-2"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
