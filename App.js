import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import GallerySwiper from "react-native-gallery-swiper";
import Body from './components/Body';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import FontSizes from './constants/FontSizes';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function App() {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch('https://skillzycp.com/api/UserApi/getOneOccasion/389/0')
          .then(response => response.json())
          .then((response) => {
            response = JSON.parse(response);
            setData(response);
            let imgs = [];
            for(let i = 0; i < response.img.length; i++){
              imgs = imgs.concat({uri: response.img[i]})
            }
            setImages(imgs);
            console.log(response);
          }).catch((err) => {
              console.log('fetch', err);
          });
  }, []);

  let body = (data) ? <Body data={data} /> : <Text>Loading...</Text>;
 
  return (
    <ScrollView overScrollMode="never" scrollToOverflowEnabled="true" style={styles.container}>
        <View style={styles.swiper}>
          <GallerySwiper
            images={images}
          />
          <View style={styles.fixedIcons}>
            <FontAwesomeIcon style={{paddingRight: '30%'}} color={'#333'} size={ 25 } icon={ faStar } />
            <FontAwesomeIcon color={'white'} size={ 25 } icon={ faShareAlt } />
          </View>
        </View>
        {body}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swiper: {
    height: '25%',
    backgroundColor: 'black'
  },
  fixedIcons: {
    position: 'absolute',
    top: RFPercentage(5),
    flexDirection: "row"
  }
});
