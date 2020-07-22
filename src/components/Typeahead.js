import React from "react";
import Suggestion from "./Suggestion";
import styled from "styled-components";

const UserInput = styled.input`
  border-radius: 3px;
  display: inline-block;
  height: 37px;
  border: solid 1px white;
  background-color: inherit;
  width: 270px;
  padding: 8px;
  caret-color: #ff00ff;
  color: white;
  margin-bottom: 20px;
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
  border: white 2px solid;
  box-shadow: 0 3px 0 0 white;
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
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [userInput, setUserInput] = React.useState("");

  const matchedSuggestions = (input) => {
    if (input.length > 1) {
      return suggestions.filter((suggestion) =>
        suggestion.title.toLowerCase().includes(input)
      );
    }
    return [];
  };

  return (
    <Wrapper>
      <div>
        <UserInput
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <ClearBtn onClick={(e) => setUserInput("")}>Clear</ClearBtn>
      </div>

      <ul>
        {matchedSuggestions(userInput).map((matchedSuggestion) => (
          <Suggestion
            key={matchedSuggestion.id}
            matchedSuggestion={matchedSuggestion}
            handleSelect={handleSelect}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Typeahead;
