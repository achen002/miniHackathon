import React from "react";

export default function About() {
  return (
    <div class="ui inverted segment">
      <div class="ui two column very relaxed grid">
        <div class="column about-text">
          <h1>Oat Milk</h1>
          <p>
            This frothy dairy-free alternative is making a name for itself at
            your local coffee house.
          </p>
          <div class="ui hidden section divider image-container">
            <img
              class="icon"
              src="/images/gluten-free-icon-no-bg.png"
              alt="icon 1"
            />
            <img
              class="icon"
              src="/images/gmo-free-icon-no-bg.png"
              alt="icon 2"
            />
            <img class="icon" src="/images/dairy-free-no-bg.png" alt="icon 3" />
            <img
              class="icon"
              src="/images/non-irradiated-no-bg.png"
              alt="icon 4"
            />
          </div>
          <br />
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
          <img
            class="about-img"
            src="/images/oatly-no-bg.png"
            alt="sample about"
          />
        </div>
      </div>
      <div class="ui hidden vertical divider"></div>
    </div>
  );
}
