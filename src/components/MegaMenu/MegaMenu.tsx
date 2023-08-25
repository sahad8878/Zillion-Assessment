import SingleItem from "../Items/SingleItem";


export default function MegaMenu() {
    return (
        <div className="  overflow-y-scroll pb-10 h-screen  py-6  border-r  scrollbar-style ">
        <div className="border-b  space-y-3 border-black px-1 ">
          <p className=" group  text-base  group ">
            <div className=" flex justify-between hover:bg-slate-200">
              <span>item1</span>
              <span>&gt;</span>
            </div>
            <div className=" hidden   group-hover:grid  top-0 absolute  left-full h-screen w-full   ">
              <SingleItem />
             <SingleItem />
            <SingleItem />
            </div>
          </p>
          <p className=" group  text-base   ">
            <div className=" flex justify-between hover:bg-slate-200">
              <span>item2</span>
              <span>&gt;</span>
            </div>
            <div className="hidden group-hover:grid  bg-slate-100   top-0 absolute  left-full h-screen w-full ">
              <SingleItem />
            </div>
          </p>
          <p className=" group  text-base   ">
            <div className=" flex justify-between hover:bg-slate-200">
              <span>item3</span>
              <span>&gt;</span>
            </div>
            <div className="hidden group-hover:grid  bg-slate-100   top-0 absolute  left-full h-screen w-full ">
              <div className="h-screen bg-slate-100 flex items-center">

              <SingleItem />
              </div>
            </div>
          </p>
          <p className=" group text-base   ">
            <div className=" flex justify-between hover:bg-slate-200">
              <span>item4</span>
              <span>&gt;</span>
            </div>
            <div className="hidden group-hover:grid bg-slate-100    absolute top-0  left-full h-screen w-full ">
              <SingleItem />
            </div>
          </p>
        </div>
        <div className="space-y-3 text-center  mt-2">
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>
          <p className="text-base hover:underline">item-1</p>

          <p className="text-base hover:underline">item-1</p>
        </div>
      </div>
    )
}