import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const FormWrapper = styled.form`
  text-align: center;
  border: 1px solid black;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 30px;
  font-size: 16px;
  button {
    display: block;
    margin: 20px auto;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 16px;
  }
`;

// const WrapperDiv = styled.div`
//   text-align: left;
//   display: flex;
//   font-size: 12px;
//   padding-left: 100px;
// `;

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: this.props.activeFriend
      }
    };
  

  textChangeHandler = event => {
    const text = event.target.value;
    this.setState({
      ...this.state,
      friend: {
        ...this.state.friend,
        [event.target.name]: text
      }
    });

  };



  updateFriend = () => {
    this.props.updateFriend(this.state.friend); // need to add route to collect url id
  };


  render() {
    console.log(this.props.friend);
    return (

        <FormWrapper
      
          placeholder="type here"
          type="text"
          onSubmit={this.updateFriend}
        >
            <p>update form</p>
          <p>name</p>
          <input
            onChange={this.textChangeHandler}
            type="text"
            // value={this.state.friend.name}
            name={"name"}
          />
          <p>age</p>
          <input
            onChange={this.textChangeHandler}
            type="text"
            // value={this.state.friend.age}
            name={"age"}
          />
          <p>email</p>
          <input
            onChange={this.textChangeHandler}
            type="text"
            // value={this.state.friend.email}
            name={"email"}
          />
          <button>Update Friend</button>
        </FormWrapper>

    );
  }
}
export default UpdateForm;



// add form

//set state to item existing data? active item?

//add route render with active item and props  app.js? index.js?

//put set state? in put app.js

//updated item.id // or pass in id

//button on click takes us to update form  use history.push (path) or  (state config obect)