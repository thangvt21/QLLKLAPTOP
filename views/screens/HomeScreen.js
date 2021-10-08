import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width / 2 - 30;
import products from '../screens/products';
import products2 from '../screens/products2';
import DetailScreen from './DetailScreen';
let productsjson1 = require('../../products/products.json');
let productsjson2 = require('../../products/products2.json');
let productsjson3 = require('../../products/products3.json');
let productsjson4 = require('../../products/products4.json');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    
    this.gotoDetail = this.gotoDetail.bind(this);
    this.refreshFlatList = this.refreshFlatList.bind(this);
    this.state = {
      data: productsjson1.products,
    };
  }
  gotoDetail(product) {
    this.navigation.navigate('Detail', product);
 }
  findout(item) {
  }
  refreshFlatList(products) {
    this.setState(this.state.data=products)
  }
  render() {
    const Card=({product})=>{
      return (
        <TouchableOpacity onPress={() => this.gotoDetail(product)}>
          <View style={styles.Card}>
            <View>
                <View style={styles.cardImg}>
                    <Image 
                  style={styles.img1}
                  source={{uri: product.img}}/>
                                                
                </View>
                <Text style={styles.productName}>
                    {product.name}
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>
                        ${product.price}
                    </Text>
                    <View style={styles.addButtonContainer}>
                        <Text style={styles.addButtonText}>
                            +
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    );
};
    return(           
      <View style={{backgroundColor: 'white'}}>
       
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesListContainer}>
        <View style={styles.swip}>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson1.products)}>
            CPU
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson2.products)}>
            RAM
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson3.products)}>
            Mainboard
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson4.products)}>
            GPU
          </Text>
        </View>
        </ScrollView>

        <FlatList 
          numColumns={2}
          data={this.state.data}
          renderItem={({item}) => <Card product={item} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            margin: 10,
            paddingBottom: 150,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiptext: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 25,
    paddingBottom: 25,
    paddingRight: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  brandTop: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  swip:{   
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    flexDirection: 'row',
    
  },
  productName:{
    fontSize:16,
    textAlign:'left',
    justifyContent:'flex-start',
    fontWeight:'bold', 
    marginBottom: 10,
  },
  priceContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  productPrice:{
    fontSize:16,
    paddingBottom: 15,
    textAlign:'left',
    fontWeight:'bold',
  },
  img1:{
    flex: 1,
    resizeMode: 'contain',
    height: 200,
    width: 100,
    borderRadius: 15,
  },
  addButtonContainer:{
    height:25,
    width: 25,
    backgroundColor:'black',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  addButtonText:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    flex:1,
  },
  Card: {
    backgroundColor:'white',
    height:275,
    width,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.5,
    margin: 10,
    borderColor: 'gray',
    borderTopWidth: 5,
    borderTopColor: 'black',
    elevation: 2,
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardImg:{
    height:120,
    margin:10,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  categoriesListContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  CategorySelected: {
    color:'white',
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:'white',
  },
  categoryText: {
    fontSize: 16,
    color:'white',
    fontWeight:'bold',
  },
  categoryContainer: {
    backgroundColor:'white',
    flexDirection:'row',
    marginTop:30,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    justifyContent:'space-between',
    color:'white'
  },
  seachContainer: {
    flex:1,
    padding: 5,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderColor: 'white',
    margin: 15,
    marginBottom: 5,
    marginLeft: 25,
    borderWidth: 1,
    borderBottomColor: 'black'
  },
  inputseach: {
    fontSize: 18,
    fontWeight:'bold',
    color:'black',
    backgroundColor:'white',  
    width:230,
    marginLeft: 5,
  },
  header: { 
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    padding: 10,
    marginTop: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    borderWidth: 1,
    padding: 10,
    width: 150,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
  },
});