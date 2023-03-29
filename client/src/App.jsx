import React from "react"
import { CssBaseline, Grid } from '@mui/material'
import Header from "./Components/Header/Header"
import List from "./Components/List/List"
import Map from "./Components/Map/Map"

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Header />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>

      </Grid>

    </div>
  )
}

export default App
