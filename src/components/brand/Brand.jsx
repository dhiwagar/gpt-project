import "./brand.css";
import {   dropbox,
  atlasssian,
  google,
  shopify,
  slack,
} from './Import'
import React from "react";

const Brand = () => {
  return <div className="gpt_brand section_padding">
    <div>
      <img src={google} alt="" />
    </div>
    <div>
      <img src={slack} alt="" />
    </div>
    <div>
      <img src={shopify} alt="" />
    </div>
    <div>
      <img src={atlasssian} alt="" />
    </div>
    <div>
      <img src={dropbox} alt="" />
    </div>

  </div>;
};

export default Brand;
