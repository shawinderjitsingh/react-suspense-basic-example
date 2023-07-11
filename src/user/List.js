import React, { Suspense, useEffect } from "react";

import UserTable from "./UserTable";

import Container from '@mui/material/Container';


function List() {

  return (
    <Container>
      <Suspense fallback={"Loading..."}>
        <UserTable />
      </Suspense>
    </Container>
  )
}
export default List;