import Publish from './Publish';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetching } from '../features/fetchSlice';
import { popping } from '../features/fetchSlice';
import { switching } from '../features/fetchSlice';
import {VscChromeClose} from 'react-icons/vsc'
import { Articles } from '../database/article';

const Blog =()=> {
  
  const newsData = useSelector(prev => prev.fetched.value.news);
  
  const createNews = useDispatch();
  useEffect(()=>{
      fetch(new Request(Articles))
        .then(res => res.json())
        .then(data => createNews(fetching(data.articles)))
  },[createNews]);

  const handlePopUp =(index)=>{
    let newNews = [...newsData];
    let newNewsData = newNews.map((item, idx)=>{
      return  (idx === index) ?{...item, poppedUp:true, } :{...item, poppedUp:false, };
    })
    createNews(popping(newNewsData))
  }

  const handleSwitch =()=>{
    let newNews = [...newsData];
    let newNewsData = newNews.map((item)=>{
      return  {...item, poppedUp:false, };
    })
    createNews(switching(newNewsData))
  }
  

  return (
    <section className="max-w-[80rem] mx-auto pt-20 flex justify-center gap-8 relative">
     <div className='flex flex-col gap-4  md:w-6/12'>
     { 
        newsData.map((item, idx) => 
          <div key={idx} className=''>
            <button  onClick={()=>{handlePopUp(idx)}} key={idx} className="flex border p-2 mx-auto hover:shadow">
              <div className="flex flex-col gap-4">
                <div  className="flex flex-col gap-2">
                  <p className='text-left text-[12px]'><span className="text-gray-400">written by{" "}</span>{item.author}</p>
                  <h2 className="text-2xl leading-8 text-left font-bold text-blue-900">{item.title}</h2>
                </div>
                <div className="flex gap-4 md:text-[10px]">
                  <div className="bg-gray-300 px-2 text-blue-900 rounded-2xl my-auto">{item.source.name}</div>
                  <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">7min of reading</p>
                  <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">{item.publishedAt.split("").splice(0,item.publishedAt.length-1).join("").split("T").join(" at ")}</p>
                </div>
              </div>
              <img  className="my-auto w-[8rem] ml-2 object-cover h-[8rem]" src={item.urlToImage} alt="" />
            </button>
            <div className={`${item.poppedUp ? "flex" : "hidden"}  flex-col lg:justify-center  z-20 fixed color  w-full lg:h-[100vh] h-[100rem] top-0 left-0`}>
              <div className='shadow md:w-6/12 w-11/12 h-fit pb-4 bg-white lg:mt-0 mt-32  mx-auto'>
                <div className='flex justify-end'>
                  <button onClick={handleSwitch} className='p-4'><VscChromeClose/></button>
                </div>
                <div>
                  <img className='w-full h-fit object-cover' src={item.urlToImage} alt="" />
                  <div  className="flex flex-col gap-2 px-4">
                    <p className=' text-[9px]'><span className="text-gray-400">written by{" "}</span>{item.author}</p>
                    <h2 className="text-2xl leading-8 font-bold text-blue-900">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className='flex justify-start'>
                      <a rel='noreferrer' href={item.url} target="_blank" className='bg-blue-900 font-bold px-2 py-1 rounded-sm text-white '>LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
     </div>
      <div className='md:flex flex-col w-3/12 hidden'>
        <Publish/>        
      </div>
    </section>
  )
}

export default Blog