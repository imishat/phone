import { Minus, Plus } from "lucide-react";
import img from "../assets/p1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SingleCard() {
  return (
    <div className="block lg:flex items-center justify-between lg:w-[65%] w-[90%] mx-auto gap-10 mt-10">
      <div className="w-full lg:w-1/2">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={img} className="w-full" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="space-y-4 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold">Affinity M20</h1>
        <h4 className="text-xl font-bold">$145.79</h4>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Vendor</p>
          <p className="text-xl">Foniry</p>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Type</p>
          <p className="text-xl">Android Phone</p>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Color</p>
          <p className="flex items-center gap-5">
            <p className="w-5 h-5 rounded-full bg-black cursor-pointer"></p>
            <p className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer"></p>
          </p>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Inches</p>
          <div className="flex items-center gap-2">
            <p className="text-lg border border-black p-3 cursor-pointer">
              6.30
            </p>
            <p className="text-lg border border-black p-3 cursor-pointer">
              6.40
            </p>
            <p className="text-lg border border-black p-3 cursor-pointer">
              6.18
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Storage+RAM</p>
          <p className="text-lg border border-black p-3 cursor-pointer">
            128 GB+8 GB
          </p>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Quantity</p>
          <div className="flex items-center">
            <p className="border-y border-l border-black/50 p-2 rounded-l-full">
              <Minus />
            </p>
            <input
              type="text"
              className="outline-none border-y border-black/50 p-2"
              size="5"
            />
            <p className="border-y border-r border-black/50 p-2 rounded-r-full">
              <Plus />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-xl">Sub total</p>
          <p className="text-xl">$145.79</p>
        </div>
        <div className="flex items-center justify-center gap-7 flex-wrap ">
          <button className="bg-slate-500 text-white text-lg py-4 tracking-widest px-14 rounded-full">
            Sold Out
          </button>
          <button className="bg-black text-white text-lg py-4 tracking-widest px-14 rounded-full">
            Buy It Now
          </button>
          <button className="bg-black text-white text-lg py-4 tracking-widest px-14 rounded-full">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
