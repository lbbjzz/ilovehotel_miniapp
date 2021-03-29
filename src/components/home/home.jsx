import React, {Component} from 'react';
import './home.scss'
import {getCarousel} from "../../api/components/home";

// eslint-disable-next-line import/first
import {View, Swiper, SwiperItem, Image} from '@tarojs/components'


class Home extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      imageList: [],
    }
  }

  componentWillMount() {
    this.getCarouselM()
  }

  getCarouselM() {
    getCarousel().then(res => {
      console.log(res, ' Carousel')
      this.setState({imageList: res.data.data})
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
      </View>
    );
  }
}

export default Home;
