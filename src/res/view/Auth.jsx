import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCards } from 'swiper/modules';
import { Box } from '@mui/material';
import Login from './auth/Login';
import Register from './auth/Register';
import QrCodeAuth from './auth/QrCodeAuth';
import Footer from './Footer';

const Auth = () => {

    return (
      <>
      <Box id='app'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Login/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Register/>
          </SwiperSlide>

          <SwiperSlide>
            <QrCodeAuth/>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Footer/>
      </>
  )
  ;
};
export default Auth;
