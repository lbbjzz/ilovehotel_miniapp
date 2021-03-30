import React, {Component} from 'react'
import {View} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import Home from "../../components/home";

// import "taro-ui/dist/style/components/button.scss" // 按需引入
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss' //全局引入
import './index.scss'


export default class Index extends Component {

  //生命周期
  // componentWillMount () { }
  //
  // componentDidMount () { }
  //
  // componentWillUnmount () { }
  //
  // componentDidShow () { }
  //
  // componentDidHide () { }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  handleClick(value) {
    console.log(value)
    this.setState({
      current: value,
    })
  }


  render() {
    return (
      <View>

        <Home></Home>
        {/*底部*/}
        <AtTabBar
          fixed
          backgroundColor='#ececec'
          tabList={
            [
              {title: '首页', iconType: 'home'},
              {title: '订单', iconType: 'bullet-list'},
              {title: '个人中心', iconType: 'user'}
            ]
          }
          current={this.state.current}
          onClick={this.handleClick.bind(this)}
        />
      </View>
    )
  }
}
