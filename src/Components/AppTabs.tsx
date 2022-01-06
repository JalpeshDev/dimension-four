import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputTab from './InputTab';
import DashboardTab from './DashboardTab';
import Box from '@mui/material/Box';

const AppTabs = () => {

  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="static" className="navbar">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Input" />
          <Tab label="Dashboard" />
        </Tabs>

      </AppBar>
      <Box>
        {
          tabValue == 0
            ? <InputTab />
            : <DashboardTab />
        }
      </Box>
    </>
  )
}

export default AppTabs

