export default function MainMenu() {
  return (
    <nav className=" w-[100%] px-8 md:px-auto cursor-default fixed z-10">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-red-500 md:order-1">
          <img src="/logo.png" alt="test" className="w-[90px] h-auto" />
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 text-xl">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-red-500 cursor-pointer">
              <p>Home</p>
            </li>
            <li className="md:px-4 md:py-2 hover:text-red-400 cursor-pointer">
              <p>Services</p>
            </li>
            <li className="md:px-4 md:py-2 hover:text-red-400 cursor-pointer group ">
              <p>Contact</p>
            </li>
            <li className="md:px-4 md:py-2 hidden md:block hover:text-red-400 cursor-pointer relative group">
             Company
              <div className="hidden absolute cursor-default right-0 group-hover:block bg-white  ">
                <div className="flex  bg-white text-slate-400 text-base">
                  <div className="bg-white px-8 py-3 space-y-1 border-r ">
                    <h1 className="text-lg text-slate-500">Products</h1>
                    <ul className="space-y-1 ">
                      <li className=" hover:text-red-400  cursor-pointer">
                        Product 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Product 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Product 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Product 1
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white px-8 py-3 space-y-1 border-r">
                    <h1 className="text-lg text-slate-500">Categories</h1>
                    <ul className="space-y-1">
                      <li className=" hover:text-red-400 cursor-pointer">
                        Category 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Category 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Category 1
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Category 1
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white px-8 py-3 space-y-1">
                    <h1 className="text-lg text-slate-500">Contact Us</h1>
                    <ul className="space-y-1">
                      <li className=" hover:text-red-400 cursor-pointer">
                        123 Main St
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Email: contact@example.com
                      </li>
                      <li className=" hover:text-red-400 cursor-pointer">
                        Phone: 123-456-7890
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-gray-50 rounded-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
