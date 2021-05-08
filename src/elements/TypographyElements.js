import styled from "styled-components";

export const StyledText = styled.p`
  font-family: Muli, sans-serif;
  font-size: ${(props) => {
    switch (props.size) {
      case "medium":
        return "1.125rem";
      case "small":
        return "1rem";
      case "xsmall":
        return "0.875rem";
      case "xxsmall":
        return "0.75rem";
      default:
        return "1.125rem";
    }
  }};
  font-weight: ${(props) => {
    switch (props.weight) {
      case "normal":
        return "400";
      case "bold":
        return "700";
      default:
        return "400";
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case "medium":
        return "1.4375rem";
      case "small":
        return "1.375rem";
      case "xsmall":
        return "1.125rem";
      case "xxsmall":
        return "0.875rem";
      default:
        return "1.4375rem";
    }
  }};
  text-decoration: ${props => {
      switch (props.decoration) {
        case "underline":
            return "underline";
        case "line-through":
            return "line-through";
        default:
            return "none";
      }
  }};
  color: ${props => props.color || "hsl(227, 2%, 12%)"};
`;