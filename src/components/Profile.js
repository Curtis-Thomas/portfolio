import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Profile = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#272727",
          height: "75vh",
          overflow: "auto",
          padding: 2,
        }}
      >
        <Typography>About Me</Typography>

        <br />
        <Typography>Name: Curtis</Typography>
        <Typography>Age: Medium</Typography>
        <Typography>Languages: English, JavaScript</Typography>
        <br />
        <Typography>Work History</Typography>
        <br />
        <Typography>- Software Development Self Study</Typography>

        <Typography>Aug 2022 - Present</Typography>

        <Typography>- British Army - Vehicle Mechanic</Typography>
        <Typography>July 2013 - Aug 2022</Typography>

        <br />
        <Typography>Hobbies</Typography>
        <br />
        <Typography>- Running</Typography>
        <Typography>- Cooking</Typography>
        <Typography>- Open-Source Contribution</Typography>
      </Box>

      <Box
        sx={{
          height: "5vh",
          backgroundColor: "#291C1A",
          borderTop: "solid 1px #281719",
          paddingLeft: 1,
          paddingTop: 1,
        }}
      >
        <Typography>Line 4, Col 11</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
