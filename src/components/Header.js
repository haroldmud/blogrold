import React from 'react'
import { useEffect, useState } from "react";
import {FaBlog} from 'react-icons/fa'
import {CiSearch,CiBellOn} from 'react-icons/ci'
import {TfiWrite} from 'react-icons/tfi'
import {IoMdContact} from 'react-icons/io'
import {SlArrowDown} from 'react-icons/sl'
import { searching } from '../features/searchSlice';
import { useSelector,useDispatch } from 'react-redux';


function Header() {
  const [isScroll, setIsScroll] = useState(true)
  const isSearched = useSelector(prev => prev.searched.value.search)
  const createNews = useDispatch()
  const handleSearched =()=>{
    createNews(searching(true))
  }
  console.log(isSearched)
   useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY > 200){
        setIsScroll(false)
      }else{
        setIsScroll(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
   })
  
  return (
  <header className={` ${isScroll? "py-4" : "py-1"} z-10 h-fit fixed w-full bg-white px-4  flex justify-between border-b`}>
        <div className="flex">
          <a target="_blank" href="https://www.blogger.com" rel="noreferrer" className='my-auto'><span className={`${isScroll ? "text-[2.3rem]": "text-[1.4rem]"} text-blue-900`}><FaBlog/></span></a>
          <div className="my-auto ml-4">
            <form className="md:flex hidden bg-gray-100 rounded-3xl my-auto p-1 pr-4">
              <div className={`${isScroll ? "text-3xl" : "text-xl"} my-auto text-gray-400`}><CiSearch/></div>
              <input onChange={handleSearched}  type="text" className=" bg-gray-100 outline-none pl-2 placeholder:text-gray-400" placeholder="Search Blogrold" />
            </form>
          </div>
        </div>
        <div className="flex gap-8 pr-8">
          <div className="md:hidden flex my-auto text-3xl text-gray-400"><CiSearch/></div>
            <button className="text-gray-400 flex gap-1">
              <span className="my-auto text-2xl text-gray-400"><TfiWrite/></span>
              <p className="my-auto">Write</p>
            </button>
            <button className="h-fit my-auto">
              <span className="my-auto text-3xl text-gray-400"><CiBellOn/></span>
            </button>
            <button className="flex">
              <span className="my-auto text-3xl text-gray-400"><IoMdContact/></span>
              <span className="my-auto text-[0.5rem] text-gray-400"><SlArrowDown/></span>
            </button>
        </div>
      </header>
  )
}

export default Header