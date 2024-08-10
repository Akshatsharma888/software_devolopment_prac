import PropTypes from "prop-types";

function UserGreeting(props) {
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.username}</h2>;
  // } else {
  //   return <h2>Please log in</h2>;
  // }
  const welcomeMessage = <h2 className="welcome-message"> welcome {props.username}</h2>
  const loginPrompt = <h2 className="login_error">Please log in to contimue</h2>
  return (props.isLoggedIn ?  welcomeMessage : loginPrompt );
}

export default UserGreeting;

// Define propTypes for the component
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn is a required boolean
  username: PropTypes.string.isRequired, // username is a required string
};