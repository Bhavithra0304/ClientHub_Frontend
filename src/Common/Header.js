import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
        <NavLink><img src="./images/CMS.png" alt="" /></NavLink>
        <div className="links">
          {/* <NavLink to={"/"}>Welcome</NavLink> */}
          <NavLink to={"/welcome"}>Welcome</NavLink>
           <NavLink to={"/view"}>View</NavLink>
           <NavLink to={"/add"}>Add</NavLink> 
          <NavLink to={"/dashboard"}>DashBoard</NavLink> 
          <NavLink to={"/contact"}>Contact</NavLink> 

        </div>
      </header>
    );
};
export default Header;