import { Fragment } from "react"
import Catagories from "../components/catagories/catagories"
import Product from "../components/Catagories/Products/Product"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"



const ShopPage = () => {
    return (
    <Fragment>
        <Catagories/>
        <Product/>
        <CampaignSingle/>
    </Fragment>
    )
  }
  
  export default ShopPage