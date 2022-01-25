import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "close" : "Add"}
        onClick={onAdd}
      />
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
