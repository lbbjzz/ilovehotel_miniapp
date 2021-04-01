import React, {Component} from 'react';
import {Text, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";

class NotLogin extends Component {
  constructor(props) {
    super(props);
  }

  toLogin() {
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }

  render() {
    return (
      <View>
        <Text className='title'>登录iLoveHotel,开启您的旅程</Text>
        <AtButton type='primary' size='small' className='login-button'
          onClick={this.toLogin.bind(this)}
        >登录/注册</AtButton>
      </View>
    );
  }
}

export default NotLogin
