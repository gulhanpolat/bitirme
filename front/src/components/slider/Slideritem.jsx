import PropTypes from "prop-types";

const Slideritem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
      <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2023</p>
        <h2 className="slider-heading">%70 e varan indirim</h2>
        <a href="#" className="btn btn-lg btn-primary">
          ŞiMDİ KEŞFET
        </a>
      </div>
    </div>
  );
};
export default Slideritem;
Slideritem.propTypes = {
  imageSrc: PropTypes.string,
};
