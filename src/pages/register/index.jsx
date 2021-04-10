import React, {Component} from 'react';
import Taro from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import {AtButton, AtForm, AtInput, AtToast} from "taro-ui";
import {getEmailCode} from "../../api/pages/register";
import logo from "../../static/image/logo.png";
import Code from "../../components/code/code-wechat";
import './index.scss'

class Register extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      userInfo: {
        email: '',
      },
      code: '',
      isOpened: false,
      text: '',
      status: '',
    }
  }


  emailChange(val) {
    let email = Object.assign({}, this.state.userInfo, {email: val});
    this.setState({
      userInfo: email
    })
  }

  getCodeFromChild(val) {
    console.log(val, 'val')
    this.setState({code: val}, () => {
      console.log(this.state.code, 'callback');
    })
  }

  sendCode() {
    if (this.state.code === '') {
      this.setState({
        isOpened: true,
        text: '请输入验证码!',
        status: 'error'
      })
    } else {
      getEmailCode(this.state.userInfo.email, this.state.code).then(res => {
        console.log(res, 'emailCode')
        if (res.data.code === 80200) {
          this.setState({
            isOpened: true,
            text: res.data.msg,
            status: 'success'
          })
        } else {
          this.setState({
            isOpened: true,
            text: res.data.msg,
            status: 'error'
          })
        }
      })
    }
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
              title='邮箱：'
              type='email'
              placeholder='请输入邮箱'
              value={this.state.userInfo.email}
              onChange={this.emailChange.bind(this)}
            />
            <Code getCode={this.getCodeFromChild.bind(this)}></Code>
            <AtButton type='primary' size='small' onClick={this.sendCode.bind(this)}>发送验证码</AtButton>
            <View className='form-footer'>
              <Text onClick={() => {
                Taro.redirectTo({url: '/pages/reset/index'})
              }}
              >忘记密码？</Text>
              <Text onClick={() => {
                Taro.redirectTo({url: '/pages/login/index'})
              }}
              >已有帐号,前去登录</Text>
            </View>
          </View>
        </AtForm>

        {/*Toast提示*/}
        <AtToast duration={2500} isOpened={this.state.isOpened} text={this.state.text}
          status={this.state.status}
        ></AtToast>
      </View>
    );
  }
}

export default Register
