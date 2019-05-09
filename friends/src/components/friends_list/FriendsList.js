import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  text-align: center;
  border: 1px solid black;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 30px;
  button {
    display: block;
    margin: 20px auto;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 16px;
  }
`;

const WrapperDiv = styled.div`
  text-align: center;
`;

class FriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  textChangeHandler = event => {
    const text = event.target.value;
    this.setState({
      ...this.state,
      friend: {
        ...this.state.friend,
        [event.target.name]: text
     
      }
    });
    console.log("age",this.state.friend.age);
    console.log("name",this.state.friend.name);
    console.log("email",this.state.friend.email);
  };

  addNewFriend = (event) => {
    event.preventDefault()


    this.props.addNewFriend(this.state.friend)
  }


  render() {
    return (
      <WrapperDiv>
        <h1>
          {this.props.friends.data.map((friend, index) => (
            <div key={index}>{friend.name}</div>
          ))}
        </h1>

        <FormWrapper placeholder="type here" type="text" onSubmit={this.addNewFriend}>
          <p>name</p>
          <input
            onChange={this.textChangeHandler}
            type="text"
            value={this.state.friend.name}
            name={"name"}
          />
          <p>age</p>
          <input
            onChange={this.textChangeHandler}
            type="text"
            value={this.state.friend.age}
            name={"age"}
          />
          <p>email</p>
          <input 
          onChange={this.textChangeHandler}
          type="text" 
          value={this.state.friend.email}
          name={"email"}
          />
          <button>Add Friend</button>
        </FormWrapper>
      </WrapperDiv>
    );
  }
}
export default FriendList;
