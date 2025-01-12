import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white rounded-sm shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Create Account
        </h1>
        <form className="flex flex-col gap-5 border-b border-black/50 pb-3">
          <input
            type="text"
            className="bg-white text-base md:text-lg rounded-full h-12 p-4 focus:border focus:border-black outline-none"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-white text-base md:text-lg rounded-full h-12 p-4 focus:border focus:border-black outline-none"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="bg-white text-base md:text-lg rounded-full h-12 p-4 focus:border focus:border-black outline-none"
            placeholder="Password"
          />
          <input
            type="password"
            className="bg-white text-base md:text-lg rounded-full h-12 p-4 focus:border focus:border-black outline-none"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="bg-black text-white text-base md:text-lg font-semibold h-12 rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm md:text-base mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
