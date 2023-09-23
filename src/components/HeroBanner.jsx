import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "30px", xs: "10px" }, ml: { sm: "10px" } }}
    position="relative"
    p="10px"
    className="flex"
  >
    <Box className="w-[40rem]">
      <Typography color="lightblue" fontWeight="600" fontSize="30px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      color='white'
      sx={{ fontSize: { lg: "40px", xs: "40px" } }}
      mb="2rem"
      mt="3rem"
    >
      Sweat, Breath <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" className="text-white">
      Check out the best excercises for you!
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "blue",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="blue"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    </Box>
    
    <img src={HeroBannerImage} alt="hero-banner" className="w-[50%] h-[50%] rounded-l-[3rem] " />
  </Box>
);

export default HeroBanner;
