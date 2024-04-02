import { FaMailBulk, FaPhone, FaRegMap, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div
        className={`bg-[#f7f7f7]  mt-12 grid md:grid-cols-3  gap-4 mb-12 mx-12 p-8 font-serif`}
      >
        <div>
          <h1 className="heading1 text-3xl font-bold text-left ">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="paragraph text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias
            velit nihil voluptatum unde rerum, veniam deleniti praesentium
            accusamus suscipit?
          </p>
          <p>Learn more.paragraph ..</p>
        </div>

        <div className="ml-6">
          <FaPhone className="text-red-500 ml-10 w-32 h-10 mb-2" />
          <p className="paragraph">+88 017 924 549 57</p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            tempore!
          </p>
        </div>

        <div>
          <FaMailBulk className="text-red-500 ml-10 w-32 mb-2 h-10"></FaMailBulk>
          <p className="paragraph">arafatjibon33@gmail.com</p>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            eligendi!
          </p>
        </div>
      </div>
      <section id="contact" className="py-10 px-3  bg-[#f7f7f7]">
        <div className="text-center mt-8">
          <h3 className={`text-5xl font-extrabold `}>
            Contact <span className="text-red-500">Us</span>
          </h3>
          <p className={`paragraph text-gray-600 text-xl mt-3`}>Get in touch</p>

          <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
            <form className="flex flex-col flex-1 gap-5">
              <input
                className="p-6 rounded"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
              <input
                className="p-6 rounded"
                type="Email"
                name="user_email"
                placeholder="Your Email Address"
              />
              <textarea
                className="p-6"
                placeholder="Your Message"
                name="message"
                rows={10}
              ></textarea>
              <button className=" mx-auto bg-purple-400 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-full">
                Send
              </button>
            </form>
            <div className="flex flex-col gap-7 mt-16">
              <div className=" text-left gap-4 flex-wrap items-center text-xl">
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaMailBulk className="w-8 h-12 text-red-500"></FaMailBulk>
                  <p className="paragraph mx-6">arafatjibon33@gmail.com</p>
                </div>
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaWhatsapp className="w-8 h-16 text-red-500 mr-6"></FaWhatsapp>
                  <p className="paragraph">+88 017 924 549 57</p>
                </div>
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaRegMap className="w-8 h-16 text-red-500 ml-16"></FaRegMap>
                  <p className="paragraph mx-6">Chattogram, Bangladesh</p>
                </div>
                <p className="paragraph md:text-base text-sm break-words text-white"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
