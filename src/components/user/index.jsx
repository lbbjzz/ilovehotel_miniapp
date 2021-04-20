import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom'
import {View} from "@tarojs/components";
import './index.scss'
import IsLogin from "./components/isLogin";
import NotLogin from "./components/notLogin";
import {login} from "../../api/pages/login";


class User extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      isLogin: false,
      loginData: {}
    }
  }

  componentDidMount() {
    this.setState({
        loginData: JSON.parse(localStorage.getItem('loginData')),
        isLogin: JSON.parse(localStorage.getItem('loginData')) ? true : false
      }, () => {
        console.log(this.state.isLogin, 'isLogin')
      }
    )

  }


  render() {
    return (
      <View className='user-content'>
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
