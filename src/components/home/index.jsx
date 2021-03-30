import React, {Component} from 'react';
import {AtCard} from "taro-ui";
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import './index.scss'
import {getCarousel, getIntro , getCity  , getRoom} from "../../api/components/home";

class Home extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      imageList: [],
      introList: [],
      cityList: [],
      roomList: [],
    }
  }

  componentWillMount() {
    this.getCarouselM()
    this.getIntroM()
    this.getCityListM()
    this.getRoomeListM()
  }

  getCarouselM() {
    getCarousel().then(res => {
      console.log(res, ' Carousel')
      this.setState({imageList: res.data.data})
    })
  }

  getIntroM() {
    getIntro().then(res => {
      console.log(res, 'Intro')
      this.setState({introList: res.data.data})
    })
  }

  getCityListM(){
    getCity().then(res => {
      console.log(res, 'City')
      this.setState({cityList: res.data.data.records})
    })
  }

  getRoomeListM(){
    getRoom(1).then(res => {
      console.log(res, 'Room')
      this.setState({roomList: res.data.data})
    })
  }

  render() {
    return (
      <View>
        {/*轮播图*/}
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          interval={3000}
          autoplay='true'
        >
          {/*组件循环*/}
          {
            this.state.imageList.map(item => {
                return <SwiperItem key={item.id}>
                  <View className='demo-text-1'>
                    <Image className='home-swiper' mode='scaleToFill' src={item.pictureUrl} />
                  </View>
                </SwiperItem>
              }
            )
          }
        </Swiper>

        {/*城市列表*/}
        <Text className='city-name'>已开通城市</Text>
        <View className='city-list-row'>
          {
            this.state.cityList.map(item =>{
              return <View key={item.id} className='city-list'>
                  <Image className='city-list-img' mode='scaleToFill' src={item.imageUrl} />
                  <Text className='city-list-name'>{item.cityName}</Text>
              </View>
            })
          }
        </View>

        {/*酒店简介*/}
        <Text className='intro-title'>酒店简介</Text>
        <View className='intro'>
          {
            this.state.introList.map(item => {
              return <AtCard key={item.floorId}>
                <Image className='introImg' src={item.url} />
                <View>
                  {item.floorName}
                </View>
              </AtCard>
            })
          }
        </View>

        {/*热门预定*/}
        <Text className='room'>热门预定</Text>
        <View className='roome-list'>
          {
            this.state.roomList.map(item => {
              return <AtCard key={item.roomId}>
                  <image className='roomImg' src={item.url[0]} />
              </AtCard>
            })
          }
        </View>
      </View>
    );
  }
}

export default Home;
