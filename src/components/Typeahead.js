import React from "react";
import styled from "styled-components";

const UserInput = styled.input`
  border-radius: 3px;
  display: inline-block;
  height: 37px;
  border: solid 1px;
  width: 250px;
  padding: 8px;
`;

const ClearBtn = styled.button`
  background-color: #ff00ff;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  padding: 7px 16px;
  height: 35px;
  display: inline-block;
  margin-left: 10px;
  border: black 2px solid;
  box-shadow: 0 3px 0 0 black;
  outline: none;
  user-select: none;
  position: absolute;
  &:active {
    top: 3px;
    box-shadow: none;
  }
`;

const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [userInput, setUserInput] = React.useState("");

  const handleKeyDown = (key) => {
    if (key === "Enter") {
      alert(userInput);
    }
  };

  return (
    <Wrapper>
      <UserInput
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        value={userInput}
      />
      <ClearBtn onClick={(e) => setUserInput('')}>Clear</ClearBtn>
    </Wrapper>
  );
};

export default Typeahead;
