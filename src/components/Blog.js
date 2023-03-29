import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetching } from '../features/fetchSlice';
import { popping } from '../features/fetchSlice';
import { switching } from '../features/fetchSlice';
import {VscChromeClose} from 'react-icons/vsc'
import Footer from './Footer';

const Blog =()=> {
  const [clickId,setClickId] = useState(null)
  const [popped, setPopped] = useState(false)
  const newsData = useSelector(prev => prev.fetched.value.news);
  
  const createNews = useDispatch();
  useEffect(()=>{
    fetch(new Request('https://newsapi.org/v2/everything?q=Apple&from=2023-03-27&sortBy=popularity&apiKey=16c348f7b1ed4b9abba58a10c28f7983'))
      .then(res => res.json())
      .then(data => createNews(fetching(data.articles.slice(0,10))))
  },[]);

  // const handlePopUp=()=>{
  //   let newNews = [...newsData];
  //   let newNewsData = newNews.map((item)=>{
  //     return {...item, poppedUp:false, };
  //   })
    
  // }

  const handleClick =(id)=>{
      setClickId(id);
  }

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
  
  
  console.log(clickId)
  // console.log(newsData)
  

  return (
    <section className="max-w-[80rem] mx-auto pt-20 flex flex-col gap-4 ">
     { 
        newsData.map((item, idx) => 
          <div className='relative'>
            <button  onClick={()=>{ handleClick(idx);handlePopUp(idx)}} key={idx} className="flex md:w-6/12 border p-2 mx-auto hover:shadow">
              <div className="flex flex-col gap-4">
                <div  className="flex flex-col gap-2">
                  <p className='text-left text-[12px]'><span className="text-gray-400">written by{" "}</span>{item.author}</p>
                  <h2 className="text-2xl leading-8 text-left font-bold text-blue-900">{item.title}</h2>
                </div>
                <div className="flex gap-4 md:text-[10px]">
                  <a target="_blank" href={item.url} className="bg-gray-300 px-2 text-blue-900 rounded-2xl my-auto">{item.source.name}</a>
                  <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">7min of reading</p>
                  <p className="bg-gray-300 md:block hidden px-2 text-gray-500 rounded-2xl my-auto">{item.publishedAt.split("").splice(0,item.publishedAt.length-1).join("").split("T").join(" at ")}</p>
                </div>
              </div>
              <img  className="my-auto w-[8rem] ml-2 object-cover h-[8rem]" src={item.urlToImage} alt="" />
            </button>
            <div className={`${item.poppedUp ? "flex" : "hidden"}  flex-col justify-center z-20 fixed color  w-full h-[100vh] top-0`}>
              <div className='shadow md:w-6/12 w-11/12 h-fit pb-4 bg-white  mx-auto'>
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
                      <a href={item.url} target="_blank" className='bg-blue-900 font-bold px-2 py-1 rounded-sm text-white '>LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
        <Footer/>
    </section>
  )
}

export default Blog