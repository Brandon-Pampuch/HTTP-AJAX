import React from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/friends_list/FriendsList";
import UpdateForm from "./components/updateForm/UpdateForm"
import { Route,} from "react-router-dom/"


class Friends extends React.Component {
  state = {
    friends: [],
    activeFriend: {}
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
    .then(res => {
      const friends = res;
      this.setState({ friends: friends });
      console.log(this.state.friends);
    
    });
  }

  addNewFriend = (friend) => {
    axios
      
      .post("http://localhost:5000/friends/", friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateFriend = (event,updatedFriend) => {
    console.log("update freind",updatedFriend)
    event.preventDefault()
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        console.log("update",res)
        this.setState({ friends: res})
        this.props.history.push("/")
        console.log("update", res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        const friends = res;
        this.setState({ friends: friends });
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  //helper functions

  setUpdateForm = friend => {
  
    this.setState({
      ...this.state,
      activeFriend:friend})
    this.props.history.push('/updateForm')
  }

  render() {
    if (!this.state.friends.data) {
      return <h1>Loading...</h1>;
    } else {
 
      return (
     
        <>
        <Route exact path="/" render={(props)=>     
        <FriendsList
          {...props}
          friends={this.state.friends}
          addNewFriend={this.addNewFriend}
          deleteFriend={this.deleteFriend}
          updateFriend={this.updateFriend}
          setUpdateForm={this.setUpdateForm}
          />
        
        }/>
        <Route path="/updateForm" render={(props)=>     
        <UpdateForm {...props} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend}/>
         
        
          
        
        }/>
        </>
      )
    }
  }
}

export default Friends;
