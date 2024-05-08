import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"
import PicDetails from "../components/PicDetails"



function Profile() {
  const Navigate = useNavigate();

  const Course = () => {
    Navigate('/couse')
  }

  return (
    <div className="font-montserrat">
      
      <Nav />
      <PicDetails />
      <div className="px-4 mt-6 text-black DATA">
        <ul className="flex flex-col gap-2">
            <li><h2>Entry mode:</h2>Undergraduate Full Time<p></p></li>
            <li><h2>College:</h2><p>Collage of Natural and Applied Science</p></li>
            <li><h2>Department:</h2>Computer Science<p></p></li>
            <li><h2>Current Level:</h2><p>200 level</p></li>
            <li><h2>Entry Session:</h2><p>2022/2023</p></li>
            <li><h2>Current Session:</h2><p>2023/2024</p></li>
            <li><h2>Curuent Verdict:</h2><p>Not Available</p></li>
            <li><h2>Previous Verdict: </h2><p>Not Available</p></li>
            <li><h2>Certificate:</h2><p>BSCSC - B.SC. computer science and information technology</p></li>
        </ul>
      </div>

      <div className="px-4 text-black mt-7">
        <h1 className="flex gap-1 text-2xl font-bold">Study levels <span className="my-auto text-sm font-normal">(course List)</span></h1>
        <div className="flex flex-col w-full">
            <div className="flex justify-between px-2 py-2 border" onClick={Course}>
                <h3>100</h3><span>year 1</span>
            </div>
            <div className="flex justify-between px-2 py-2 border">
                <h3>200</h3><span>year 2</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
