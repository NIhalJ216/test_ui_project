import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { PATHS } from "../../Router/Paths";

export const menu = [
  { name: "Home", icon: <HomeIcon />, url: PATHS.HOME },
  { name: "About", icon: <InfoIcon />, url: PATHS.ABOUT },
];
