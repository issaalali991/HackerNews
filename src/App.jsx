import { useState, useEffect } from "react";
import "./App.css";
import { UilSearch } from "@iconscout/react-unicons";

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
        {/* Main Container der alles andere beinhalten wird */}
        <div className="bg-gradient-to-b from-sky-400 to-white w-full h-[60px] lg:h-[150px] flex justify-center">
          {/* Header Container für Logo / Name */}
          <h1 className="text-2xl font-bold my-2 lg:text-4xl lg:my-8">
            HackerNews
          </h1>
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
