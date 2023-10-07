import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Footer from "./Footer/Footer";
import Team from "./Team/Team";


const Home = () => {

    return (
        <div className="space-y-20 mt-20">
            <Services></Services>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;