import React from "react";
import aboutImg from "../../Assets/images/about.png";
import aboutCardImg from "../../Assets/images/about-card.png";
import { Link } from "react-router-dom";


function About() {
  return (
    <section>
      <div className="container">
        <div className="flex jutify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ===============about image============= */}
       
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="About image" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="About Card Image" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="text-[36px] leading-[46px] text-headingColor font-[800] ">
            Proud to be one of the nations best
          </h2>
          <p className="text__para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, eius
            recusandae debitis id dicta sunt ipsam modi optio suscipit officiis
            aliquid. At, voluptatibus! Veniam, ea fugiat sed consequuntur
            obcaecati maxime.
          </p>
          <p className="text__para mt-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            dolore consectetur quo exercitationem quae sapiente laudantium
            voluptatem error quod ut cupiditate aperiam facere reiciendis
            inventore magnam quam ducimus ipsa ad?
          </p>
          <p className="text__para mt-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            dolore consectetur quo exercitationem quae sapiente laudantium
            voluptatem error quod ut cupiditate aperiam facere reiciendis
            inventore magnam quam ducimus ipsa ad?
          </p>
          <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>

          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
