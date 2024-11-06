import Header from "../components/header";
import Description from "../components/description";
import Projects from "../components/projects";
import Skills from "../components/skills";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main>
            <Description/>
            <Skills/>
            <Projects/>
            <About/>
            <Contact/>
            </main>
            <Footer/>
        </div>
    )
};

export default Home;