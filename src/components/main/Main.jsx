import React from "react";
import Hero from "../hero/Hero";
import Section from "../section/Section";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Hero
        url="https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg"
        title="iPhone 16 Pro"
        desc="Hello, Apple Intelligence"
        color={"white"}
        btn_bg={"#0071e3"}
        btn_color={"white"}
      />
      <Hero
        url="https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg"
        title="iPhone 16"
        desc="Hello, Apple Intelligence"
        color={"white"}
        btn_bg={"white"}
        btn_color={"black"}
      />
      <Hero
        url="https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall.jpg"
        title="iPad air"
        desc="Two sizes.Faster chip.Does it all"
        color={"white"}
        btn_bg={"#0071e3"}
        btn_color={"white"}
      />
      <div className="main__section">
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"
          }
          title={"AirPods4"}
          desc1="Iconic. Now supersonic."
          desc2="Available with Active Noise Cancellation."
          buttons={["Learn more", "Buy"]}
          top="false"
          cl="#fff"
        />
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"
          }
          title={`WATCH`}
          desc1="SERIES 10"
          desc2=" Thinstant classic"
          buttons={["Learn more", "Buy"]}
          top="true"
          cl="#000"
        />
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg"
          }
          title={"MacBook Air"}
          desc1="Lean. Mean. M3 machine"
          desc2=""
          buttons={["Learn more", "Buy"]}
          top="true"
          cl="#000"
        />
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/apple-small-business/promo_asb__gajxkvbkiqie_large.png"
          }
          title={"Apple for Small Business"}
          desc1="Hardware, software, and expert"
          desc2="help - all in one place"
          buttons={["Learn more"]}
          top="true"
          cl="#000"
        />
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_small_2x.jpg"
          }
          title={"Carrier deals at Apple"}
          desc1="Get up to $1000 in credit on a new iPhone"
          desc2="Trade-in may be required."
          buttons={["Find your deal"]}
          top="false"
          cl="#000"
        />
        <Section
          url={
            "https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg"
          }
          title={`Trade In`}
          desc1="Get $180 - $650 in credit when you"
          desc2="trade in iPhone 12 or higher."
          buttons={["Get your estemate"]}
          top="true"
          cl="#000"
          btn_bg="blue"
        />
      </div>
    </main>
  );
}

export default Main;
