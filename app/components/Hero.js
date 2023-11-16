import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative overflow-hidden  flex mt-12 p-4 ">
      <div className="container">
        <div className="flex flex-col gap-12 pt-8 xs:pt-0 md:flex-row md:items-center xl:gap-[57px]">
          <div className="flex-1">
            <div className="w-full">
              <h2 className="mx-auto relative z-[10] font-bold text-center md:text-left md:mx-0">
                Make payments your superpower
              </h2>
            </div>
          </div>
          <div className="relative w-full shrink-0 md:max-w-[40%] xl:max-w-[513px] bg-inherit z-20 bg-slate-100">
            <Image src="heroimg.svg" width={1060} height={1196} />
            <div className="absolute right-[-9rem] top-0 w-full max-w-[521px] z-10">
              <Image src="hands.png" width={360} height={200} />
            </div>
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
