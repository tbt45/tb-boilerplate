import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Box p={4} bg="gray.100">
        <Flex gap={4}>
          <ChakraLink as={Link} to="/">
            ホーム
          </ChakraLink>
          <ChakraLink as={Link} to="/about">
            このアプリについて
          </ChakraLink>
        </Flex>
      </Box>

      <Box p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
