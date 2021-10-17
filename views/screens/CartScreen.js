import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
// var voucherused = require('../Voucher/voucher-used.json');
var data = require('../../products/GioHang.json');
export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.goToVoucher = this.goToVoucher.bind(this);
    this.backHome = this.backHome.bind(this);
    this.computetru=this.computetru.bind(this)
    this.computecong=this.computecong.bind(this)
    this.deletecart=this.deletecart.bind(this);
    this.sum = this.sum.bind(this);
    this.state = {
      data: props.route.params,
      id: 1,
      cong:0,
      tru:0,
      dem:0,
      tong: 0,
      label:''
    };
    console.log(this.state.data);
  }

  deletecart(name){
    for(let i=0;i<data.carts.length;i++){
      if(data.carts[i].name === name){
        data.carts.splice(i,1);
        console.log('xoa thang cong')
      }
    }
    this.navigation.navigate('Cart',data.carts)
    this.navigation.navigate('Cart')
  }
  sum(){
    let tong = 0;
    for (let i = 0; i < data.carts.length; i++) {
        tong = tong + data.carts[i].tonggia;
        this.setState({tong:tong});
    }
    console.log(tong);
    // if(voucherused.voucherused[0]!=null){
    //   tong=tong-voucherused.voucherused[0].discount;
    //   if(voucherused.voucherused[0].discount>tong){
    //     tong=0;
    //     this.setState({tong:tong});
    //   }
    //   this.setState({tong:tong})
    // }

  }
  computetru(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc=data.carts[i].price;
      if (data.carts[i].name === name) {
        if(data.carts[i].Quantity==1){
          console.log('gioi han');
        }else{
          data.carts[i].Quantity=data.carts[i].Quantity-1;
          data.carts[i].tonggia=data.carts[i].Quantity*giagoc;
          console.log(data.carts[i].Quantity);
        }
      }
    }
    this.sum();
    this.navigation.navigate('Cart')
    this.navigation.navigate('Cart',data.carts)
  }
  computecong(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc=data.carts[i].price;
      if (data.carts[i].name === name) {
        data.carts[i].Quantity=data.carts[i].Quantity+1;
        data.carts[i].tonggia=data.carts[i].Quantity*giagoc;
        console.log(data.carts[i].Quantity);
      }
    }
    this.sum();
    this.navigation.navigate('Cart')
    this.navigation.navigate('Cart',data.carts)
  }

  goToVoucher() {
    this.navigation.navigate('Voucher');
  }
  backHome() {
    this.navigation.goBack();
  }
  render() {
    const RenderItem=({cart})=> {
      console.log(cart)
      return (
        <View style={styles.cart}>
          <View style={styles.title}>
            <Text style={{marginLeft: 10,marginTop:5, fontSize: 18, color:'black'}}>{cart.name}</Text>
            <View style={styles.quantity}>
              <Text style={styles.textQuantity} onPress={()=> this.computetru(cart.name)}>-</Text>
              <Text style={styles.textQuantity}>{cart.Quantity}</Text>
              <Text style={styles.textQuantity} onPress={()=> this.computecong(cart.name)}>+</Text>
            </View>
          </View>
          <View style={styles.price}>
            <Text style={{fontSize: 16, color: '#5B14F5', textAlign: 'center'}}>
              Price
            </Text>
            <Text style={{color:'#5B14F5'}}>${cart.tonggia.toFixed(2)}</Text>
            <TouchableOpacity onPress={()=>this.deletecart(cart.name)} >
              <Image
                //style={styles.imgDetele}
                style={{width: 30, height: 30}}
                source={require('../../assets/adaptive-icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    for(let i=0;i<data.carts.length-1;i++){
      for(let j=i+1;j<data.carts.length;j++){
        if(data.carts[i].name == data.carts[j].name){
          data.carts.pop(data.carts[j]);
          console.log('thang cong')
        }
      }
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={{fontSize: 16, color:'white'}} onPress={this.backHome}>
              Back
            </Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={{fontSize: 26, color:'white'}}>Your Cart</Text>
          </View>
        </View>
      <View>
        <Text>
           {this.state.label}
        </Text>
        
        
      </View>
        <View style={styles.products}>
          <FlatList
            data={data.carts}
            renderItem={({item}) => <RenderItem cart={item} />}
          />
          <Text style={{fontSize: 20, marginLeft: 5,color:'#30336b'}}>Totals</Text>
          <View style={styles.bottom}>
            <View style={styles.leftBottom}>
              <Text style={{fontSize: 16, color:'#30336b'}}>Total Amount:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Voucher:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Shipping:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Total Payment:</Text>
            </View> 
            <View style={styles.rightBottom}>
              <Text style={{fontSize: 16, paddingLeft: 60, color:'#30336b'}}>0.00</Text>
              <Text style={{fontSize: 16, paddingLeft: 60, color:'#30336b'}}>......</Text>
              <Text style={{fontSize: 16, paddingLeft: 60, color:'#30336b'}}>0.00</Text>
              <Text style={{fontSize: 16, paddingLeft: 60, color:'#30336b'}}>{this.state.tong.toFixed(2)}</Text>
              <TouchableOpacity style={styles.button} onPress={this.sum}>
                <Text style={{fontSize: 16, color:'#FFF', textAlign: 'center', justifyContent:'center'}}>Check Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 80,
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    borderBottomLeftRadius: 20
  },
  headerCenter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 100
  },
  headerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7979',
  },

  cart: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: "white",
  },
  img: {
    flex: 2.7, 
    width: 124,
    height: 115,
    borderRadius: 20,
  },
  title: {
    flex: 5,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-between',
  },
  quantity:{
    flexDirection: 'row',
    width: 120,
    height: 30,
    alignItems: 'center',
    marginLeft: 20,
  },
  textQuantity: {
    fontSize: 20,
    width: 40,
    textAlign: 'center',
    color: '#5B14F5',
  },
  price: {
    flex: 1.3,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  products: {
    height:500,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 5,
    height:200,
  },
  leftBottom: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  rightBottom: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    height: 30,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10
  },
});
