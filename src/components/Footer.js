import React from "react";
import "./Css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/daniel-possehl-a2aa24b4/"
        class="icon-button twitter"
      >
        <i class="icon-twitter"></i>
        <span>Linkedin</span>
      </a>
      <a href="https://github.com/Danfirech" class="icon-button facebook">
        <i class="icon-facebook"></i>
        <span>GitHub</span>
      </a>
      <a
        href="https://twitter.com/search?q=%23shiba&lang=en"
        class="icon-button google-plus"
      >
        <i class="icon-google-plus"></i>
        <span>Twitter</span>
      </a>
    </div>
  );
}
