import "./ZoomImage.css";
import pic from "../assets/anime-7959691_960_720.webp";

const ZoomImage = () => {
  return (
    <div className="zoom-container">
      <img src={pic} className="zoom-image" />
    </div>
  );
};

export default ZoomImage;
