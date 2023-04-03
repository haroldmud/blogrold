import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Publishers } from "../database/publishers";
import { publishing } from "../features/publishSlice";
import { listing } from "../features/listSlice";
import { VscChromeClose} from "react-icons/vsc";

function Publish() {
  const sourceData = useSelector(prev => prev.published.value.pub);
  const listData = useSelector(prev => prev.listed.value.list);
  const [Base, setBase] = useState([]);
  const [check, setCheck] = useState("");
  const [switched, setSwitched] = useState(false);
  const [fetcher, setFecther] = useState("");

  const createPublisher = useDispatch();

  useEffect(() => {
      fetch(new Request(Publishers))
        .then(res => res.json())
        .then(data => createPublisher(publishing(data.sources)));
    }, [createPublisher]);

  useEffect(() => {
      const page = `https://news-proxy.netlify.app/api/everything?sources=${fetcher}&pageSize=10&apiKey=16c348f7b1ed4b9abba58a10c28f7983`;
      fetch(new Request(page))
        .then(res => res.json())
        .then(data => createPublisher(listing(data.articles)));
      console.log(page);
    },[createPublisher,fetcher]
  );

  const handleSwitch = () => {setSwitched(false);};

  const handleCheck = value => {
    if (value !== check) {setCheck(value);setSwitched(true);
    } else {setCheck("")}
  };

  useEffect(() => {
      const handleBase = () => {
        const srcb = [...sourceData];
        const base = srcb.map(item => {
          return item;
        });
        setBase(base);
      };
      window.addEventListener("DOMContentLoaded", handleBase());
      return () => window.addEventListener("DOMContentLoaded", handleBase());;
    },[sourceData]);

  return (
    <section className={`border w-[20rem] h-[30rem] scroll overflow-y-scroll`}>
      <div className="font-bold text-blue-900 sticky top-0 bg-white w-[19.2rem] p-2 border-b">
        Publishers
      </div>
      <div className=" flex flex-col px-2">
        {Base.map((item, idx) =>
          <div>
            <button onClick={() => { handleCheck(item); setFecther(item.id);  }} key={idx} className={`${item === check && "bg-gray-300"}  w-full text-left text-[10px] font-semibold`}>
              {item.name}
            </button>
            {item === check &&
              <div className={`${switched ? "fixed" : "hidden"} lg:h-[100vh] h-[100rem] pb-12  w-full left-0 z-30 color top-0`}>
                <div className="shadow lg:w-6/12 w-11/12 lg:h-[38rem] h-[50rem] mt-4 overflow-y-scroll scroll pb-4 bg-white  mx-auto">
                  <div className="flex justify-end bg-white  h-12">
                    <button onClick={handleSwitch} className="p-4 fixed bg-white top-4">
                      <VscChromeClose />
                    </button>
                  </div>
                  <div className="">
                    {
                      listData?.map((value, index)=>
                      <a href={value.url} target="_blank" rel="noreferrer" key={index} className="flex justify-between border p-2 mx-auto hover:shadow w-full">
                      <div className="flex flex-col justify-between py-2 gap-4">
                        <div  className="flex flex-col gap-2">
                          <h2 className="text-2xl leading-8 text-left font-bold text-blue-900">{value.title}</h2>
                        </div>
                        <div className="flex gap-4 md:text-[10px]">
                          <div className="bg-gray-300 px-2 text-blue-900 rounded-2xl my-auto">{value.source.name}</div>
                          <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">7min of reading</p>
                          <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">{value.publishedAt}</p>
                        </div>
                      </div>
                      <img  className="my-auto w-[8rem] ml-2 object-cover h-[8rem]" src={value.urlToImage} alt="" />
                    </a>
                      )
                    }
                  </div>
                </div>
              </div>}
          </div>
        )}
      </div>
    </section>
  );
}

export default Publish;
