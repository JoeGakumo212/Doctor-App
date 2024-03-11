import React from "react";
import {Link} from 'react-router-dom'
import heroImg01 from "../Assets/images/hero-img01.png";
import heroImg02 from "../Assets/images/hero-img02.png";
import heroImg03 from "../Assets/images/hero-img03.png";
import icon01 from '../Assets/images/icon01.png'
import icon02 from '../Assets/images/icon02.png'
import icon03 from '../Assets/images/icon03.png'
import {BsArrowRight} from 'react-icons/bs'
import About from "../Components/About/About";

const Home = () => {
  return (
    <>
      {/* ===================hero section================ */}
      
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ===============hero content=============  */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patient live a healthy, Healthier and Longer Life
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    a aperiam error rerum neque vero dolores impedit ut cumque
                    veniam dolore officiis labore exercitationem adipisci,
                    necessitatibus aliquam sunt quae minus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Obcaecati dicta,
                    suscipit laboriosam sapiente libero praesentium aliquid, in
                    enim facilis quis aut assumenda. Consequatur, adipisci
                    pariatur nulla explicabo vitae harum accusamus.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* ==================hero counter========== */}

                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      45+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-12px]"></span>
                    <p className="text__para"> Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px]  lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      70+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-12px]"></span>
                    <p className="text__para"> Clinics Location</p>
                  </div>
                  <div>
                    <h2 className="text-[36px]  lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-12px]"></span>
                    <p className="text__para"> Patient Satisfactory</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[30px] jusify-end">
                <div>
                  <img
                    className="w-full"
                    src={heroImg01}
                    alt="image for medic"
                  />
                </div>
                <div className="mt-[30px">
                  <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="text-[34px] font-[900] text-center">
                Providing the best Medical Services
              </h2>
              <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem a quaerat repudiandae, porro cumque, veniam dolore consequatur similique, itaque eum ea numquam? Distinctio neque, veniam quo reprehenderit adipisci voluptates.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gaps-5 lg:gap-[30px] mt-[30px] lg:mt-[55px">
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon01} alt="Icon image" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
               <p className="text-[16px] leading-7 text-textColor font-[400
              ]  mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus facere recusandae nesciunt, officia eaque dolores corrupti reprehenderit voluptatum commodi officiis enim quam suscipit odio. Temporibus nesciunt adipisci soluta corrupti.</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] flex mx-auto items-center justidy-center group hover:bg-primaryColor hover:border=none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon02} alt="Icon image" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find Location</h2>
               <p className="text-[16px] leading-7 text-textColor font-[400
              ]  mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus facere recusandae nesciunt, officia eaque dolores corrupti reprehenderit voluptatum commodi officiis enim quam suscipit odio. Temporibus nesciunt adipisci soluta corrupti.</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] flex mx-auto items-center justidy-center group hover:bg-primaryColor hover:border=none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex item-center justify-center">
                  <img src={icon03} alt="Icon image" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
               <p className="text-[16px] leading-7 text-textColor font-[400
              ]  mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus facere recusandae nesciunt, officia eaque dolores corrupti reprehenderit voluptatum commodi officiis enim quam suscipit odio. Temporibus nesciunt adipisci soluta corrupti.</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] flex mx-auto items-center justidy-center group hover:bg-primaryColor hover:border=none">
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================About section============= */}
        <About/>
        {/* =================end================ */}
     
    </>
  );
};

export default Home;
