// conditional rendering: allows you to control what
// gets rendered to the screen based on certain conditions
// (show, hide or change components)
import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage = <h2 className = "welcome-message">
                            Welcome back, {props.username}
         </h2> 
    const loginPrompt = <h2 className = "login-prompt">
                            Please Log in to continue
         </h2>

    return(
       props.isLoggedIn ? 
         welcomeMessage 
                        : loginPrompt
    );
    
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
        username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
        username: "Guest"
}

export default UserGreeting;

