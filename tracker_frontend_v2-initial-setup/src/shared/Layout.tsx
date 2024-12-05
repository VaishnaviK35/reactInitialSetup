import { Outlet } from "react-router-dom";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import NofificationMenu from "./NofificationMenu";
import AccountMenu from "./ProfileMenu";

export default function Layout() {
  return (
    <DashboardLayout
      slots={{
        toolbarActions: ToolbarActionsSearch,
      }}
    >
      <Outlet />
    </DashboardLayout>
  );
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <div>
        <Tooltip title="Search" enterDelay={1000}>
          <div>
            <IconButton
              type="button"
              aria-label="search"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Tooltip>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton type="button" aria-label="search" size="small">
                  <SearchIcon />
                </IconButton>
              ),
              sx: { pr: 0.5 },
            },
          }}
          sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
        />
      </div>
      <NofificationMenu /> <ThemeSwitcher /> <AccountMenu />
    </Stack>
  );
}
