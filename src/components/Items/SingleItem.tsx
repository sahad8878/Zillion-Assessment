export default function SingleItem () {
    return (
        <div className="flex flex-col bg-slate-100 sm:flex-row border-y border-black text-slate-400 text-base ">
        <div className=" px-8 py-3 space-y-1   ">
          <h1 className="text-lg  text-slate-500 bg-slate-100">
            Products
          </h1>
          <ul className="space-y-1   ">
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
        <div className=" px-8 py-3 space-y-1 bg-slate-100 ">
          <h1 className="text-lg text-slate-500">
            Categories
          </h1>
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
        <div className=" px-8 py-3 space-y-1 bg-slate-100">
          <h1 className="text-lg text-slate-500">
            Contact Us
          </h1>
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
    )
}