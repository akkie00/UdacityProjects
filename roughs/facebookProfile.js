/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Akshay kumar",
  friends: 225,
  messages: ["Hey", "Hello!", "What's up?", "Do you even code?"],
  postMessage: function postMessage(){
      facebookProfile.messages.push("Good bye!");
      return facebookProfile.messages;
  },
  deleteMessage: function deleteMessage(index){
      return facebookProfile.messages.splice(index,1);
    //   return delMessage;
  },
  addFriend: function(){
      facebookProfile.friends +=1;
  },
  removeFriend: function(){
      facebookProfile.friends -=1;
  }
};
console.log(facebookProfile.deleteMessage());
