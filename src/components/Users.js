import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {






  render() {

    const userList = this.props.users.map ( user => {
      return <li key={user.id}>{user.username}</li>
      }
    )
  return (
    <div>
      <p>{this.props.userCount} Users!</p>
      <ul>
        {userList}
      </ul>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {users: state.users,
          userCount: state.users.length}
}

export default connect(mapStateToProps)(Users);
