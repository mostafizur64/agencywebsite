import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Stremlined Safeguarding Process with OneRen",
      image:
        "https://img.freepik.com/free-photo/picture-beautiful-lady-glasses-listening-her-partner-ot-colleague-businesswoman-working-laptop-computer-restaurant-cafe_549566-787.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais",
    },
    {
      id: 2,
      title: "What are you safugreding responsible Process with OneRen",
      image:
        "https://img.freepik.com/free-photo/colleagues-rejoicing-their-work-business-meeting_176420-5097.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Trialthlon Australia ",
      image:
        "https://img.freepik.com/free-photo/colleagues-working-office-relaxed-atmosphere_329181-12065.jpg?size=626&ext=jpg&ga=GA1.1.224820974.1701920792&semt=ais",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
          The unseen of spending three years at pixelgrage.
        </h2>
        <p className="md:w-3/4 mx-auto text-sm text-neutralDGray mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptas deleniti, ducimus corrupti nostrum aliquam architecto
          excepturi explicabo dicta provident officia in. Eaque, velit. Alias
          ipsa vero veritatis repellendus ducimus.
        </p>
      </div>
      {/* all blogs  */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-12 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt="image"
              className="rounded-lg hover:scale-95 translate-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="text-neutralGray mb-3 font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href=""
                  className="font-semibold text-brandPrimary hover:text-neutral-700 "
                >
                  Read More
                  <FaArrowRightLong className="inline-block ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
