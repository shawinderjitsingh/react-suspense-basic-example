import React from "react";

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddUser from './user/Add'
import List from './user/List'
import { Button } from "@mui/material";


function App() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            React Suspense Example - CRUD with JSON Server
          </Typography>
          <Container maxWidth="sm">
            <Stack spacing={2} direction="row">
              <Button variant="contained">
                <Link href="add-user" color="inherit">
                  Add User
                </Link>
              </Button>
              <Button variant="contained">
                <Link href="list" color="inherit">
                  &nbsp;List
                </Link>
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <BrowserRouter >
        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
