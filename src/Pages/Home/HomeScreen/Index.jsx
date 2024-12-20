import HeroSection from "../HeroSection";
import MyPortFolio from "../MyPortFolio";
import About from "../AboutMe";
import Testimonials from "../Testimonials";
import Navbar from "../Navbar";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
export default function Index(){
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        
            <Routes>
                <Route path="/" element={<HeroSection/>}></Route>
                <Route path="/portfolio" element={<MyPortFolio/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/testimonials" element={<Testimonials/>}></Route>
            </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}