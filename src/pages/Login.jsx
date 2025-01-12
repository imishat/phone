import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-slate-200 mx-auto mt-5 rounded-sm p-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center py-10 md:py-20">
        Login
      </h1>
      <form className="flex items-center justify-center flex-col gap-5 border-b border-black/50 pb-3">
        <input
          type="email"
          className="bg-white text-base md:text-lg rounded-full h-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] focus:border focus:border-black p-2 px-5"
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-white text-base md:text-lg rounded-full h-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] focus:border focus:border-black p-2 px-5"
          placeholder="Password"
        />
        <button className="bg-black text-white text-base md:text-xl px-5 md:px-10 py-3 font-semibold rounded-full w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          Login
        </button>
      </form>
      <div className="flex items-center justify-between text-sm md:text-lg mt-4">
        <p>Forgot your password?</p>
        <Link to="/signup">Create Account</Link>
      </div>
      <h1 className="text-xl md:text-2xl my-6 md:my-10 text-center font-bold">
        Continue as a guest
      </h1>
      <div className="flex items-center justify-center">
        <button className="bg-black text-white text-base md:text-xl px-5 md:px-10 py-3 font-semibold rounded-full w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          Continue
        </button>
      </div>
    </div>
  );
}
