import DialpadIcon from "@material-ui/icons/Dialpad";
import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { About, Counter, Home, Complex, LongText } from "../features";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, icon: HomeIcon },
  { name: "Long Text", path: "/long", component: LongText, icon: NewReleasesIcon },
  { name: "Counter", path: "/counter", component: Counter, icon: DialpadIcon },
  { name: "Complex", path: "/complex", component: Complex, icon: ExtensionOutlinedIcon },
  { name: "About", path: "/about", component: About, icon: InfoIcon },
];
