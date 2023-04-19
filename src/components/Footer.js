
function Footer() {
  return (
    <div className="flex md:justify-center justify-start bg-blue-950 mt-12">
      <div className="text-white flex  w-fit md:flex-row flex-col gap-4 my-20 md:pl-auto pl-4">
        <h3 className="mb-4 font-bold ">Our fields:</h3>
        <div className="md:text-base">
          <ul className="font-thin grid md:grid-flow-col grid-rows-3 gap-3">
            <li className="underline hover:no-underline"><a href="https://www.google.com">Education</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Employment</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Networking</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Industry</a> </li>

            <li className="underline hover:no-underline"><a href="https://www.google.com">Sports</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Economy</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Politics</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Weather</a> </li>
         
            <li className="underline hover:no-underline"><a href="https://www.google.com">Governements</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Advertisements</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Loisirs</a></li>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default Footer