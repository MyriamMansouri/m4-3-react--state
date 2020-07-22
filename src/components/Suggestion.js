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

const Suggestion = ({ matchedSuggestion, handleSelect }) => {
  return (
    <ListItem
      
      onClick={(e) => handleSelect(matchedSuggestion.title)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSelect(matchedSuggestion.title);
        }
      }}
    >
      {matchedSuggestion.title}
    </ListItem>
  );
};

export default Suggestion;
