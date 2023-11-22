import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screen = Dimensions.get('window');

const primaryColor = '#2D2A2A';
const secondaryColor = '#3F3D3D';
const accentColor = '#FFCC3F';
const lightGrey = '#F8F8F8';
const darkGrey = '#5E5858';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* Add header content here */}
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.containerSearch}>
            <Text style={styles.headText}>Shop bán điện thoại</Text>
            <View style={styles.boxSearch}>
              <Icon name={'ios-search'} size={28} color={primaryColor} />
              <Text style={styles.txtSearch}>Tìm kiếm</Text>
            </View>
          </View>

          <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15

        }
        }
      >
            <View style={{padding:20}} >
                <TouchableOpacity
                
                  >
                  <Image style={{ width: 65, height: 65 }} source={require('../assets/iPhone62.png')}></Image>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}} >Iphone11</Text>

              </View>
              <View style={{padding:20}} >
                <TouchableOpacity
                  >
                  <Image style={{ width: 65, height: 65 }} source={require('../assets/iPhone62.png')}></Image>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}} >Iphone6</Text>

              </View>
              <View style={{padding:20}} >
                <TouchableOpacity
                  >
                  <Image style={{ width: 65, height: 65 }} source={require('../assets/iPhone62.png')}></Image>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}} >Iphone13</Text>

              </View>
              <View style={{padding:20}} >
                <TouchableOpacity
                  >
                  <Image style={{ width: 65, height: 65 }} source={require('../assets/iPhone62.png')}></Image>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}} >Iphone12</Text>

              </View>
              <View style={{padding:20}} >
                <TouchableOpacity
                  >
                  <Image style={{ width: 65, height: 65 }} source={require('../assets/iPhone62.png')}></Image>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}} >IphoneX</Text>

              </View>
              
        </ScrollView>
        </View>


          <View style={styles.containerMenu}>
            <View style={styles.menuColumn}>
              {phoneList.filter((o, i) => i % 2 === 0).map((item, index) => (
                <ItemMenu key={index} {...item} onPress={() => this.props.navigation.navigate('Detail', { data: item })} />
              ))}
            </View>

            <View style={styles.menuColumn}>
              {phoneList.filter((o, i) => i % 2 === 1).map((item, index) => (
                <ItemMenu key={index} {...item} onPress={() => this.props.navigation.navigate('Detail', { data: item })} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function ItemMenu({ onPress, title, unit, price, img, color, height }) {
  return (
    <View style={styles.menuItemContainer}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.card, { backgroundColor: color }]}>
          <View style={styles.cardHeader}>
            <View style={styles.descrip}>
              <Text style={styles.title}>{title}</Text>
              <View>
                {unit === 'each' ? (
                  <View style={styles.each}>
                    <Text style={[styles.price, { marginRight: 4 }]}>{price}</Text>
                    <Text style={styles.label}>{unit}</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.label}>{unit}</Text>
                    <Text style={styles.price}>{price}</Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.dotsContainer}>
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
          <View style={styles.cardBody}>
            <Image source={img} style={[styles.imgFruit, { height }]} resizeMode={'contain'} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  containerSearch: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  headText: {
    fontFamily: 'quicksand',
    fontWeight: 'bold',
    fontSize: 28,
    color: primaryColor,
  },
  boxSearch: {
    backgroundColor: lightGrey,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 28,
    paddingVertical: 16,
    marginTop: 18,
  },
  txtSearch: {
    fontFamily: 'quicksand',
    fontSize: 20,
    color: darkGrey,
    marginLeft: 24,
  },
  containerMenu: {
    padding: 10,
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuColumn: {
    flex: 1,
    margin: 5,
  },
  menuItemContainer: {
    overflow: 'hidden',
    borderRadius: 25,
  },
  card: {
    backgroundColor: '#FFE3E5',
    borderRadius: 25,
    width: '100%',
    padding: 17,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  dotsContainer: {
    marginTop: 3,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: darkGrey,
    opacity: 0.15,
    margin: 1.2,
  },
  descrip: {
    flex: 1,
  },
  title: {
    fontFamily: 'quicksand',
    fontWeight: 'bold',
    fontSize: 14,
    color: primaryColor,
  },
  label: {
    fontFamily: 'quicksand',
    fontSize: 12,
    color: secondaryColor,
  },
  each: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'quicksand',
    fontWeight: 'bold',
    fontSize: 14,
    color: primaryColor,
  },
  cardBody: {
    flex: 1,
  },
  imgFruit: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default Home;
const phoneList = [
    {
        title: 'Iphone X',
        price: '$52.45',
        img: require('../assets/iPhone62.png'),
        color: '#E4E4FE',
        height: screen.width * .32,
        description: 'Iphone 10 ra đời 2017 màn hình 12inc.'
    },
    {
        title: 'Iphone 11',
       
        price: '$1.01',
        img: require('../assets/iPhone62.png'),
        color: '#FFEEFE',
        height: screen.width * .25,
        description: 'iPhone - chiếc điện thoại đã mở ra một cuộc cách mạng mới cho ngành sản xuất thiết bị điện tử.'


    },
    {
        title: 'Iphone 12',
     
        price: '$4.6',
        img: require('../assets/iphoneXs.png'),
        color: '#E4E4FE',
        height: screen.width * .27,
        description: 'iPhone - chiếc điện thoại đã mở ra một cuộc cách mạng mới cho ngành sản xuất thiết bị điện tử.'

    },

    {
        title: 'Iphone 13',
       
        price: '$5.23',
        img: require('../assets/iphoneXs.png'),
        color: '#FFEEFE',
        height: screen.width * .26,
        description: 'iPhone - chiếc điện thoại đã mở ra một cuộc cách mạng mới cho ngành sản xuất thiết bị điện tử.'

    },
    {
        title: 'Iphone 6',
     
        price: '$4.6',
        img: require('../assets/iphoneXs.png'),
        color: '#E4E4FE',
        height: screen.width * .27,
        description: 'iPhone - chiếc điện thoại đã mở ra một cuộc cách mạng mới cho ngành sản xuất thiết bị điện tử.'


    },
    {
        title: 'Iphone 7',
      
        price: '$5.23',
        img: require('../assets/iPhone62.png'),
        color: '#FFEEFE',
        height: screen.width * .26,
        description: 'iPhone - chiếc điện thoại đã mở ra một cuộc cách mạng mới cho ngành sản xuất thiết bị điện tử.'

    }
]