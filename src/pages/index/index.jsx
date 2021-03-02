import React, {Component} from 'react'
import {View, Text, Swiper, SwiperItem} from '@tarojs/components'
import {AtTabBar, AtSearchBar, AtNavBar} from 'taro-ui'

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
      title: '首页'
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
       {/*头部*/}
        <AtNavBar
          className={"home-navbar"}
          color='#ececec'
          title={this.state.title}
        />
        {/*搜索*/}
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        {/*轮播图*/}
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay={true}>
          <SwiperItem>
            <View className='demo-text-1'>焦</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>猪</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>猪</View>
          </SwiperItem>
        </Swiper>
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
      </div>
    )
  }
}
