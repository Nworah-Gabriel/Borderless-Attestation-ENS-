import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router";

// Define a simple animation
const popUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled-component for overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled-component for popup
const PopUp = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  animation: ${popUpAnimation} 0.5s ease-out forwards;
`;

// Styled-component for congratulations text
const CongratsText = styled.h2`
  font-size: 2rem;
  color: #28a745;
`;

// Styled-component for button to close popup
const CloseButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const CongratulationPopUp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const closePopup = () => {
    navigate(`/connections`);
  };

  return (
    isVisible && (
      <Overlay>
        <PopUp>
          {/* Congratulations Animation */}
          <CongratsText>🎉 Congratulations! 🎉</CongratsText>
          <p>You took a Byte!</p>
          <CloseButton onClick={closePopup}>Close</CloseButton>
        </PopUp>
      </Overlay>
    )
  );
};

export default CongratulationPopUp;
