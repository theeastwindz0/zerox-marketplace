import React from "react";
const navigationContext = React.createContext({
  buttons: [
    { title: "LAPTOP", location: "/laptop" },
    { title: "MOBILE", location: "/mobile" },
    { title: "TABLET", location: "/tablet" },
    { title: "AIRPORDS", location: "/airpords" },
    { title: "WATCH", location: "/watch" },
    { title: "ACCESSORIES", location: "/accessories" },
    { title: "SUPPORT", location: "/support" },
  ],
});
export default navigationContext;