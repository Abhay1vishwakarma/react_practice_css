import React from "react";
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechHero</h1>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, ut
            quo voluptas eligendi veniam cupiditate molestiae! Molestias vero
            obcaecati id quos excepturi at! Nesciunt ab alias quis, corrupti
            doloribus deserunt?
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>This is lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quibusdam dicta ratione voluptatibus non ducimus nam nemo maxime
            architecto! Blanditiis accusamus esse, laudantium cupiditate
            suscipit a! Neque atque deserunt amet beatae magnam ab explicabo
            maxime voluptate animi qui expedita earum, dicta veniam aliquid,
            doloribus voluptatibus placeat. Ratione eum optio ipsam.
          </p>
        </div>
      </div>

      <div className="home4">
        <div>
          <h1>Brands</h1>
          <article>
            <div 
            style={{
              animationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div 
            style={{
              animationDelay:"0.5s",
            }}>
              < AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div 
            style={{
              animationDelay:"0.7s",
            }}>
              < AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div 
            style={{
              animationDelay:"1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
