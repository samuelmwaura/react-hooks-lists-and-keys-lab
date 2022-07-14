import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkList = links.map((link,index)=>{
    return <a href={'#'+link} key={index}>{link}</a>
  });

  return <nav>{linkList}</nav>;
}

export default NavBar;
