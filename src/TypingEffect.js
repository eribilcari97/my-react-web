import React, { useState, useEffect, useMemo} from "react";

const TypingEffect = () => {
  const prefix = "WELCOME ";
  const words = useMemo(() => ["CODER", "DEVELOPER"], []);
  const [displayText, setDisplayText] = useState("");
  const [stage, setStage] = useState("typing"); 
  const [wordIndex, setWordIndex] = useState(0);

  const typingSpeed = 150; 
  const deletingSpeed = 100; 
  const pauseDelay = 1500; 

 
  const target = prefix + words[wordIndex];

  useEffect(() => {
    let timeout;
    if (stage === "typing") {
      if (displayText.length < target.length) {
        
        timeout = setTimeout(() => {
          setDisplayText(target.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        
        timeout = setTimeout(() => {
          setStage("deleting");
        }, pauseDelay);
      }
    } else if (stage === "deleting") {
     
      if (displayText.length > prefix.length) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
       
        timeout = setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setStage("typing");
        }, pauseDelay);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, stage, target, prefix, deletingSpeed, pauseDelay, typingSpeed, words]);

  
  const dynamicColor = words[wordIndex] === "CODER" ? "red" : "purple";

  return (
    <h1>
      {displayText.slice(0, prefix.length)}
      <span style={{ color: dynamicColor }}>
        {displayText.slice(prefix.length)}
      </span>
    </h1>
  );
};

export default TypingEffect;
