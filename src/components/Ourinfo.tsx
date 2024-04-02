import Image from "next/image";
import { BiCheckSquare } from "react-icons/bi";

const Ourinfo = () => {
  return (
    <div className={`px-4 xl:px-[140px] 2xl:px-[240px]  my-14 md:my-24`}>
      <div className="md:flex items-center gap-12">
        <div>
          <div>
            <h1 className="text-3xl font-semibold">
              WELCOME TO{" "}
              <span className="text-[#ef1721]">
                {" "}
                P<span className="text-red-400">O</span>CKETTECHHUB
              </span>
            </h1>
            <hr className="w-24 mt-2 border-[#ef1721] border" />
            <hr className="w-20 mt-1 border-[#ef1721] border" />
          </div>
          <p className={`mt-8 text-[#666] `}>
            P<span className="text-red-400">O</span>CKETTECHHUB is a clean and
            modern design which is useful for Car Dealer, Auto Dealer,
            Automotive WordPress website and any other automotive dealership
            business, who sell, buy or lease vehicles via website. Its stunning
            beauty, fashionable clean look and proper execution.
          </p>
          <div className={`md:flex items-center gap-20 mt-8 `}>
            <div>
              <h4 className="font-semibold mb-4">Running Costs</h4>
              <div className="mt-1">
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600  mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    18″ 5-Spoke Light-Alloy Wheels
                  </span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>4-Wheel Disc Brakes</span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>ABS brakes</span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>AM/FM radio: SiriusXM</span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>Adaptive suspension</span>
                </h6>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Performance</h4>
              <div className="mt-1">
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600  mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    Auto tilt-away steering wheel
                  </span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    Auto-dimming Rear-View mirror
                  </span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    Auto-dimming door mirrors
                  </span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    Auto-leveling suspension
                  </span>
                </h6>
                <h6 className="flex">
                  {" "}
                  <span className="text-red-600 mt-1 me-3">
                    <BiCheckSquare />
                  </span>{" "}
                  <span className={`text-[#666] `}>
                    Automatic temperature control
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Image
            src="https://img.freepik.com/free-vector/realistic-smartphone-with-three-cameras-different-views_23-2148324135.jpg?w=826&t=st=1711360111~exp=1711360711~hmac=9707bbacd1590b52ba241a35b7d844a8911fc9f03418e6be87b0e33c818d4c8d"
            alt="image for phone"
            width={700}
            height={700}
          />
          <Image
            src="https://img.freepik.com/free-photo/mobile-phone-screen-mockup-digital-device_53876-96026.jpg?w=900&t=st=1711355438~exp=1711356038~hmac=d32880a7a38769054f3dbc0f535726b5655ceb53b89be382cf78393d2b126a7e"
            alt="image for phone"
            width={700}
            height={700}
          />
          <Image
            src="https://img.freepik.com/premium-photo/back-case-two-samsung-galaxy-smartphones_175634-14289.jpg?w=900"
            alt="image for phone"
            width={700}
            height={700}
          />
          <Image
            src="https://img.freepik.com/premium-photo/mobile-phone-back-view-with-two-cameras-blue-pink-purple-lights-isometric-design_163252-56.jpg?w=900"
            alt="image for phone"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Ourinfo;
