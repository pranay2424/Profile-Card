import React from "react";
import CardStyle from "./CardStyle";
import BubbleSvg from "./BubbleSvg";
import Avatar from "./Avatar";
import Face from "./image-victor.jpg";
import About from "./About";
import Stats from "./Stats";

const Card = () => {
  return (
    <CardStyle>
      <BubbleSvg />
      <Avatar>
        <img src={Face} alt="" />
      </Avatar>
     <About>
<p>Victor Crest <span>26</span></p>
<span>London</span>
     </About>
     <Stats>
    <nav>80K<p>Follower</p></nav>
    <nav>803k<p>Like</p></nav>
    <nav>1.4k<p>Photo</p></nav>
     </Stats>
    </CardStyle>
  );
};

export default Card;
