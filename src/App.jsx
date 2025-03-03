import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Banner from "./pages/Banner";
import Bestseller from "./pages/BestSeller";
import Blog from "./pages/Blog";
import Fact from "./pages/Fact";
import Features from "./pages/Features";
import MainPage from "./pages/MainPage";
import Menus from "./pages/Menus";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
        <Features />
        <Menus />
        <Banner />
        <Bestseller />
        <Blog />
        <Fact />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}

export default App;
