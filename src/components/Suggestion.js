import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  cursor: pointer;
  margin: 5px 0;
  text-align: center;
  &:hover {
    color: #ff00ff;
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
