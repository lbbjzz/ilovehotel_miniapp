import React, {Component} from 'react';
import {View} from "@tarojs/components";
import {AtAvatar} from "taro-ui";
import logo from "../../../static/image/logo-pic.png";

class IsLogin extends Component {
  render() {
    return (
      <View>
        <AtAvatar image={logo} circle='true'></AtAvatar>
      </View>
    );
  }
}

export default IsLogin;
