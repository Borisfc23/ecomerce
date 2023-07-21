import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ text }) => {
  return (
    <h2>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).pauseFor(1500).deleteAll().start();
        }}
      />
    </h2>
  );
};

export default TypewriterEffect;
