import {StyleSheet} from 'react-native';
import Common from '@Common';

export default StyleSheet.create({
  headerTextInput: {
    backgroundColor: Common.lightGray,
    width: '100%',
    height: 40,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 5,
    paddingLeft: 30,
  },
  headerWrapperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerMiddleWrapper: {
    width: '70%',
    position: 'relative',
  },
  locationIcon: {
    position: 'absolute',
    left: 2,
    top: 7,
    color: Common.grayShadowColor,
  },
  rightBtnWrapper: {
    width: '20%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  headerIcon: {
    color: Common.grayShadowColor,
    fontSize: 25,
  },
  headerWrapper: {
    backgroundColor: Common.whiteColor,
    borderBottomWidth: 0,
  },
});
