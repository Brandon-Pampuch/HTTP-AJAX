import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  text-align: center;
  border: 1px solid black;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 30px;
    button{
      display: block;
      margin: 10px auto;
      padding: 10px;
      background-color: black;
      color: white;
      font-size: 16px;
    }
`;

const WrapperDiv = styled.div`
  text-align: center;
`;

const Friends = props => {
  return (
    <WrapperDiv>
      <h1>
        {props.friends.data.map(friend => (
          <div>{friend.name}</div>
        ))}
      </h1>

      <FormWrapper placeholder="type here" type="text" onSubmit>
        <p>id</p>
        <input type="text" />
        <p>Name</p>
        <input />
        <p>image</p>
        <input />
        <p>email</p>
        <input />
        <button>Add Friend</button>
      </FormWrapper>
    </WrapperDiv>
  );
};

export default Friends;
