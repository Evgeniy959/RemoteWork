import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MyInput from "./components/MyInput";
import Mylist from "./components/MyList";

const MyMain = () => {
  const isAdmin = false;
  const welcomeAdmin = <h3>Welcome Admin</h3>;
  const welcomeUser = <h3>Welcome User</h3>;
  return (
  <div>
          {isAdmin?welcomeAdmin:welcomeUser}
          <Header/>
          <Header/>
          <Header/>
          <MyInput/>
          <Mylist/>
  </div>
  );
}

ReactDOM.render(<MyMain/>, document.getElementById('root'));