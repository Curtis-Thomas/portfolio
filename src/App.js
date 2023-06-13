import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./core/header/Header";
import Main from "./core/main/Main";

import backgroundImg from "./portfolioBackground.webp";

import theme from "./theme";

import { Box, ThemeProvider } from "@mui/material";
import Profile from "./components/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "fit",
          }}
        >
          <Box
            sx={{
              border: "solid 1px #3E3E3C",
              borderRadius: "5px",
              width: "55%",
              "@media (max-width: 600px)": {
                width: "80%",
              },
            }}
          >
            <Box sx={{ minHeight: "5vh" }}>
              <Header />
            </Box>
            <Box
              sx={{
                minHeight: "80vh",
              }}
            >
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Box>
          </Box>
        </Box>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
