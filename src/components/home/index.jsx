import React, {Component} from 'react';
import {AtCard} from "taro-ui";
import {View, Swiper, SwiperItem, Image, Text} from '@tarojs/components'
import './index.scss'
import {getCarousel, getIntro, getCity, getRoomType} from "../../api/components/home";

class Home extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      imageList: [],
      introList: [],
      cityList: [],
      roomTypeList: [],
    }
  }

  componentWillMount() {
    this.getCarouselM()
    this.getIntroM()
    this.getCityListM()
    // this.getRoomListM()
    this.getRoomTypeListM()
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

  getCityListM() {
    getCity().then(res => {
      console.log(res, 'City')
      this.setState({cityList: res.data.data.records})
    })
  }

  // getRoomListM(){
  //   getRoom().then(res => {
  //     console.log(res, 'Room')
  //     this.setState({roomList: res.data.data})
  //   })
  // }

  getRoomTypeListM() {
    getRoomType().then(res => {
      console.log(res, 'RoomType')
      this.setState({roomTypeList: res.data.data})
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
            this.state.cityList.map(item => {
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
                <Text className='floor-name'>{item.floorName}</Text>
                <Text className='floor-content'>{item.content}</Text>
              </AtCard>
            })
          }
        </View>

        {/*热门预定*/}
        <Text className='room'>热门预定</Text>
        <View className='room-list'>
          {
            this.state.roomTypeList.map(item => {
              return <AtCard key={item.roomTypeName}>
                <Image className='roomImg' src={item.url[0]} />
                <Text className='room-type'>{item.roomTypeName}</Text>
                <View className='room-intro'>
                  <Text className='room-price'>￥{item.price}</Text>
                  <Text className='room-order'>立即预定</Text>
                </View>
              </AtCard>
            })
          }
        </View>

        <Text className='footer'>暂无更多</Text>
      </View>
    );
  }
}

export default Home;
