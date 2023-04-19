import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../features/searchSlice";
import { useState, useEffect } from "react";
import { noSearch } from "../database/image";
import { loadImg } from "../database/image";
function Search() {
  const searched = useSelector((prev) => prev.submitted.value.submit);
  const [loaded, setLoaded] = useState(true);
  const closePage = useDispatch();
  const searchKey = process.env.REACT_APP_KEY;
  const handleClose = () => {
    closePage(searching(false));
  };
  const [research, setresearch] = useState([]);
  useEffect(() => {
    const seek = `https://news-proxy.netlify.app/api/everything?q=${searched}&pageSize=10&apiKey=${searchKey}`;
    const fetchSearch = async () => {
      try {
        const response = await fetch(seek);
        const jsonData = await response.json();
        setresearch(jsonData.articles);
        setLoaded(false);
      } catch (error) {
        setLoaded(false);
      }
    };
    fetchSearch();
  }, [searched, searchKey]);
  return (
    <div className="flex justify-center fixed h-[100vh] w-full top-0 pt-20 color">
      <div className="shadow lg:w-6/12 w-11/12 lg:h-[35rem] h-[50rem] overflow-y-scroll scroll pb-4 bg-white  mx-auto ">
        <div className="flex justify-end p-4">
          <button onClick={handleClose}>
            <VscChromeClose />
          </button>
        </div>
        <div>
          {searched.length > 0 && (
            <p className="text-center italic mb-4">result for "{searched}" </p>
          )}
          {loaded ? (
            <div className="w-full">
              <p className="mx-auto my-auto w-fit py-[15rem]">
                <span>
                  <img
                    src={loadImg}
                    alt="loading..."
                    className="w-10 animate-spin text-blue-800"
                  />
                </span>
              </p>
            </div>
          ) : research?.length > 0 ? (
            research?.map((value, index) => (
              <a
                href={value.url}
                target="_blank"
                rel="noreferrer"
                key={value.id}
                className="flex justify-between border p-2 mx-auto hover:shadow w-full"
              >
                <div className="flex flex-col justify-between py-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl leading-8 text-left font-bold text-blue-900">
                      {value.title}
                    </h2>
                  </div>
                  <div className="flex gap-4 md:text-[10px]">
                    <div className="bg-gray-300 px-2 text-blue-900 rounded-2xl my-auto">
                      {value.source.name}
                    </div>
                    <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">
                      7min of reading
                    </p>
                    <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">
                      {value.publishedAt}
                    </p>
                  </div>
                </div>
                <img
                  className="my-auto w-[8rem] ml-2 object-cover h-[8rem]"
                  src={value.urlToImage}
                  alt=""
                />
              </a>
            ))
          ) : (
            <div>
              <img src={noSearch} className="mx-auto" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
