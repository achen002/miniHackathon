import React from "react";

export default function About() {
  return (
    <div class="ui inverted segment">
      <div class="ui two column very relaxed grid">
        <div class="column about-text">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique sed lorem a volutpat.
          </p>
          <div class="ui hidden section divider image-container">
            <img class="icon" src="/images/circle-icon.png" alt="icon 1" />
            <img class="icon" src="/images/circle-icon.png" alt="icon 2" />
            <img class="icon" src="/images/circle-icon.png" alt="icon 3" />
            <img class="icon" src="/images/circle-icon.png" alt="icon 4" />
          </div>
          <br />
          <p>
            Fusce at iaculis nunc. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque lacus.
          </p>
          <br />
          <br />
          <button class="massive ui button centerContent">SHOP NOW</button>
        </div>
        <div class="column">
          <img src="sample image" alt="sample about" />
        </div>
      </div>
      <div class="ui hidden vertical divider"></div>
    </div>
  );
}
