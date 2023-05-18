import { StyleSheet } from 'react-native'
import { BaseColors } from '../../utils/BaseColors'

export default StyleSheet.create({
  SafeAreaView1: { backgroundColor: BaseColors.headerColor, flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: BaseColors.white },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontSize: 18,
    color: BaseColors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10
  },
  direction: {
    flexDirection: 'row'
  },
  mainFrame: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    borderColor: BaseColors.darkGrey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  imgStyle: {
    height: 140,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    Colors: BaseColors.lightGrey
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '700',
    Colors: BaseColors.darkGrey
  },
  col1: {
    width: '40%',
    marginRight: 10
  },
  col2: { width: '60%', alignSelf: 'flex-start' },
  detail: {
    padding: 5,
    paddingBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  backButton: {
    fontWeight: '600',
    padding: 7,
    color: BaseColors.white,
    borderRadius: 5,
    backgroundColor: BaseColors.headerColor
  }
})
