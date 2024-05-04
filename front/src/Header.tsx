import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer.tsx'
import React from 'react';

export default function Header() {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{ boxShadow: "none"}}position="static">
        <Toolbar sx={{ backgroundColor: "#ff8793" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} setOpen={setOpen}  />
    </Box>
  );
}

