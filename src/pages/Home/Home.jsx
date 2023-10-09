import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EVENTA | Home</title>
      </Helmet>
      <div className="space-y-20 mt-20">
        <Services></Services>
        <Team></Team>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
