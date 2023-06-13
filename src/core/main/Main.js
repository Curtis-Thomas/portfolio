import React from "react";
import { Input, Typography, Button, Link } from "@mui/material";
import { Box } from "@mui/system";

const Main = () => {
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
        <Typography>Projects:</Typography>
        <br />
        <Typography>
          <Link
            href="https://github.com/Curtis-Thomas/free-api-list-with-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            free-api-list-with-react
          </Link>
        </Typography>
        <br />
        <Typography>
          <Link
            href="https://mealsync.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MealSync
          </Link>
        </Typography>
        <br />
        <Typography>Technologies:</Typography>
        <br />
        <Typography>- HTML</Typography>
        <Typography>- CSS</Typography>
        <Typography>- JavaScript</Typography>
        <Typography>- React JS</Typography>
        <Typography>- Material UI</Typography>
        <Typography>- MongoDb</Typography>
        <Typography>- Express js</Typography>
        <Typography>- Node Js</Typography>
        <Box
          sx={{
            padding: 1,
            margin: 4,
            border: "solid 1px #3E3E3C",
            backgroundColor: "#2C2C2C",
          }}
        >
          <Typography>Email me:</Typography>
          <form
            action="mailto:curtisthomas08@hotmail.co.uk"
            method="POST"
            encType="text/plain"
          >
            <Input placeholder="Name" name="Name" fullWidth />
            <Input placeholder="Email" name="Email" fullWidth />
            <Input
              placeholder="Message"
              name="Message"
              fullWidth
              multiline
              rows={4}
            />

            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
        </Box>
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

export default Main;
