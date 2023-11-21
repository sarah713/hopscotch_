import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative overflow-hidden  flex mt-10 p-6 ">
      <div className="container">
        <div className="flex flex-col  pt-8 xs:pt-0 md:flex-row md:items-center xl:gap-[57px]">
          <div className="flex-1 ">
            <div className="w-full">
              <h2 className="mx-auto relative z-[10] font-bold tracking-wide text-center md:text-left md:mx-0  text-7xl">
                Make payments your superpower
              </h2>
              <div
                className="font-body relative z-10  text-2xl text-gray-500 mt-8  text-center mx-auto md:text-left md:mx-0"
                style={{ "max-width": "520px" }}
              >
                <p>
                  Invoicing, bill pay, and cash flow control for freelancers and
                  small businesses.
                </p>
              </div>

              <div className="flex mt-8">
                <div className="justify-start items-center w-full">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className=" w-full max-w-[515px] text-xl bg-neutral-100 rounded-lg p-6 focus:outline-none"
                  />
                  <button className="bg-[#fff66d] outline-none border-none text-black ml-[-9.2rem]  p-4 hover:bg-black hover:text-white text-xl font-semibold rounded-lg inline-block">
                    Sign me up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full shrink-0 md:max-w-[40%] xl:max-w-[513px]  z-20">
            <Image
              src="/finance.png"
              width={400}
              height={300}
              className=" rounded-lg shadow-sm border border-gray-100"
            />
          </div>
          <div className="absolute right-[-9rem] top-0 w-full max-w-[521px] -z-10 bg-purple-200">
            {/* <Image src="/hands.png" width={360} height={200} /> */}
            <div className="bg-purple-100 w-64 h-32 "></div>
          </div>
        </div>
      </div>
      {/* <div className=" flex gap-12 justify-between w-full">
        <div className="flex flex-col p-4 text-4xl">
          <h1>Make payments your superpower</h1>
        </div> */}

      {/* </div> */}
    </section>
  );
};

export default Hero;
