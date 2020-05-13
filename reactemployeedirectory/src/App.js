import React, { Component } from 'react';
import './App.css';
import employees from './employeeInfo.json';
import FriendCard from './components/FriendCard';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  searchTerm = event => {
    console.log(event.target.value);
    if(event.target.value === "" || event.target.value === " "){
      console.log("something");
      this.setState({employees})
    } else {
      console.log("somethingeEsse");
      const filteredEmployees = this.state.employees.filter(employees => employees.occupation.includes(event.target.value));
      this.setState({employees: filteredEmployees});
    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <p>some text</p>
      <input type= "text" onChange= {this.searchTerm} />
      <p>
        {this.state.employees.map(employees => (
        <FriendCard
          removeFriend={this.removeFriend}
          id={employees.id}
          key={employees.id}
          name={employees.name}
          image={employees.image}
          occupation={employees.occupation}
          location={employees.location}
        />
      ))}
      </p>
      </div>
      //  <Wrapper>
      //    <Title>employeess List</Title>
      //   {this.state.employeess.map(friend => (
      //     <FriendCard
      //       removeFriend={this.removeFriend}
      //       id={friend.id}
      //       key={friend.id}
      //       name={friend.name}
      //       image={friend.image}
      //       occupation={friend.occupation}
      //       location={friend.location}
      //     />
      //   ))}
      // </Wrapper>
    );
  }
}

export default App;
