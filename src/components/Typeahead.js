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
  line-height: 50px;
`;

const ClearBtn = styled.button`
  background-color: #ff00ff;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  height: 35px;
  width: 90px;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #1a1a1a;
`;
const BtnWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 37px;
  width: 90px;
`;
const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 10px;
  margin : 20px auto ;
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

  const listMatchedSuggestions = matchedSuggestions(userInput);

  return (
    <>
      <FormWrapper>
        <UserInput
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <BtnWrapper>
          <ClearBtn onClick={(e) => setUserInput("")}>Clear</ClearBtn>
        </BtnWrapper>
      </FormWrapper>

      {listMatchedSuggestions.length > 0 && (
        <List>
          {listMatchedSuggestions.map((matchedSuggestion) => (
            <Suggestion
              key={matchedSuggestion.id}
              matchedSuggestion={matchedSuggestion}
              handleSelect={handleSelect}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Typeahead;
