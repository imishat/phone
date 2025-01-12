import { Grid3x3, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Card from "./Card";
import ListCard from "./ListCard";

export default function Products() {
  const [list, setList] = useState("grid");
  const [gridItem, setGridItem] = useState(3);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  let gridItems;
  if (gridItem === 1) {
    gridItems = "grid-cols-1 md:grid-cols-1";
  } else if (gridItem === 2) {
    gridItems = "grid-cols-1 md:grid-cols-2";
  } else if (gridItem === 3) {
    gridItems = "grid-cols-1 md:grid-cols-3";
  } else {
    gridItems = "grid-cols-1 md:grid-cols-4";
  }

  return (
    <div className="w-full">
      <div className="hidden md:flex items-center justify-between w-full bg-slate-200 p-5 rounded-lg">
        <div className="flex items-center border border-black rounded-md">
          <p
            onClick={() => setList("grid")}
            className={`${
              list === "grid" ? "bg-black text-white" : "bg-white text-black"
            } text-xl p-3 cursor-pointer font-bold rounded-md rounded-r-none`}
          >
            <Grid3x3 />
          </p>
          <p
            onClick={() => setList("list")}
            className={`${
              list === "list" ? "bg-black text-white" : "bg-white text-black"
            } text-xl p-3 cursor-pointer font-bold rounded-md rounded-l-none`}
          >
            <List className="cursor-pointer" />
          </p>
        </div>
        {list === "grid" ? (
          <div className="flex items-center gap-1">
            <p
              onClick={() => setGridItem(1)}
              className={`${
                gridItem === 1 ? "bg-black" : "bg-slate-500"
              } text-xl px-5 py-2 cursor-pointer font-bold text-white rounded-md`}
            >
              |
            </p>
            <p
              onClick={() => setGridItem(2)}
              className={`${
                gridItem === 2 ? "bg-black" : "bg-slate-500"
              } text-xl px-5 py-2 cursor-pointer font-bold text-white rounded-md`}
            >
              ||
            </p>
            <p
              onClick={() => setGridItem(3)}
              className={`${
                gridItem === 3 ? "bg-black" : "bg-slate-500"
              } text-xl px-5 py-2 cursor-pointer font-bold text-white rounded-md`}
            >
              |||
            </p>
            <p
              onClick={() => setGridItem(4)}
              className={`${
                gridItem === 4 ? "bg-black" : "bg-slate-500"
              } text-xl px-5 py-2 cursor-pointer font-bold text-white rounded-md`}
            >
              ||||
            </p>
          </div>
        ) : (
          ""
        )}

        <div>
          <label className="text-lg">Sort by: </label>
          <select className="text-lg bg-slate-500 border-gray-500 outline-none p-2 rounded-md text-white">
            <option value="option-1">option-1</option>
            <option value="option-2">option-2</option>
            <option value="option-3">option-3</option>
            <option value="option-4">option-4</option>
            <option value="option-5">option-5</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          onClick={toggleDrawer}
          className="font-bold text-lg flex items-center gap-2"
        >
          <SlidersHorizontal /> Filter and Sort
        </p>
        <p className="font-bold text-lg">12 Products</p>
      </div>
      <div>
        <div>
          {list === "grid" ? (
            <div className={`grid ${gridItems} gap-3 mt-5`}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer content */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div>
            <h1 className="text-2xl font-bold border-b-2 pb-5">Filter:</h1>
            <h1 className="mt-3 text-2xl font-bold pb-5">Availability:</h1>
            <form className="space-y-3 text-lg">
              <div>
                <input type="checkbox" name="inStock" id="inStock" />
                <label htmlFor="inStock" className="ml-2">
                  In Stock
                </label>
              </div>
              <div>
                <input type="checkbox" name="outOfStock" id="outOfStock" />
                <label htmlFor="outOfStock" className="ml-2">
                  Out Of Stock
                </label>
              </div>
            </form>
            <h1 className="mt-3 text-2xl font-bold pb-5">Price:</h1>
            <p className="text-lg">The highest price is $935.05</p>
            <form className="space-y-3 text-lg my-5 flex items-center gap-2">
              <span className="text-xl">$</span>
              <input
                type="text"
                className="h-14 rounded-full w-full border border-black p-2"
                placeholder="From"
              />
              <input
                type="text"
                className="h-14 rounded-full w-full border border-black p-2"
                placeholder="To"
              />
            </form>
            <h1 className="mt-3 text-2xl font-bold pb-5">Custom Menu:</h1>
            <div className="space-y-2">
              <p className="text-lg">Touch Display</p>
              <p className="text-lg">Touch Display</p>
              <p className="text-lg">Touch Display</p>
              <p className="text-lg">Touch Display</p>
              <p className="text-lg">Touch Display</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
