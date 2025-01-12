import Products from "./Products";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="my-20 text-4xl font-bold pb-8">Products</h1>
      <div className="flex items-start gap-5">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}
