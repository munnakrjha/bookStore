import { Link } from "react-router-dom"
import list from "../../public/list.json"
import Cards from "./Cards"

const Course = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
    <h1 className="text-2xl font-semibold md:text-4xl"> We'r delighted to have you<span className="text-pink-500"> Here :)</span></h1>
    <p className="mt-12">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus eget efficitur maximus. Integer sodales leo nec lectus sollicitudin, sed vestibulum ipsum vulputate.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus eget efficitur maximus. Integer sodales leo nec lectus sollicitudin, sed vestibulum ipsum vulputate.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus eget efficitur maximus. Integer sodales leo nec lectus sollicitudin, sed vestibulum ipsum vulputate.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus eget efficitur maximus. Integer sodales leo nec lectus sollicitudin, sed vestibulum ipsum vulputate.

    </p>
    <Link to="/">
    <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">back</button></Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {
       list.map((item)=>(
        <Cards key={item.id} item={item}/>
       ))

    }
    </div>
    
    </div>
    
    </>
  )
}

export default Course
