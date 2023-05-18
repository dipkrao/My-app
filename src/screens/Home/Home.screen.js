import React, { useEffect } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import styles from './Home.style'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../../components/card/CardItem'

const Home = ({ navigation }) => {
  const userDetails = useSelector(state => state.usersData)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <CardItem data={userDetails} />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home
