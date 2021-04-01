import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom'
import {View} from "@tarojs/components";
import './index.scss'
import IsLogin from "./components/isLogin";
import NotLogin from "./components/notLogin";


class User extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      isLogin: false
    }

  }


  render() {
    return (
      <View className='content'>
        <View className='header'>
          {
            this.state.isLogin ? <IsLogin></IsLogin> : <NotLogin></NotLogin>
          }
        </View>
      </View>
    );
  }
}

export default User
