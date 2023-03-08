import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Caret = styled.span`
  &#customcursor {
    border-left: .1em solid ${(props) => props.theme.fontColorHeader};
    animation: blink .7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`

const Typer = ({ dataText,heading,className }) => {
  const TYPING_SPEED = 150;
  const DELETING_SPEED = 30;
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      setText((prevText) =>
        isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1)
      );

      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    };

    const timeoutId = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, typingSpeed, loopNum, dataText]);

  return (
    <h2 className={className}>{heading}&nbsp;
      <span>{text}</span>
      <Caret id="customcursor"></Caret>
    </h2>
  );
};

export default Typer;