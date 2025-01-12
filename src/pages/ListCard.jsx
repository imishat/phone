import { Star, StarHalf } from "lucide-react";
import img from "../assets/p1.webp";

export default function ListCard() {
  return (
    <div className="flex items-center">
      <img src={img} alt="" />
      <div className="w-full space-y-3">
        <h3 className="uppercase text-lg font-bold">Affinity M20</h3>
        <div className="flex items-center gap-2 flex-wrap">
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
