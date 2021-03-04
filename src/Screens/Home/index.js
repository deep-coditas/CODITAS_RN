import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'native-base';
import Styles from './Styles';
import Header from '@Components/Header';
import {PRODUCTS, TOP_CATEGORIES, ALL_CATEGORIES} from './HomeData';

const Home = () => {

  // initial state declaration and initialization
  const [state, setState] = useState({
    products: PRODUCTS,
    selectedCategory: '',
  })

  // Render the card list for order history
  const renderTopCategoryCard = (item) => {
    const {name, price, image} = item;
    return (
      <View style={Styles.topCategoryWrapper}>
        <ImageBackground
          source={image ? {uri: image} : null}
          style={Styles.topCardImage}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 6.5}}>
              <Text style={{...Styles.priceText}}>{name}</Text>
            </View>
            <View style={{flex: 3, alignItems: 'flex-end'}}>
              <Text style={{...Styles.priceText}}>$ {price}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  // render product card
  const renderProductCard = (item, index) => {
    const {name, distance, image, rating} = item;
    let ratingArray = rating ? Array.from(Array(rating).keys()) : [];
    return (
      <View style={Styles.productCard} key={index}>
        <Image
          source={image ? {uri: image} : null}
          style={{width: '100%', height: 150}}
        />
        <View style={Styles.productDesCard}>
          <Text style={{fontSize: 16}}>{name}</Text>
          <View
            style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="location"
              type="EvilIcons"
              style={{
                color: 'pink',
                fontSize: 16,
              }}
            />
            <Text style={{fontSize: 13, marginRight: 5, paddingBottom: 2}}>
              {distance}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {ratingArray.map((item) => (
              <Icon
                key={item}
                name="star"
                type="Entypo"
                style={{fontSize: 18, color: 'gold', marginRight: 3}}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };

  // Render the card list for order history
  const renderAllCategories = (item) => {
    const {selectedCategory} = state;
    const {name, icon, iconType} = item;
    return (
      <TouchableOpacity
        style={Styles.allCategoryWrapper}
        onPress={() => onFilterByCategory(item)}>
        <View
          style={{
            ...Styles.allCategoryView,
            borderColor: selectedCategory === name ? 'green' : '#4b16b8',
          }}>
          <Icon
            style={{
              ...Styles.allCategoryIcon,
              color: selectedCategory === name ? 'green' : '#4b16b8',
            }}
            name={icon}
            type={iconType}
          />
        </View>
        <Text style={{marginTop: 10, fontSize: 13}}>{name}</Text>
      </TouchableOpacity>
    );
  };

  // filter the card based on teh filter circles
  const onFilterByCategory = (item) => {
    const {name} = item;
    const {selectedCategory} = state;
    if (selectedCategory === name) {
      setState({products: [...PRODUCTS], selectedCategory: ''});
    } else {
      let list = [...PRODUCTS];
      list = list.filter((item) => item.category.toLowerCase() === name.toLowerCase());
      setState({products: list, selectedCategory: name});
    }
  };

    const {products} = state;
    return (
        <View style={Styles.container}>
          <Header
          />
          <View style={Styles.bodyWrapper}>
            <View style={{marginTop: 20}}>
              {Array.isArray(TOP_CATEGORIES) && TOP_CATEGORIES.length ? (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={TOP_CATEGORIES}
                  renderItem={({item}) => renderTopCategoryCard(item)}
                  keyExtractor={({}, index) => index.toString()}
                />
              ) : null}
            </View>
            <View style={{marginTop: 20}}>
              {Array.isArray(ALL_CATEGORIES) && ALL_CATEGORIES.length ? (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={ALL_CATEGORIES}
                  renderItem={({item}) => renderAllCategories(item)}
                  keyExtractor={({}, index) => index.toString()}
                />
              ) : null}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.productCardWrapper}>
                {Array.isArray(products) && products.length
                  ? products.map((item, index) => {
                      return renderProductCard(item, index);
                    })
                  : null}
              </View>
            </ScrollView>
          </View>
        </View>
    );
}

export default Home;
