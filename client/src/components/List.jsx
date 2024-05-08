import { useState } from "react"


function List() {
    const [Out, setOut] = useState(true)

    function out(){
        setOut(!Out)
    }
  return (
    <div>
        {Out && (
             <div className="fixed inset-0 justify-center bg-[#2525258a]">
             <svg onClick={out} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-right w-10 h-10 mt-3 mr-2 bg-[#4A66FE] hover:bg-red-600 hover:transition hover:ease-in-out hover:duration-300">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
     
                 <div className="px-2 py-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-600 bg-white w-80 h-96 border-2 rounded-xl  border-[#011EB2]">
                   <div className="flex gap-3 mt-4">
                     <h3 className="text-lg font-medium">Search: </h3>
                     <div className="flex bg-transparent">
                       <input type="text" className="w-40 bg-transparent border-2 outline-none" />
                       <button type="submit"  className="bg-[#4A66FE] px-2 text-white">Enter</button>
                     </div>
                   </div>
                   <hr className="h-1 mt-6 bg-gray-400" />
     
                   <div className="flex flex-col mt-6 overflow-y-scroll border-2 h-60">
                     <div value="" className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between px-1 py-2 border-b-2"><span>Csc211</span><p>Credit: 3</p></div>
                       <div className="flex justify-between"><span>Csc211</span><p>Credit: 3</p></div>
                   </div>
                 </div>
               </div>
        )}
     
    </div>
  )
}

export default List
