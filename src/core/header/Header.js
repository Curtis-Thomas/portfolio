import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#200004",
          color: "white",
          display: "flex",
        }}
      >
        {" "}
        <Box sx={{ marginLeft: 1, marginTop: 1 }}>
          <ArticleIcon />
        </Box>
        <Box
          sx={{
            backgroundColor: "#2C1A1C",
            marginTop: 1,
            marginLeft: 1,
            paddingTop: 0.5,
            paddingLeft: 1,
            paddingRight: 10,
            borderRadius: "4px 4px 0 0", // Set the border radius for top left and top right corners
          }}
        >
          <Typography fontSize={12}>Curtis Thomas</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2C1A1C",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "solid 1px #281719",
          paddingTop: 1,
        }}
      >
        <Box
          sx={{ width: "30%", display: "flex", justifyContent: "space-evenly" }}
        >
          <Link to="/" style={{ color: "#FFFFFF" }}>
            <HomeIcon />
          </Link>
          <Link to="/profile" style={{ color: "#FFFFFF" }}>
            <AccountBoxIcon />
          </Link>
        </Box>
        <Box
          sx={{ width: "45%", display: "flex", justifyContent: "space-evenly" }}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#FFFFFF" }} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#FFFFFF" }} />
          </a>
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon sx={{ color: "#FFFFFF" }} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
