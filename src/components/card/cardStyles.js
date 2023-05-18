import { StyleSheet } from 'react-native'
import { BaseColors } from '../../utils/BaseColors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
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
  placeSerachBar: {
    backgroundColor: BaseColors.lightGrey,
    height: 55,
    width: '90%',
    borderRadius: 5,
    fontSize: 15
  },
  filterIcon: {
    alignSelf: 'center',
    marginLeft: 10
  },
  modalBody: {
    height: 230,
    width: 200,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: BaseColors.white
  },
  closeIconStyle: {
    zIndex: 9999,
    padding: 10,
    position: 'absolute',
    alignSelf: 'flex-end'
  },
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 40,
    right: 0,
    shadowColor: BaseColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  filterTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
    Colors: BaseColors.lightGrey
  },
  bodyTitle: {
    fontSize: 16,
    marginTop: 5,
    Colors: BaseColors.lightGrey
  },
  listStyle: { flexDirection: 'row', marginTop: 15 },
  checkBoxStyle: {
    height: 20,
    width: 20,
    borderRadius: 4
  },
  buttonstyle: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '600',
    padding: 7,
    color: BaseColors.white,
    borderRadius: 5,
    backgroundColor: BaseColors.headerColor
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#3f2949',
    marginTop: 10
  },
  childStyle: {
    height: 300,
    width: '80%',
    backgroundColor: BaseColors.white
  },
  footer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center'
  }
})
