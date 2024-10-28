import {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
// import Blogs from "./Blogs";
import Footer from "./Footer";
import Loader from "./Loader.jsx";

const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 5000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className='min-vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden m-0 p-0 '>
                <Loader/>
            </div>
        );
    }
    return (
        <div>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          {/* <Blogs /> */}
          <Footer />
        </div>
    );
};

export default MainLayout;
