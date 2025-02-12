import { NavLink } from "react-router-dom"; // it's a replacement for <Link></Link>, but it has one special behaviour.
// className in <NavLink/> is not the regular className prop, instead it accepts a function, and that function should return the class name that should be added to the underline anchor tag element.
// now that function also automatically recieves an object from which we can de-structure the "isActive" property.it is provided by react-router-dom.
// "isActive" is a boolean, that "true" if the link is currently active and vice-versa

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
