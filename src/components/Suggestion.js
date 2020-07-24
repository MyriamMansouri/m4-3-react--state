import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  text-align: center;
  padding: 5px 5px;
  width: 100%;
  &:hover {
    background-color: #e0d7df;
  }
  button {
    font-size: inherit;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  button:focus {
    outline: none;
    border: none;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Genre = styled.span`
  font-size: 0.87rem;
  font-style: italic;
`;
const GenreId = styled(Genre)`
  color: purple;
`;

const boldPrediction = (suggestion, input) => {
  const title = suggestion.title;
  const index = title.toLowerCase().indexOf(input);
  const firstHalf = title.slice(0, index + input.length);
  const secondHalf = title.slice(index + input.length);
  return { firstHalf, secondHalf };
};

const Suggestion = ({
  matchedSuggestion,
  handleSelect,
  userInput,
  isSelected,
  index,
  setSelectedSuggestionIndex,
}) => {
  const { firstHalf, secondHalf } = boldPrediction(
    matchedSuggestion,
    userInput
  );

 

  return (
    <ListItem
    
      style={{
        background: isSelected ? "#e0d7df" : "transparent",
      }}
      onClick={(e) => {
        handleSelect(matchedSuggestion.title);
      }}
      onMouseEnter={(e) => {
        e.target.focus();
        setSelectedSuggestionIndex(index);
      }}
    >
      <button>  
        {firstHalf}
        <Prediction>{secondHalf}</Prediction> &nbsp;
        <Genre>
          in <GenreId>{matchedSuggestion.categoryId}</GenreId>
        </Genre>
      </button>
    </ListItem>
  );
};

export default Suggestion;
