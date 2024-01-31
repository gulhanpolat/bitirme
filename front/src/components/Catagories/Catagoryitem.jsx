import "./catagoryitem.css"
import PropTypes from "prop-types";
const Catagoryitem =({ category }) =>{
    return(
        <li className="category-item">
          <a href="#">
          <img src={category.img} alt="" className="category-image" />
          <span className="category-title">{category.name}</span>
          </a>
        </li>
    )
}
export default Catagoryitem;

Catagoryitem.propTypes = {
  category: PropTypes.object,
};