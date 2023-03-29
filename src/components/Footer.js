
function Footer() {
  return (
    <div className="flex md:justify-center justify-start bg-blue-950">
      <div className="text-white flex  w-fit md:flex-row flex-col gap-4 my-20 md:pl-auto pl-4">
        <h3 className="mb-4 font-bold ">news publishers:</h3>
        <div className="md:text-base">
          <ul className="font-thin grid md:grid-flow-col grid-rows-3 gap-3">
            <li className="underline hover:no-underline"><a href="#">Students</a></li>
            <li className="underline hover:no-underline"><a href="#">Employees</a></li>
            <li className="underline hover:no-underline"><a href="#">Alumni and supporters</a></li>
            <li className="underline hover:no-underline"><a href="#">Industry</a> </li>

            <li className="underline hover:no-underline"><a href="#">Legal notice</a></li>
            <li className="underline hover:no-underline"><a href="#">Pricvacy notice</a></li>
            <li className="underline hover:no-underline"><a href="#">Accessibility</a></li>
            <li className="underline hover:no-underline"><a href="#">Certificates</a> </li>
         
            <li className="underline hover:no-underline"><a href="#">Faculties and Institutes</a></li>
            <li className="underline hover:no-underline"><a href="#">Faculties</a></li>
            <li className="underline hover:no-underline"><a href="#">Central admnistration</a></li>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default Footer