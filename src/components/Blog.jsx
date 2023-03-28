import React from 'react'

function Blog() {
  return (
    <section className="max-w-[80rem] mx-auto pt-20">
        <div className="flex md:w-6/12 border p-2 mx-auto">
          <div className="flex flex-col gap-4">
            <a href="#" className="flex flex-col gap-2">
              <p><span className="text-gray-400">written by</span>harold mudosa</p>
              <h2 className="text-2xl leading-8 font-bold text-blue-900">8 Performance Optimization Techniques You Should Know in React</h2>
              <div>Hey! I’m Çağlayan Yanıkoğlu and I work as a front-end developer at Jotform. I’m also a front-end instructor/consultant at Patika.dev and...</div>
            </a>
            <div className="text-[10px] flex gap-4">
              <a href="#" className="bg-gray-300 px-2 text-blue-900 rounded-2xl">javascript.com</a>
              <p className="bg-gray-300 px-2 text-gray-500 rounded-2xl">7min of reading</p>
              <p className="bg-gray-300 px-2 text-gray-500 rounded-2xl">23-05-23</p>
            </div>
          </div>
          <a href="#" className="h-fit my-auto pl-4">
            <img className="my-auto w-[10rem]" src="https://miro.medium.com/v2/resize:fill:168:168/1*H3K_V67w8bg6Ac5ukFUmNg.png" alt="" />
          </a>
        </div>
      </section>
  )
}

export default Blog