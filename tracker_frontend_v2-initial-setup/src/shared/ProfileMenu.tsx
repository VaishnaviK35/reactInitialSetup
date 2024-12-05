import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { deepPurple } from "@mui/material/colors";

const AccountMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Balasubramaniyan V">
        <IconButton
          onClick={handleMenuToggle}
          size="small"
          aria-controls={isOpen ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <Avatar>BV</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpen}
        onClose={handleMenuToggle}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleMenuToggle}>
          <Avatar /> Balsubramaniayan V
        </MenuItem>
        <MenuItem onClick={handleMenuToggle}>
          <Avatar /> Admin
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuToggle}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
