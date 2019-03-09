import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
   render() {
      const users = this.props.users.map(user => (
         <li key={user.username}>
            {user.username} {user.hometown}
         </li>
      ));
      return (
         <div>
            <p>User Count: {this.props.users.length}</p>
            <ul>{users}</ul>
         </div>
      );
   }
}

const mapStateToProps = state => {
   //  debugger;
   return { users: state.users };
};

export default connect(mapStateToProps)(Users);
