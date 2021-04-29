import DialpadIcon from "@material-ui/icons/Dialpad";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { About } from "../components/About/About";
import { Home } from "../components/Home/Home";
import { LongText } from "../components/Placeholder/LongText";
import { Counter } from "../features/counter/Counter";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, icon: HomeIcon },
  { name: "Long Text", path: "/long", component: LongText, icon: NewReleasesIcon },
  { name: "Counter", path: "/counter", component: Counter, icon: DialpadIcon },
  { name: "About", path: "/about", component: About, icon: InfoIcon },
];
