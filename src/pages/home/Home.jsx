import "./Home.css";
import Header from "../../component/header/Header";
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Header type="home" />
      <p className="homeTitle">Featured Item </p>
      <Featured />
      <p className="homeTitle">Property Item</p>
      <PropertyList />
      <p className="homeTitle">Featured Property Item</p>
      <FeaturedProperties />
    </>
  );
};
export default Home;
