import React from "react";

export default function About() {
  return (
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column about-text">
          <p>
            <strong>"</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique sed lorem a volutpat. Fusce at iaculis nunc. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Pellentesque
            lacus.<strong>"</strong>
          </p>
        </div>
        <div class="column">
          <img src="sample image" alt="sample about" />
        </div>
      </div>
      <div class="ui vertical divider"></div>
    </div>
  );
}
