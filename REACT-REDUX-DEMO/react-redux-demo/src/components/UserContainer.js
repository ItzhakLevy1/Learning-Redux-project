import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

// userData and fetchUsers are distructured from the props
const UserContainer = ({ userData, fetchUsers }) => {
  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array → runs only once after initial render

  // Conditional rendering based on loading/error/data
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    userData: state.user, // Accesses state.user and stores it in userData as a prop
  };
};

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()), // Call thunk action creator
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
