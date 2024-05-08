import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import { bottomMenuItems, upperMenuItems } from "../../configs/configs";

export default function NavBar() {
  return (
    <div className={`sidebar`}>
      <div className="nav_items_container">
        {upperMenuItems.map((item) => {
          return (
            <>
              <NavLink key={item.title} to={item.link} end className={({ isActive }) => { return isActive ? 'active' : undefined }}>
                <div className={`nav_items expanded_nav_items'} ${item.position == "top" && 'top'}`}>
                  {item.icon}
                  { <span className="title">{item.title}</span>}
                  {item.badge && <span className="badge">{item.badge}</span>}
                </div>
              </NavLink>
            </>
          )
        })}
      </div>
      <div className="nav_items_container bottom">
        {bottomMenuItems.map((item, index) => {
          return (
            <>
              <Link to={item.link}>
                <div className={`nav_items expanded_nav_items}`}>
                  {item.icon}
                  {<span className="title">{item.title}</span>}
                  {item.badge && <span className="badge">{item.badge}</span>}
                </div>
              </Link>
            </>
          )
        })}
      </div>

    </div>
  );
}