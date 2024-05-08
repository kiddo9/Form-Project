import { useState } from "react"
import Nav from "../components/Nav"
import PicDetails from "../components/PicDetails"
import List from "../components/List";


function Couse() {
  const [edit, setedit] = useState(false);
  const [option, SetOption] = useState(false);

  const Edit = () => {
    setedit(!edit);
  }

  const Option = () => {
    SetOption(!option);
  } 

  return (
    <div className="pb-10 font-montserrat">
      <Nav />
      <PicDetails />
      <div className="px-4 mt-6 text-black DATA">
        <ul className="flex flex-col gap-2">
            <li><h2>Session:</h2><p>2023/2024</p></li>
            <li><h2>Verdict:</h2><p>Not Yet</p></li>
            <li><h2>Validated By:</h2>Not Yet<p></p></li>
            <li><h2>Total Credit:</h2><p>47</p></li>
            <li><h2>Unrectified:</h2><p>0.00</p></li>
            <li><h2>Transcript Remark:</h2><p>Not Yet</p></li>
        </ul>
      </div>

      <h1 className="px-4 text-3xl font-semibold text-black mt-9">Course Tickets</h1>
      <div className="flex gap-3 px-4 mt-4 text-black">
        <p className="text-lg font-semibold">search:</p><input type="search" className="bg-transparent border-2" />
      </div>

      <div className="relative py-3 mx-4 mt-4 text-black border-2">

        {!edit ? 
        <div onClick={Edit} className="flex gap-4 border-2 border-[#011EB2] w-48 py-1 px-2 absolute right-2 text-md font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        Edit Course List
        </div>
        :

        <div onClick={Edit} className="absolute flex gap-4 px-2 py-1 font-semibold border-2 border-red-400 w-52 right-2 text-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
       Stop Course Edit
        </div>
      }

        <div className="mt-20 overflow-x-scroll">
          <table className="w-[300%] flex flex-col justify-between">
            <thead className="py-2">
              <tr className="flex justify-between text-center text-black border-y-2">
                <th className="w-32">Term</th>
                <th>Code</th>
                <th className="w-[27rem]">Title</th>
                <th className="text-center">Dept</th>
                <th>Fac</th>
                <th>Cradits</th>
              </tr>
            </thead>

            {edit && (
              <div className="flex gap-3 mx-2 my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <input onClick={Option} placeholder="Double Click" type="search" className="bg-transparent border-2 cursor-pointer" />
              </div>
            )}
          
            <tbody className="flex flex-col">
              <tr className="flex justify-between text-center">
                {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}

                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
              <tr className="text-center border-y-2  text-white bg-[#4A66FE] font-montserrat flex justify-between">
              {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}
                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
              <tr className="flex justify-between text-center border-y-2">
              {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}
                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
              <tr className="text-center  text-white bg-[#4A66FE] flex justify-between">
              {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}
                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
              <tr className="flex justify-between text-center border-y-2">
              {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}
                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
              <tr className="text-center  text-white bg-[#4A66FE] flex justify-between">
              {edit && (
                  <td className="my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto my-[-12px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg></td>
                )}
                <td>1st Semester</td>
                <td>Csc111</td>
                <td>Introduction To Computer Science And Programming</td>
                <td>Csc</td>
                <td>NAS</td>
                <td className="mx-2">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-2 px-1 mx-4 mt-4 w-24 text-black border-2 border-[#011EB2]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
              SAVE
          </div>

          {option && (
            <List />
          )}
          
    </div>
  )
}

export default Couse
