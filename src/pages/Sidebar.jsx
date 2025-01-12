export default function Sidebar() {
  return (
    <div className="max-w-72 hidden md:block">
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
  );
}
