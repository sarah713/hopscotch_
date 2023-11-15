import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex py-4 px-3 border-b  border-[#1d191f]/10 justify-between items-center ">
      <div className="logo mx-auto flex w-full max-w-[1390px] justify-between px-[15px]">
        <div className="flex w-full items-center justify-between lg:justify-start">
          <div className="relative z-10">
            <a className="text-xl font-extrabold tracking-tight " href="/">
              hopscotch
            </a>
          </div>
          <div className="flex lg:ml-[60px] lg:flex-col">
            <div className="lg:hidden">
              <button type="button">
                <Image src="menu-fill.svg" width={26} height={16} />
              </button>
            </div>
            <nav className="hidden lg:flex h-full lg:space-x-8 services">
              <a className="block" href="/">
                Products
              </a>
              <a className="block" href="/">
                Customers
              </a>
              <a className="block" href="/">
                Pricing
              </a>
              <a className="block" href="/">
                Learn
              </a>
            </nav>
          </div>
        </div>
        <div className="hidden lg:flex lg:shrink-0 lg:items-center right">
          <div className="flex items-center space-x-2">
            <a href="/" className="text-neutral-black p-4">
              Login
            </a>
            <button
              type="button"
              className="text-white bg-black rounded-full px-6 py-2"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden w-4">
        <Image />
      </div> */}
    </div>
  );
};

export default Header;
