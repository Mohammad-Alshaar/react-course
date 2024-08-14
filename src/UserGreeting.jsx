import PropTypes from "prop-types";
function UserGreeting(props) {
  const styleLogin = {
    backgroundColor: "green",
    color: "white",
  };
  const styleNotLogin = {
    backgroundColor: "red",
    color: "white",
  };
  const Login = <h2 style={styleLogin}>Welcome {props.userName}</h2>;
  const notLogin = <h2 style={styleNotLogin}>please Login</h2>;
  return props.loggedIn ? Login : notLogin;
}
UserGreeting.propTypes = {
  loggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
UserGreeting.defaultProps = {
  loggedIn: false,
  userName: "Guest",
};
export default UserGreeting;
