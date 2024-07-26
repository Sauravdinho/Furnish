import { Route, Routes } from "react-router-dom"
import Home from "./app/Home"
import Toolbar from "./components/Navigation/Toolbar"
import About from "./app/About"
import Collections from "./app/Collection"
import Blog from "./app/Blog" 
import Contact from "./app/Contact"
function App() {
 return (
    <>
    <div className="">
      <Toolbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>

    </>
  )
}
export default App
