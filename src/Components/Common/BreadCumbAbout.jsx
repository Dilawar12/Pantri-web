import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

const BreadCumbAbout = ({ image }) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="breadcumb-area-new">
      <img src={image} alt="img" />
      {/* <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
              <div className="breadcumb-content">
                <h1>{Title}</h1>
                <p>Powered by PantriOS</p>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default BreadCumbAbout;