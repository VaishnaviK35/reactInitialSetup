import "./App.css";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigation } from "@toolpad/core/AppProvider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTheme, StyledEngineProvider } from "@mui/material/styles";
import { Hive, PeopleAlt } from "@mui/icons-material";
import globalTheme from "./shared/Theme";

function App() {
  const theme = useTheme();
  const logo =
    theme.palette.mode === "dark" ? (
      <img src="../images/Pro1_dark.png" alt="Logo Dark" />
    ) : (
      <img src="../images/Pro1_light.png" alt="Logo Light" />
    );
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "clients",
      title: "Clients",
      icon: <DashboardIcon />,
    },
    {
      segment: "projects",
      title: "Projects",
      icon: <Hive />,
    },
    {
      segment: "users",
      title: "Users",
      icon: <PeopleAlt />,
    },
  ];

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <AppProvider
          navigation={NAVIGATION}
          branding={{
            logo: logo,
            title: "",
          }}
          theme={globalTheme}
        >
          <Outlet />
        </AppProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
