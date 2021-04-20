import React, {Component} from 'react';
import {Image, View} from "@tarojs/components";
import {getCodeApi} from "../../api/components/code/code.h5";
import {AtInput} from "taro-ui";
import './index.scss'


class CodeH5 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      code: '',
      codeImg: '',
      only: ''
    }
  }

  componentDidMount() {
    this.getCodeM()
  }

  getCodeM() {
    getCodeApi().then(res => {
      console.log(res.data, 'code')
      let imageOC = window.URL.createObjectURL(res.data)
      this.setState({
        codeImg: imageOC,
        only: res.headers.only
      }, () => {
        console.log(this.state.codeImg, 'codeImg')
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
            this.props.getOnly(this.state.only)
          }}
        >
          <Image
            style='width: 3.09333rem;height: 1.28rem;margin-right: 4vw;'
            onClick={() => {
              this.getCodeM()
            }} src={this.state.codeImg}
          />
        </AtInput>
      </View>
    );
  }
}

export default CodeH5
