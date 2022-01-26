import Button from "./Button";
// Look at the route(link) we are currently on and make changes to the rendered page based on it.
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "close" : "Add"}
          onClick={onAdd}
        />
      )}
      {/* <Button color="red" text="Remove" /> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Using Props",
};

// CSS Styling in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
