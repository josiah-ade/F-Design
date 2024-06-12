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
          <Grid xs={12} sm={12} md={12} lg={4} className='side__bar__main'>
            <SideBar />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={8} className="main__body">
            <MainBody />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Body;
