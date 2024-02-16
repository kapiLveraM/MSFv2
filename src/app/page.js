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
export default function Home() {
  return (
    <>
      <Hero />
      <FeatuRedOn />
      <WhyChooseUs />
      {/* <GlobalSettlemen /> */}
      <BrackingCases />
      <Representation />
      <WePursue />
      <CaliforniaSexual />
      <OurBlogs />
      <Ourfirm />
      <ContactOur/>
    </>
  );
}
