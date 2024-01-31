import React from "react";

import Catagories from "../components/catagories/catagories";
import Product from "../components/Catagories/Products/Product";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Sliders from "../components/slider/sliders";
import Campaigns from "../components/campaigns/Campaigns";
import Blogs from "../components/blogs/Blogs";
import Policy from "../components/Layout/Policy";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders/>
      <Catagories/>
      <Product/>
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />

    </React.Fragment>
  );
};

export default HomePage;