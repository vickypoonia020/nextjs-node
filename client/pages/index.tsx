import React from "react";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

function index() {
  return (
    <>
      <div className="home-img">
        <img src="/images/HomeBanner.jpg" alt="home-img.jpg" />
      </div>
      <div className="home-text-block">
        <div home-txt>
          <h1>Hundreds of Flavors Under One Roof</h1>
          <h3>Something Hot. Something Spicy.</h3>
        </div>
        <div className="order-btn-block">
          <Link href="/order-now" style={{textDecoration:"none"}}>
            <button className="btn-order-now">
              Order Now <KeyboardDoubleArrowRightOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;
