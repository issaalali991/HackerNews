import { useState, useEffect } from "react";
import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [importData, setImportData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search?query=${encodeURIComponent(filter)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImportData(data);
        setIsLoaded(true);
      })
      .catch((error) => console.error(error));

    return () => {
      //
    };
  }, [filter]);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoaded(false);
    setFilter(e.target.elements[0].value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Main Container der alles andere beinhalten wird */}
        <Header submitForm={submitForm} />

        {!isLoaded && <BeatLoader color="#36d7b7" className="my-4" />}
        {isLoaded && <Entry importData={importData} filter={filter} />}
        <Pagination />
      </div>
    </>
  );
}

export default App;

//textauszüge
//     <p className='lg:hidden text-sm py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati</p>
//     <p className='hidden lg:block py-4 max-w-[800px]'>Lorem ipsum(...) </p>
//     <small className='text-xs text-gray-600 font-Poppins lg:text-sm'>5 min ago | by Dumpfbacke | 13 comments</small>
//   </div>
//   <div className='flex justify-center items-center lg:w-[250px]'> {/* Image Container */}
//     <img src="https://fakeimg.pl/90x60" alt="" className='lg:hidden'/>
//     <img src="https://fakeimg.pl/210x150" alt="" className='hidden lg:block'/>
//   </div>
// </div> */}
