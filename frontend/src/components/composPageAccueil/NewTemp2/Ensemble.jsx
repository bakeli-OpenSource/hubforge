import React from "react";
import SectFirst from "./SectFirst";
import SectSecnd from "./SectSecnd";
import Testimonials from "./SectHird";
import Footer from "./Footer";

export default function Ensemble() {
  return (
    <div>
      <SectFirst />
      <SectSecnd />
      <Testimonials />
      <Footer />
    </div>
  );
}
