import { Link } from "@nextui-org/link"
import { Image } from "@nextui-org/react"
import logo from "@/public/img/Train it!.png"
import NavLinks from "./nav-links"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline"
export default function LateralBar ()  {
    return(<>
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h-40 "
        href="/"
      >
            <div className=""><img alt="" src='/Train it!.png' /> </div>
        <div className="w-32 text-white md:w-40">
       
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks/>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form  >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowLeftEndOnRectangleIcon className="w-6" />
            <div className="hidden md:block">   Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
        {/* <div className="container  p-6 left-0  z-10 bg-white h-full border-1">
           <div className="flex flex-col gap-2 p-2 font-bold text-slate-400">
         

           </div>
        </div> 
     */}
    
    </>)
}