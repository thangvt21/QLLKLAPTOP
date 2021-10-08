import React,{Component} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,FlatList,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
const width =Dimensions.get("screen").width/2-30;
export default class DetailScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,
            cong:0,
            tru:0,
            dem:0,
        }
    }
  render(){
          return(
              <ScrollView>
                  <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                  <View style={styles.Header}>
                      <View style={styles.backBtn} >
                           <Text style={styles.backBtnText} onPress={()=>this.navigation.navigate('Home')}>
                               Back
                           </Text>
                      </View>                     
                  </View>

                  <View style={styles.imageContainer}>
                      <Image source={{uri:this.state.data.img}} style={styles.productImg}/>
                  </View>
                  
                  <View style={styles.detailContainer}>
                      <View
                      style={styles.productNameContainer}>
                      <Text style={styles.productName}>
                          {this.state.data.name}
                      </Text>                      
                  </View>
                  <View style={styles.productAboutContainer}>
                       <Text style={styles.productAbout}>
                           {this.state.data.about}
                      </Text>
                  </View>
                  <View style={styles.priceContainer}>
                      <View style={styles.productPriceContainer}>
                      <View>
                          <Text style={styles.productPrice}>
                              ${this.state.data.price}
                          </Text>
                      </View>
                          </View>
                          <View style={styles.buyBtn}>
                          <Text onPress={()=>this.addCart()}
                              style={styles.textBtnBuy}>
                              Add to Cart
                          </Text>
                      </View>
                      </View>
                  </View>
                  
              </SafeAreaView>
          </ScrollView>
          )
     }
}

const styles = StyleSheet.create({
    buyBtn: {
        padding: 10,
        margin: 5,
        marginBottom: 15,
        paddingLeft:20,
        paddingRight: 20,
        backgroundColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnBuy:{
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    productPriceContainer:{
        flexDirection:'column',
        alignItems:'center'
    },
    priceContainer:{
        marginTop:10,
        flexDirection:'column',
        justifyContent:'space-evenly', 
        alignItems: 'flex-end'
    },
    productAbout:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    productAboutContainer:{
        paddingHorizontal:10,
        marginTop:10
    },
    productName:{
        fontSize: 22, 
        fontWeight: 'bold',
        color:'black'
    },
    productImg: {
        resizeMode:'contain',
        flex:1,
        height:300,
        width:300, 
        borderRadius:20
    },
    productNameContainer:{
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    borderBtn: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
        marginLeft:10
      },
    borderBtnText: {
        fontWeight: 'bold', 
        fontSize: 28
    },
    productPrice:{
        margin: 5,
        padding: 10,
        color:'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    line:{
        width:25,
        height:2,
        backgroundColor:'white',
        marginBottom: 5,
        marginRight: 3,
    },
    Card:{
        backgroundColor:'white',
        height:225,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
    },
    detailContainer:{
        flex:0.55,
        height: 'auto',
        backgroundColor:'white',
        margin: 10,
        marginTop: 15,
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },  
    backBtnText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#30336b'
    },
    backBtn:{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 10,
        fontSize:20,
        fontWeight:'bold',
        borderRightWidth: 4,
    },
    Header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'white',
    },
    container: {
        flex: 1,
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
        alignItems: 'center'
    },
    buttonText: {
        // textAlign: 'center'
    }
});