import React from "react";
import "./FlashyIntro.css";
import UnderlinedContent from "../../components/UnderlinedContent";
import StyleFirstLetter from "../../components/StyleFirstLetter";

const FlashyIntro = () => {
  return (
    <div className="flashy-intro">
      <h1 className="intro-title">Namaskaram 🙏🏽</h1>
      <p className="intro-text">
        <StyleFirstLetter content="H" color="#000"></StyleFirstLetter>ey there, coding
        connoisseurs and recruiter extraordinares! 👋 I'm Dinesh Pandikona, your
        friendly neighborhood tech wizard with a penchant for turning code into
        poetry. Formerly rocking the tech scene at Deloitte, I've mastered the
        art of Java, TypeScript, and Python – my trusty sidekicks in the world
        of ones and zeros.
      </p>
      <p className="intro-text">
        Currently, on a mission to conquer the realms of programming design
        paradigms and computer science at{" "}
        <UnderlinedContent color="black" variant="p">
          Northeastern University
        </UnderlinedContent>
        , I'm like the superhero your codebase deserves. Crafting scalable
        distributed systems is my jam, and I've got a knack for making bugs
        vanish like magic tricks (abracadabra, anyone?😜).
      </p>
    </div>
  );
};

export default FlashyIntro;
