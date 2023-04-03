import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import { useSelector, useDispatch } from 'react-redux'
import { searching } from '../features/searchSlice'
function Search() {
  const searched = useSelector(prev=> prev.submitted.value.submit)
  console.log(searched)
  const closePage = useDispatch();
  const handleClose=()=>{
    closePage(searching(false))
  }
  return (
    <div className='flex justify-center fixed h-[100vh] w-full top-0 pt-20 color'>
      <div className='h-[34rem] w-6/12 bg-white'>
        <div className='flex justify-end p-4'>
          <button onClick={handleClose}><VscChromeClose/></button>
        </div>
        <div>
          <h1 className='text-center font-bold text-3xl'>{searched}</h1>
        </div>
      </div>
    </div>
  )
}

export default Search