import {StyleSheet} from 'react-native';
import * as Common from '@Common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.whiteColor,
  },
  bodyWrapper: {
    flex: 9,
    backgroundColor: Common.whiteColor,
    padding: 10,
  },
  topCategoryWrapper: {
    marginRight: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  topCardImage: {
    width: 270,
    height: 170,
    padding: 10,
    justifyContent: 'flex-end',
    elevation: 3,
    shadowOffset: {width: 8, height: 8},
    shadowRadius: 3,
    shadowColor: '#929292',
    shadowOpacity: 0.6,
  },
  allCategoryWrapper: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  allCategoryView: {
    width: 80,
    height: 80,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#4b16b8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOffset: {width: 8, height: 8},
    shadowRadius: 3,
    shadowColor: '#929292',
    shadowOpacity: 0.4,
  },
  allCategoryIcon: {
    color: '#4b16b8',
    fontSize: 30,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
    color: Common.whiteColor,
  },
  productDesCard: {
    elevation: 2,
    shadowOffset: {width: 8, height: 8},
    shadowRadius: 1,
    shadowColor: '#929292',
    shadowOpacity: 0.1,
    borderColor: Common.lightGray,
    borderWidth: 1,
    width: '100%',
    padding: 10,
  },
  productCardWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productCard: {
    width: 180,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
