import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  cursor: pointer;
  text-align: center;
  padding: 5px 5px;
  &:hover {
    background-color: #ff00ff;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const boldPrediction = (suggestion, input) => {
  const title = suggestion.title
  const index = title.toLowerCase().indexOf(input);
  const firstHalf = title.slice(0, index + input.length);
  const secondHalf = title.slice(index + input.length);
  return { firstHalf, secondHalf };
};

const Suggestion = ({ matchedSuggestion, handleSelect, userInput }) => {
  const { firstHalf, secondHalf } = boldPrediction(
    matchedSuggestion,
    userInput
  );

  return (
    <ListItem
      onClick={(e) => handleSelect(matchedSuggestion.title)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSelect(matchedSuggestion.title);
        }
      }}
    >
      {firstHalf}
      <Prediction>{secondHalf}</Prediction>
    </ListItem>
  );
};

export default Suggestion;
