import Items from "../Items";
import Navbar from "../Navbar";

export default function Template() {
  return (
    <>
      <div className="w-full h-[18vh] bg-sky-950">
        <div>
          <Navbar/>
          <div className="w-full h-auto absolute z-50">
            <Items />
          </div>
        </div>
        <div className="p-[15px]">
          <h1 className="text-white text-[25px] font-semibold tracking-[4px]">
            TEMPLATE
          </h1>
        </div>
      </div>
    </>
  );
}
