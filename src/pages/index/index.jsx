import React, {Component} from 'react'
// import { View, Text } from '@tarojs/components'
import {AtTabBar, AtSearchBar} from 'taro-ui'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
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
      value: '',
      current: 0,
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <AtTabBar
          current={this.state.current}
          tabList={
            [
              {title: '待办事项', iconType: 'bullet-list', text: 'new'},
              {title: '拍照', iconType: 'camera'},
              {title: '文件夹', iconType: 'folder', text: '100', max: 99}
            ]
          }
          onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}
