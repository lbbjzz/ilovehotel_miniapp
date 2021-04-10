import React, {Component} from 'react';
import Taro from '@tarojs/taro'
import {View, Image} from "@tarojs/components";
import {AtInput} from "taro-ui";
import {getCodeApi} from "../../api/components/code/code.wechat";

class CodeWechat extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      code: '',
      codeImg: ''
    }
  }

  componentDidMount() {
    this.getCodeM()
  }

  getCodeM() {
    getCodeApi().then(res => {
      console.log(res.data, 'res')
      let base64 = Taro.arrayBufferToBase64(res.data)
      base64 = 'data:image/jpeg;base64,' + base64
      console.log(base64, 'image')
      this.setState({
        codeImg: base64
      })
    })
  }


  render() {
    return (
      <View>
        <AtInput
          title='验证码：'
          type='text'
          maxLength='4'
          placeholder='验证码'
          value={this.state.code}
          onBlur={(val) => {
            this.props.getCode(val)
          }}
        >
          <Image onClick={() => {
            this.getCodeM()
          }} src={this.state.codeImg}
          />
        </AtInput>
      </View>
    );
  }
}

export default CodeWechat
