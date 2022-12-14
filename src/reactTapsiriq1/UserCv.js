import React, { Component } from "react";

import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";

class UserCv extends Component {
  render() {
    return (
      <div className="UserCv">
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
    );
  }
}
export default UserCv;
