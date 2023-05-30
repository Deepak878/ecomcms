import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Category from './Category/Category'
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
