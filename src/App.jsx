import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Agency from "./Component/Agency/Agency";
import HindSight from "./Component/HindSight/HindSight";
import Deeson from "./Component/Deeson/Deeson";
import Programmes from "./Component/Programmes/Programmes";
import Testimonial from "./Component/Testimonial/Testimonial";
import SelfAssessment from "./Component/SelfAssessment/SelfAssessment";
import Team from "./Component/Team/Team";
import Featured from "./Component/Featured/Featured";
import Podcast from "./Component/Podcast/Podcast";
import Books from "./Component/Books/Books";
import Footer from "./Component/Footer/Footer";
import HorizontalVedio from "./Component/HorizontalVedio/HorizontalVedio";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Agency></Agency>
      <HindSight></HindSight>
      <HorizontalVedio></HorizontalVedio>
      <Deeson></Deeson>
      <Programmes></Programmes>
      <Testimonial></Testimonial>
      <SelfAssessment></SelfAssessment>
      <Team></Team>
      <Featured></Featured>
      <Podcast></Podcast>
      <Books></Books>
      <Footer></Footer>
    </>
  );
}

export default App;
