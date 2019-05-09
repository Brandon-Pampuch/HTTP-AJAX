
import React from 'react';
import './App.css';
import axios from 'axios'
import FriendsList from './components/friends_list/FriendsList'




class Friends extends React.Component {
  state = { 
    friends:[]
   }

   componentDidMount() {
     axios.get('http://localhost:5000/friends')
     .then(res =>{
       const friends = res
       this.setState({friends:friends})
       console.log(this.state.friends)
     })
   }

   addNewFriend(friend) {
     axios.post("http://localhost:5000/friends/",friend)
     .then(res => {
        console.log(res)
     }).catch(err =>{
       console.log(err)
     })
   }


  render() { 
        if(!this.state.friends.data){
          return <h1>Loading...</h1>
        }else{
    return ( 
      <div>
     <FriendsList friends={this.state.friends} addNewFriend={this.addNewFriend}/>
    
       </div>
     )}
    
  }
}
 
export default Friends;
