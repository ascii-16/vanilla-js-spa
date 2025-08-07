import About from "./pages/about/about.js";
import Home from "./pages/home/home.js";
import Listing from "./pages/listing/listing.js";

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/listing', name: 'listing', component: Listing }
]
