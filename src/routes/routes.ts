import DialpadIcon from "@material-ui/icons/Dialpad";
import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { About } from "../features/About/About";
import { Counter } from "../features/Counter/Counter";
import { Home } from "../features/Home/Home";
import { Organism } from "../features/Organism/Organism";
import { LongText } from "../features/Placeholder/LongText";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, icon: HomeIcon },
  { name: "Long Text", path: "/long", component: LongText, icon: NewReleasesIcon },
  { name: "Counter", path: "/counter", component: Counter, icon: DialpadIcon },
  { name: "Organism", path: "/organism", component: Organism, icon: ExtensionOutlinedIcon },
  { name: "About", path: "/about", component: About, icon: InfoIcon },
];
