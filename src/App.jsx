// import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar.jsx";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";

const App = () => {
  return (
    <div>
      {/*<h1>Hello React</h1>*/}
      {/*<h1 className="text-3xl font-bold underline">*/}
      {/*    Hello React!*/}
      {/*</h1>*/}

      <Navbar />
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/services"} element={<Services/>}/>
        </Routes>
      {/*<Home />*/}
    </div>
  );
};

export default App;

// const [myName, setMyName] = useState('Shamilka')
// const [number, setNumber] = useState(0)
//
// useEffect(() => {
//
// }, []);
//
// return (
//     <div>
//         <h1>{number}</h1>
//         <button onClick={()=>{setNumber(number+1)}}>Increment</button>
//     </div>
// )
