import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return (
    <>
      <p>More</p>
      <IconButton {...other} />
    </>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const QuestionItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{  marginBottom: "20px" }}>
      <CardContent sx={{ padding: "10px" }}>
        <p
          style={{
            margin: "0",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontWeight: "400",
            fontSize: "0.875rem",
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {question}
        </p>
      </CardContent>
      <CardActions sx={{ padding: "0 10px" }} disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: " 0 10px" }}>
          <p
            style={{
              margin: "0",
              fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "400",
              fontSize: "0.875rem",
              lineHeight: "1.43",
              letterSpacing: "0.01071em",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            {answer}
          </p>
        </CardContent>
      </Collapse>
    </Card>
  );
};
