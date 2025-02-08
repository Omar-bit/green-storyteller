import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        

<nav className="bg-green-950 p-2">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
        <h1 className="text-xl  font-bold text-amber-50">Algo_Rythme</h1>
    
    <div className=" text-white space-x-2">
      <Link to="/">Home</Link>
      <Link to="/ask">Generate</Link>
      <Link to="/history">History</Link>
    </div>
    
    
  </div>
</nav>

    </div>
  )
}

export default Navbar