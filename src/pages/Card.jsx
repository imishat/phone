import { Star, StarHalf } from "lucide-react";
import img from "../assets/p1.webp";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="border border-black rounded-md space-y-10 flex flex-col items-center justify-center group relative">
      <img src={img} className="w-full rounded-t-md" />
      <div className="absolute bottom-[118px] left-0 bg-black text-white w-full py-5 text-center text-lg hover:bg-red-500 transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100">
        Add To Card
      </div>
      <div className="flex w-full items-center flex-col justify-center gap-2 p-2 bg-slate-100 rounded-b-md">
        <h3 className="uppercase text-lg font-bold">
          <Link to="singleProduct">Affinity M20</Link>
        </h3>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="flex items-center text-lg gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarHalf />
          </span>
          <span className="text-lg font-semibold">2 Reviews</span>
        </div>
        <p className="text-2xl text-red-400">$134.45</p>
      </div>
    </div>
  );
}
