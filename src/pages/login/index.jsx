import React, {Component} from 'react';
import Taro from '@tarojs/taro'
import {AtForm, AtInput, AtButton, AtToast} from "taro-ui";
import {Image, View} from "@tarojs/components";
import {login} from "../../api/pages/login";
import CodeWechat from "../../components/code/code-wechat";
import CodeH5 from "../../components/code/code-h5";
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
      only: '',
      // Toast组件
      open: false,
      msg: '',
      icon: '',
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

  getOnlyFromChild(val) {
    console.log(val, 'only')
    this.setState({
      only: val
    })
  }


  onSubmit() {
    login(this.state.userInfo.username, this.state.userInfo.password, this.state.code, this.state.only
    ).then(res => {
      console.log(res.data.code, 'login')
      if (res.data.code === 80200) {
        this.setState({
          open: true,
          msg: res.data.msg,
          icon: 'check-circle',
        })
        localStorage.setItem('loginData', JSON.stringify(res.data.data))
        Taro.navigateTo({
          url: '/pages/index/index'
        })
      } else {
        this.setState({
          open: true,
          msg: res.data.msg,
          icon: 'close-circle'
        })
      }
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

            {/*微信小程序验证码组件*/}
            {/*<CodeWechat getCode={this.getCodeFromChild.bind(this)}></CodeWechat>*/}

            {/*H5验证码组件*/}
            <CodeH5 getCode={this.getCodeFromChild.bind(this)} getOnly={this.getOnlyFromChild.bind(this)}></CodeH5>

            <AtButton type='primary' size='small' onClick={this.onSubmit.bind(this)}>登录</AtButton>

            {/*Toast提示组件*/}
            <AtToast isOpened={this.state.open} text={this.state.msg} icon={this.state.icon}></AtToast>

            {/*注册/忘记密码*/}
            {/*<View className='form-footer'>*/}
            {/*  <Text onClick={() => {*/}
            {/*    Taro.redirectTo({url: '/pages/reset/index'})*/}
            {/*  }}*/}
            {/*  >忘记密码？</Text>*/}
            {/*  <Text onClick={() => {*/}
            {/*    Taro.redirectTo({url: '/pages/register/index'})*/}
            {/*  }}*/}
            {/*  >前去注册</Text>*/}
            {/*</View>*/}
          </View>
        </AtForm>
      </View>
    );
  }
}

export default Login
