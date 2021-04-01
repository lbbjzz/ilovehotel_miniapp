import React, {Component} from 'react';
import Taro from '@tarojs/taro'
import {AtForm, AtInput, AtButton} from "taro-ui";
import {Image, Text, View} from "@tarojs/components";
import {login} from "../../api/pages/login";
import Code from "../../components/code";
import './index.scss'
import logo from '../../static/image/logo.png'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        password: '',
      },
      code: '',
    }
  }

  componentDidMount() {

  }


  usernameChange(val) {
    // console.log(val)
    let username = Object.assign({}, this.state.userInfo, {username: val});
    this.setState({
      userInfo: username
    })
    // console.log(this.state.userInfo, 'userInfo')
  }

  pwdChange(val) {
    // console.log(val, 'val')
    let password = Object.assign({}, this.state.userInfo, {password: val});
    this.setState({
      userInfo: password
    })
    // console.log(this.state.userInfo, 'userInfo')
  }

  getCodeFromChild(val) {
    console.log(val, 'val')
    this.setState({code: val}, () => {
      console.log(this.state.code, 'callback');
    })
  }

  onSubmit() {
    login(this.state.userInfo.username, this.state.userInfo.password, this.state.code
    ).then(res => {
      console.log(res)
    })
  }


  render() {
    return (
      <View className='content'>
        <Image className='logo' src={logo} />
        <AtForm className='login-form'>
          <View className='form-form'>
            <AtInput
              required
              name='username'
              title='账号：'
              type='text'
              placeholder='请输入账号'
              value={this.state.userInfo.username}
              onChange={this.usernameChange.bind(this)}
            />

            <AtInput
              required
              name='password'
              title='密码：'
              type='password'
              placeholder='请输入密码'
              value={this.state.userInfo.password}
              onChange={this.pwdChange.bind(this)}
            />
            <Code getCode={this.getCodeFromChild.bind(this)}></Code>
            <AtButton type='primary' size='small' onClick={this.onSubmit.bind(this)}>登录</AtButton>
            <View className='form-footer'>
              <Text onClick={() => {
                Taro.redirectTo({url: '/pages/reset/index'})
              }}
              >忘记密码？</Text>
              <Text onClick={() => {
                Taro.redirectTo({url: '/pages/register/index'})
              }}
              >前去注册</Text>
            </View>
          </View>
        </AtForm>
      </View>
    );
  }
}

export default Login
