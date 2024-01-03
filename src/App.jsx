import { useState, useEffect } from "react";
import "./App.css";
import { UilSearch } from "@iconscout/react-unicons";
import Logo from "./assets/Logo.png";

function App() {
  const [importData, setImportData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search?query=${encodeURIComponent(filter)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImportData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));

    return () => {
      //
    };
  }, [filter]);

  const submitForm = (e) => {
    e.preventDefault();
    setFilter(e.target.elements[0].value);
  };

  const entryTemplate =
    importData.hits &&
    importData.hits.map((item) => (
      <div className="flex flex-row justify-between items-center mb-4">
        {/* Container für einzelne News mit Img in selber Reihe */}
        {console.log(item)}
        <div className="flex flex-col justify-start items-start">
          {/* Container für Title und Infos */}
          <a href={item.url}>
            <h4 className="text-lg font-bold">
              {item.title || item.story_title}
            </h4>
          </a>
          <small className="text-xs text-gray-600">
            posted {new Date(item.created_at_i * 1000).toLocaleDateString()} |
            by {item.author} |{" "}
            {item.num_comments > 0 ? item.num_comments + " comment(s)" : ""}
          </small>
        </div>
        <div className="w-16 h-16">
          {/* Image Container */}
          <img
            src={
              item.url || item.story_url
                ? `https://logo.clearbit.com/${
                    item.url
                      ? item.url.split("/")[2]
                      : item.story_url.split("/")[2]
                  }`
                : "https://fakeimg.pl/90x60"
            }
            alt=""
          />
        </div>
      </div>
    ));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {" "}
        {/* Main Container der alles andere beinhalten wird */}
        <div className=" w-full h-[120px] lg:h-[150px] flex justify-center">
          {" "}
          {/* Header Container für Logo / Name */}
          <img src={Logo} alt="Logo" className="w-[300px] h-[120px]" />
        </div>
        <form
          className="flex flex-row items-center"
          onSubmit={(e) => submitForm(e)}
        >
          {/* Container für Suche */}
          <input
            id="search"
            type="text"
            className="h-14 w-3/4 md:w-96 pr-8 pl-5 rounded z-0 outline-1 outline outline-gray-300 focus:shadow focus:outline-none rounded-full"
            placeholder="Search anything..."
          />
          <button>
            <UilSearch size="35" className="ml-3" />
          </button>
        </form>
        <div className="flex flex-col mt-4 w-full px-4">
          {/* Container für Newsfeed */}
          {importData.hits && entryTemplate}
        </div>
        <div>
          <small>1 | 2 | 3 | 4 | 5 | 6</small>
        </div>
      </div>
    </>
  );
}

export default App;

// {/* <div className='flex flex-col mt-4 w-full px-4 md:px-10 lg:px-12'> {/* Container für Newsfeed */}
// <div className="flex flex-row justify-between items-center mb-4 border p-2 shadow-md lg:p-4 lg:shadow-lg lg:mb-8"> {/* Container für einzelne News mit Img in selber Reihe */}
//   <div className='flex flex-col justify-start items-start'> {/* Container für Title und Infos */}
//     <h4 className='text-lg font-bold font-Poppins md:text-2xl'>Title</h4>
//     <p className='lg:hidden text-sm py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati</p>
//     <p className='hidden lg:block py-4 max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati maxime, optio eos deserunt corrupti pariatur voluptatem veniam, officia nisi in at ipsam nulla deleniti praesentium cupiditate blanditiis quod natus.
//     Molestiae, explicabo sint dignissimos esse natus repellat alias, earum aliquid, similique officiis illum. Assumenda hic expedita aspernatur in ut magnam nostrum repudiandae a cumque dignissimos, quibusdam beatae blanditiis neque tempora!
//     Modi incidunt quibusdam quo accusantium ipsum rem et sint dolore reprehenderit iure cupiditate magnam blanditiis doloribus eligendi pariatur optio atque aliquam totam facilis quam possimus velit sequi, voluptatem maiores. Tempore!
//     Ex, libero autem cupiditate magni modi sint placeat nostrum nihil facere cumque pariatur culpa officia vel tenetur aperiam rerum eos? Tempora sed quae id nulla quam quia eaque iste facilis.
//  </p>
//     <small className='text-xs text-gray-600 font-Poppins lg:text-sm'>5 min ago | by Dumpfbacke | 13 comments</small>
//   </div>
//   <div className='flex justify-center items-center lg:w-[250px]'> {/* Image Container */}
//     <img src="https://fakeimg.pl/90x60" alt="" className='lg:hidden'/>
//     <img src="https://fakeimg.pl/210x150" alt="" className='hidden lg:block'/>
//   </div>
// </div> */}
