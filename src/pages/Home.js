import React from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import Questions from "../components/Questions/Questions";
import Trouble from "../components/Trouble/Trouble";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

export const Home = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{ width: "90%", marginTop: "50px", marginBottom: "20px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%" }}>
            <Questions />
          </div>
          <div style={{ width: "45%" }}>
            <Trouble />
            <Button sx={{ color: "#0AB28B" }} endIcon={<HomeIcon />}>
              <a
                style={{ textDecoration: "none", color: "#0AB28B" }}
                href="/client"
              >
                Go home
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
