import React, { useState, SyntheticEvent } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Notifications, Palette } from "@mui/icons-material";
import theme from "./Theme";

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<number>(0);
  const isOpen = Boolean(anchorEl);

  const menuPaperProps = {
    paper: {
      sx: {
        elevation: 0,
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
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
    },
  };

  // Sample data for notifications
  const notifications = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    message: `Notification ${i + 1}`,
  }));

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Notifications">
        <IconButton
          onClick={handleMenuToggle}
          size="small"
          aria-controls={isOpen ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <Notifications color="primary" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="notification-menu"
        open={isOpen}
        onClose={handleMenuToggle}
        slotProps={menuPaperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="notification tabs"
          sx={{
            "& .MuiTab-root": { fontWeight: "bold", color: "#555", flex: 1 },
            "& .Mui-selected": { color: "#1976d2" },
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Tab label="Read" />
          <Tab label="Unread" />
        </Tabs>

        {/* Conditionally render content based on selected tab */}
        {value === 0 && (
          <TabPanel>
            {notifications.map((notification, index) => (
              <Box key={notification.id}>
                <MenuItem>{notification.message}</MenuItem>
                {index < notifications.length - 1 && <Divider />}
              </Box>
            ))}
          </TabPanel>
        )}

        {value === 1 && (
          <TabPanel>
            {notifications.map((notification, index) => (
              <Box key={notification.id}>
                <MenuItem>{notification.message}</MenuItem>
                {index < notifications.length - 1 && <Divider />}
              </Box>
            ))}
          </TabPanel>
        )}
      </Menu>
    </Box>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
}

function TabPanel({ children }: TabPanelProps): JSX.Element {
  const ITEM_HEIGHT = 48;
  return (
    <Box
      sx={{
        p: 2,
        maxHeight: ITEM_HEIGHT * 4.5,
        width: "40ch",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f0f0f0",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "4px",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default NotificationMenu;
