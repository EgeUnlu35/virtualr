import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FutureSection from "./components/FutureSection"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonals from "./components/Testimonals"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 mx-auto max-w-7xl">
        <HeroSection />
        <FutureSection />
        <WorkFlow />
        <Pricing />
        <Testimonals />
        <Footer />
      </div>
    </>
    )
}

export default App