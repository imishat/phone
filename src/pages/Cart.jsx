import { Minus, Plus, Trash2 } from "lucide-react";
import img from "../assets/p1.webp";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-4xl font-semibold text-center">Your cart</h1>
      <p className="text-xl font-semibold text-center mt-3">
        Continue shopping
      </p>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-lg lg:text-xl uppercase text-start">
                Product
              </th>
              <th className="text-lg lg:text-xl uppercase text-start">
                Quantity
              </th>
              <th className="text-lg lg:text-xl uppercase text-start">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-full whitespace-nowrap">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                  <img
                    src={img}
                    className="w-full lg:w-1/5 object-contain lg:object-cover"
                    alt="Product"
                  />
                  <div className="space-y-2 mt-4 lg:mt-0 lg:ml-4">
                    <h3 className="font-bold uppercase text-base lg:text-lg">
                      Narioxe
                    </h3>
                    <h3 className="text-lg lg:text-xl font-bold">
                      Affinity P40 Pro
                    </h3>
                    <p className="text-sm lg:text-lg">$364.75</p>
                    <p className="text-sm lg:text-lg">Color: Black</p>
                    <p className="text-sm lg:text-lg">Inches: 6.18</p>
                    <p className="text-sm lg:text-lg">SIM Type: Dual SIM</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <p className="border-y border-l border-black/50 h-10 flex items-center rounded-l-lg px-2">
                      <Minus />
                    </p>
                    <input
                      type="text"
                      defaultValue={0}
                      className="border border-black/50 h-10 p-2 outline-none text-center w-12"
                    />
                    <p className="border-y border-r border-black/50 h-10 flex items-center rounded-r-lg px-2">
                      <Plus />
                    </p>
                  </div>
                  <Trash2 className="text-red-500 cursor-pointer" />
                </div>
              </td>
              <td>
                <p className="text-lg font-bold">$365.54</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block lg:flex items-center justify-between mt-16">
        <div>
          <p className="text-xl mb-2">Order special instructions</p>
          <textarea
            name=""
            id=""
            cols="50"
            rows="5"
            className="border border-black outline-none rounded-[50px] rounded-br-none w-full"
          ></textarea>
        </div>
        <div className="space-y-5 text-right">
          <h4 className="text-xl font-bold flex items-center justify-end gap-7">
            <span>Subtotal</span>
            <span>$364.75 USD</span>
          </h4>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="bg-black text-white text-lg py-4 tracking-widest px-28 rounded-full">
            <Link to="/checkout">Check out</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
