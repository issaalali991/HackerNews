import { UilSearch } from "@iconscout/react-unicons";
import Logo from "../assets/Logo.png";
import { useState } from "react";

const Header = ({ submitForm, setFilter, setIsLoaded }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div className=" w-full h-[120px] lg:h-[150px] flex justify-center">
        {/* Header Container für Logo / Name */}
        <button
          onClick={() => {
            inputValue && setIsLoaded(false);
            setFilter("");
            setInputValue("");
          }}
        >
          <img src={Logo} alt="Logo" className="w-[300px] h-[120px]" />
        </button>
      </div>
      <form
        className="flex flex-row items-center"
        onSubmit={(e) => submitForm(e, inputValue)}
      >
        {/* Container für Suche */}
        <input
          id="search"
          type="text"
          className="h-14 w-3/4 md:w-96 pr-8 pl-5 rounded z-0 outline-1 outline outline-gray-300 focus:shadow focus:outline-none rounded-full"
          placeholder="Search anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>
          <UilSearch size="35" className="ml-3" />
        </button>
      </form>
    </div>
  );
};

export default Header;
