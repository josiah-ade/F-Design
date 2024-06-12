import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "./SideBar";
import MainBody from "./MainBody";

function Body() {
  return (
    <Container>
      <div className="body__container">
        <Grid  container spacing={2}>
          <Grid xs={4}>
            <SideBar />
          </Grid>
          <Grid xs={8} className="main__body">
            <MainBody />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Body;
