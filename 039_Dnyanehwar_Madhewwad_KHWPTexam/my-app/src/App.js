import axios from "axios";
import { useEffect, useState } from "react";

export default function app(){
  return(
    <>
      < Mycomponent />
    </>
  );
}

function Mycomponent(){
  const[message, setMessage]=useState("");
  const[messageList, setMessageList]=useState([]);
  
  const processMessage = (e) =>
  {
    const newMessage=e.target.value;
    setMessage(newMessage);
  };

const sendMsg=() =>
{
 console.log(message);
 const newMessageList =[message, ...messageList];
 setMessageList(newMessageList);
 setMessage("");
};

return(
  <div>
    <h1 className="bg-black text-light p-3 text-center">MyChatapp by Dnyaneshwar Madhewad 210940320039</h1>
  <div>
    
    <input
     className="form-control border-1 border-dark p-2 form-control-lg"
     input="text"
     placeholder="Lets chat here...."
     value={message}
     onChange={processMessage}
     />
     
      <input
     className="form-control btn btn-primary border-1 border-dark p-2 form-control-lg"
     input="button "
      value="send"
     onClick={sendMsg}
     />
   
   {messageList.map((item, index) =>(
     <div key={index}>{item}</div>
   ))

   }

  </div>
  </div>
);
}