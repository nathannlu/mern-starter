import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Dashboard = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(props.auth.user);
  }, [props.auth]);

  const onLogoutClick = event => {
    event.preventDefault();
    props.logoutUser();
  };

  return (
    <div>
      Welcome to dashboard
      <button onClick={onLogoutClick}>
        Logout
      </button>
    </div>
  )
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);