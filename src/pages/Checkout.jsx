import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import img from "../assets/p1.webp";

export default function Checkout() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountries(countryNames);
        setLoading(false);
      } catch (err) {
        setError("Error fetching country data.");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Logo</h1>
      <div className="w-[90%] lg:w-[80%] mx-auto block lg:flex items-start">
        <div className="p-5 lg:w-4/5">
          <form className="space-y-2">
            <div>
              <label htmlFor="Contact" className="text-xl font-bold">
                Contact
              </label>
              <input
                type="text"
                placeholder="Email or Mobile Phone Number"
                id="Contact"
                className="border border-black text-lg p-2 w-full rounded-md outline-none"
              />
            </div>
            <div className="space-y-2">
              <select
                id="country-select"
                value={selectedCountry}
                onChange={handleSelectChange}
                className="w-full border border-black text-xl py-2"
              >
                <option value="">-- Select country --</option>
                {countries.sort().map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="First name(optional)"
                  className="border border-black w-full text-lg p-2 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-black w-full text-lg p-2 rounded-md outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="border border-black text-lg p-2 rounded-md w-full outline-none"
              />
              <input
                type="text"
                placeholder="Apartment,Suite,etc.(optional)"
                className="border border-black text-lg p-2 rounded-md w-full outline-none"
              />
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-black w-full text-lg p-2 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Postal code (Optional)"
                  className="border border-black w-full text-lg p-2 rounded-md outline-none"
                />
              </div>
            </div>

            <h1 className="text-lg font-semibold">International Shipping</h1>
            <input
              type="text"
              defaultValue={"$20.00"}
              className="border border-black bg-gray-200 text-lg p-2 rounded-md w-full outline-none"
              readOnly
            />
            <div>
              <h3 className="text-lg font-semibold">Payment</h3>
              <p className="text-sm text-black/40">
                All transactions are secure and encrypted.
              </p>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border border-black text-lg p-2 rounded-md w-full outline-none"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Expiration Date(MM / YY)"
                    className="border border-black w-full text-lg p-2 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Security Code"
                    className="border border-black w-full text-lg p-2 rounded-md outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="border border-black text-lg p-2 rounded-md w-full outline-none"
                />
              </div>
            </div>
            <button className="text-lg font-bold bg-red-500 text-white w-full h-12 rounded-md">
              Pay Now
            </button>
          </form>
        </div>
        <div className="w-full space-y-2 p-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={img} alt="" className="w-32" />
              <div>
                <p className="font-semibold">Affinity P40 Pro</p>
                <p>Black / 6.18 / Dual SIM</p>
              </div>
            </div>
            <p>$364.75</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$364.75</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p>$20.00</p>
          </div>
          <div className="flex justify-between items-center text-xl font-bold">
            <p>Total</p>
            <p>
              <span>USD</span> $384.75
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
