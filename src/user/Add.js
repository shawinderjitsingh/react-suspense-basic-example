import React, { useEffect, useState } from "react";

import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function AddUser() {
  const [data, setdata] = useState([])
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [country, setcountry] = useState("")
  const [state, setstate] = useState("")
  const [address, setaddress] = useState("")
  const [tandc, settandc] = useState(false)

  const [btnText, setbtnText] = useState("Submit")

  const submit = (e) => {
    e.preventDefault();
    if (btnText === "Submit") {
      fetch('http://localhost:8080/Users/', {
        method: 'POST',
        body: JSON.stringify({
          id: Math.random().toString(16).slice(2),
          name: name,
          country: country,
          state: state,
          address: address,
          tandc: tandc
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        alert("Record inserted")
        resetform();
      })
    }
    else {
      fetch('http://localhost:8080/Users/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          country: country,
          state: state,
          address: address,
          tandc: tandc
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        alert("Record updated")
        resetform();
      })
    }

  }
  const resetform = () => {
    setaddress(""); setname(""); setcountry(""); setstate(""); settandc(false); setbtnText("Submit");
  }

  return (
    <div>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h5"><center>Add new User</center></Typography>
        <form onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={name} name="name" onChange={(e) => setname(e.target.value)}
                label="Name"
                fullWidth

                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={address} name="address" onChange={(e) => setaddress(e.target.value)}
                label="Address"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={state} name="state" onChange={(e) => setstate(e.target.value)}
                label="State"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select required
                  labelId="demo-simple-select-label"
                  name="country" value={country} onChange={(e) => setcountry(e.target.value)}
                  label="Country"
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"USA"}>USA</MenuItem>
                  <MenuItem value={"Canada"}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormGroup>
                <FormControlLabel required control={<Checkbox />} name="tandc" onChange={(e) => settandc(e.target.checked)} label="Term & condition" />
              </FormGroup>
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" value={btnText}>Submit</Button>
        </form>
      </Container>
    </div>
  )
}
export default AddUser;