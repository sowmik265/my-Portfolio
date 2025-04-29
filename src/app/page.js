import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/Scrollup";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import "./globals.css";

export default function Home() {
  return (
    <>
      
      <HomePage></HomePage>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Qualification></Qualification>
      <Work></Work>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}
