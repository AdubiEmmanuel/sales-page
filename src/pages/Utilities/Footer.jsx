import { AiFillPhone } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="container bg-black text-white font-bold align-center w-full h-[20vh] py-20">
        <p className="text-center">
          &copy; Mc Timmy Variety Foods 2023
          <span className="flex lg:absolute lg:mx-[40%] md:mx-[32%] mx-[15%] text-center align-center px-10 mt-5">
            <AiFillPhone className="flex align-center justify-between mr-2" />
            +234 708 827 8219
          </span>
        </p>
      </div>
    </div>
  );
}
