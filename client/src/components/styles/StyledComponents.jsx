import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});    

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    background-color: #f0f0f0;
  }
`;

export const InputBox = styled("input")({ 
  width: "100%", 
  padding: "0.5rem", 
  border: "none", 
  borderBottom: "1px solid #ccc", 
  borderRadius: "5px", 
  fontSize: "1rem",
  color: "black",
});