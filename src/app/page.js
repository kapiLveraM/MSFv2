 "use client"
import FeatuRedOn from "@/components/FeatuRedOn";
import GlobalSettlemen from "@/components/GlobalSettlemen";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrackingCases from "@/components/BrackingCases";
import Representation from "@/components/Representation";
import WePursue from "@/components/WePursue";
import CaliforniaSexual from "@/components/CaliforniaSexual";
import OurBlogs from "@/components/OurBlogs";
import Ourfirm from "@/components/Ourfirm";
import ContactOur from "@/components/ContactOur";
import Attorneys from "@/components/Attorneys";
import Footer from "@/components/Footer";
import GetUpdate from "@/components/GetUpdate";
import WeAre from "@/components/WeAre";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BackToTop from "@/components/common/BackToTop";
export default function Home() {
    // Initialize AOS once when component mounts
    useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration in milliseconds (1 second in this example)
      once: true, // Set once to true to trigger animation only once
      // Other options...
    });
  }, []);

  return (
    <>
      <BackToTop/>
    <div className=" overflow-hidden">
      <Hero />
      <FeatuRedOn />
      <WhyChooseUs />
      <GlobalSettlemen />
      <WeAre/>
      <BrackingCases />
      <Representation />
      <WePursue />
      <CaliforniaSexual />
      <OurBlogs />
      <Ourfirm />
      <ContactOur />
      <GetUpdate/>
      <Attorneys />
      <Footer/>
      </div>
      </>
  );
}
