import Header from "../components/header";
import Description from "../components/description";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main>
            <Description/>
            </main>
            <Footer/>
        </div>
    )
};

export default Home;