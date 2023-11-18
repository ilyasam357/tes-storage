import { Link, Outlet } from "react-router-dom";

// Komponen induk yang menyediakan nilai konteks
function App() {

  return (
    <>
      <div className={"flex gap-8 h-screen"}>
        <div className={"h-full border-2 border-green-500"}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
        <div><Outlet /></div>
      </div>
    </> 
  );
}


export default App; 