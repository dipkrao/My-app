import React, { useEffect, useState } from 'react'
import { Image, View, Text, Modal, ActivityIndicator } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import cardStyles from './cardStyles'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { debounce } from '../../utils/misc'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper'
import { BaseColors } from '../../utils/BaseColors'
import { filterOption } from '../../assets/data/FilterOption'
import CheckBox from '../checkbox/Checkbox'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUsers,
  selectUsers,
  selectLoading,
  page
} from '../../stores/users.reducer'

function CardItem(props) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // const userDetails = useSelector(state => state.usersData)
  const [dataList, setDataList] = useState([])
  const users = useSelector(selectUsers)
  const loading = useSelector(selectLoading)
  const [page, setPage] = useState(1)
  const [selectedFilter, setSelectedFilter] = useState()
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenuSwitch = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    setDataList(props?.data?.userData?.data)
  }, [props.data])

  const handleLoadMore = () => {
    if (props?.data?.userData?.page !== props?.data?.userData?.total_pages) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchUsers({ page: page, per_page: 4 }))
    }
  }, [page])

  const onChange = debounce(async val => {
    searchDetails(val)
  })

  const searchDetails = async (val = '') => {
    const text = val.toLowerCase()
    const data = props?.data.filter(data => {
      return (
        data?.first_name.toLowerCase().match(text) ||
        data?.last_name.toLowerCase().match(text)
      )
    })
    setDataList(data)
  }

  const sortUsersList = () => {
    const temp = [...dataList]
    if (selectedFilter === 0) {
      let sortedByID = temp.sort((a, b) =>
        Number(a?.id) > Number(b?.id) ? 1 : -1
      )
      setDataList(sortedByID)
    } else if (selectedFilter == 1) {
      const sortedByName = temp.sort((a, b) => {
        return a?.first_name.localeCompare(b?.first_name)
      })
      setDataList(sortedByName)
    } else if (selectedFilter == 2) {
      const sortedByEmail = temp.sort((a, b) => {
        return a?.email.localeCompare(b?.email)
      })
      setDataList(sortedByEmail)
    }
    setIsMenuVisible(false)
  }

  const onPress = item => {
    navigation.navigate('UserDetails', { id: item?.item?.id })
  }

  const renderFooter = () => {
    return loading ? (
      <View style={cardStyles.footer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null
  }

  function renderItem(item) {
    return (
      <>
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={cardStyles.mainFrame}>
            <View style={cardStyles.col1}>
              <Image
                source={{ uri: item?.item?.avatar }}
                style={cardStyles.imgStyle}
              />
            </View>
            <View style={cardStyles.col2}>
              <View style={cardStyles.detail}>
                <Text style={cardStyles.title}>User Id: </Text>
                <Text numberOfLines={1} style={cardStyles.subtitle}>
                  {item?.item?.id}
                </Text>
              </View>
              <View style={cardStyles.detail}>
                <Text style={cardStyles.title}>First Name: </Text>
                <Text numberOfLines={1} style={cardStyles.subtitle}>
                  {item?.item?.first_name}
                </Text>
              </View>
              <View style={cardStyles.detail}>
                <Text style={cardStyles.title}>Last Name: </Text>
                <Text numberOfLines={1} style={cardStyles.subtitle}>
                  {item?.item?.last_name}
                </Text>
              </View>
              <View style={cardStyles.detail}>
                <Text style={cardStyles.title}>Email: </Text>
                <Text numberOfLines={1} style={cardStyles.subtitle}>
                  {item?.item?.email}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <>
      <View style={cardStyles.direction}>
        <Searchbar
          placeholder={'search here...'}
          autoFocus
          clearIcon
          style={cardStyles.placeSerachBar}
          onChangeText={onChange}
        />
        <Feather
          style={cardStyles.filterIcon}
          name="filter"
          size={30}
          onPress={toggleMenuSwitch}
          color={BaseColors.darkGrey}
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />

      {isMenuVisible ? (
        <>
          <View style={cardStyles.modalContainer}>
            <View style={cardStyles.modalBody}>
              <CloseIcon
                name={'close'}
                size={28}
                style={cardStyles.closeIconStyle}
                color="grey"
                onPress={() => setIsMenuVisible(false)}
              />
              <View>
                <Text style={cardStyles.filterTitle}>Sort by:</Text>
                <View>
                  {filterOption.map(checkbox => (
                    <View style={cardStyles.listStyle}>
                      <CheckBox
                        style={cardStyles.checkBoxStyle}
                        checked={selectedFilter === checkbox.value}
                        onPress={() => {
                          setSelectedFilter(prev =>
                            prev === checkbox.value ? undefined : checkbox.value
                          )
                        }}
                      />
                      <Text style={cardStyles.bodyTitle}>
                        {checkbox?.title}
                      </Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity onPress={sortUsersList}>
                  <Text style={cardStyles.buttonstyle}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      ) : null}
    </>
  )
}

export default CardItem
