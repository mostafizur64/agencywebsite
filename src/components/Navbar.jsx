import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll } from "react-scroll";

// react icons
import { FaXmark, FaBars, FaAccusoft } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  //   navigration items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 right-0 left-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? " sticky top-0 right-0 left-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex text-base items-center justify-between gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <span className="text-[#263238]">
              {" "}
              <div></div>{" "}
              <FaAccusoft
                className="text-brandPrimary inline-block mr-2"
                size={40}
              />{" "}
              NEXCENT
            </span>
          </a>
          {/* nav items for large device   */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item) => (
              <ScrollLink
                to={item.path}
                key={item.path}
                spy={true}
                smooth={true}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
                onClick={() =>
                  animateScroll.scrollTo(document.getElementById(item.path))
                }
              >
                {item.link}
              </ScrollLink>
            ))}
          </ul>
          {/* btn for large device  */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900 "
            >
              Login{" "}
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 translate-all duration-300 rounded hover:bg-neutralDGray">
              Sign up
            </button>
          </div>
          {/* menu btn for only mobile device  */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0 bottom-0 " : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <ScrollLink
            to={item.path}
            key={item.path}
            spy={true}
            smooth={true}
            className="block text-base text-white hover:text-brandPrimary first:font-medium "
            onClick={() =>
              animateScroll.scrollTo(document.getElementById(item.path))
            }
          >
            {item.link}
           
          </ScrollLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
