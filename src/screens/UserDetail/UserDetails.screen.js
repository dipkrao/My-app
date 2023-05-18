import React, { useEffect } from 'react'
import { SafeAreaView, View, StatusBar, Text, Image } from 'react-native'
import styles from './UserDetails.styles'
import { BaseColors } from '../../utils/BaseColors'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../stores/users.reducer'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserDetails = ({ navigation, route }) => {
  const { id } = route.params
  const users = useSelector(selectUsers)
  const user = users.find(u => u.id === id)
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={{ backgroundColor: BaseColors.headerColor }}>
          <Text style={styles.text}>User Details</Text>
        </View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.mainFrame}>
              <View style={styles.col1}>
                <Image source={{ uri: user?.avatar }} style={styles.imgStyle} />
              </View>
              <View style={styles.col2}>
                <View style={styles.detail}>
                  <Text style={styles.title}>User Id: </Text>
                  <Text numberOfLines={1} style={styles.subtitle}>
                    {user?.id}
                  </Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>First Name: </Text>
                  <Text numberOfLines={1} style={styles.subtitle}>
                    {user?.first_name}
                  </Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>Last_Name: </Text>
                  <Text numberOfLines={1} style={styles.subtitle}>
                    {user?.last_name}
                  </Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>Email: </Text>
                  <Text numberOfLines={1} style={styles.subtitle}>
                    {user?.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

export default UserDetails
