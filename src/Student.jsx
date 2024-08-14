import Proptypes from "prop-types";
function Student(props) {
  const Styles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    backgroundColor: "#21026f57",
    color: "white",
    padding: "10px",
    margin: "5px",
    border: "1px solid black",
    borderRadius: "10px",
  };
  return (
    <div className="student" style={Styles}>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  isStudent: Proptypes.bool,
};
Student.defaultProps = {
  name: "Muhammad",
  age: 24,
  isStudent: false,
};
export default Student;
