import HeroSection from "../HeroSection";
import MyPortFolio from "../MyPortFolio";
import About from "../AboutMe";
import Testimonials from "../Testimonials";
import Navbar from "../Navbar";

import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
export default function Index(){
    return (
        <>
       
        <Navbar/>
        <HeroSection/>
        <MySkills/>
        <About/>
        <MyPortFolio/>
        <Testimonials/>
        <ContactMe/>
        
       
        
        </>
    )
}