import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { getStoredUser } from "./api/auth";

function App() {
  // 仮のログイン状態（本来はContextやAPIで管理）
  const [user, setUser] = useState(() => getStoredUser());

  // TODO: ログイン時に取得する
  useEffect(() => {
    const stored = getStoredUser();
    if (stored) setUser(stored);
  }, []);

  return (
    <Router>
      <Box p={4} bg="gray.100">
        <Flex justify="space-between" align="center">
          {/* 左側のリンク群 */}
          <Flex gap={4}>
            <ChakraLink as={Link} to="/">
              ホーム
            </ChakraLink>
            <ChakraLink as={Link} to="/about">
              このアプリについて
            </ChakraLink>
          </Flex>

          {/* 右側のログイン状態 */}
          <Flex gap={4} align="center">
            {user ? (
              <Text>ログイン中: {user.name}</Text>
            ) : (
              // TODO: ログアウト、ユーザー作成、パスワード再設定
              <ChakraLink as={Link} to="/login">
                ログイン
              </ChakraLink>
            )}
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
