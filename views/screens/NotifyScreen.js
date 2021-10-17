import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
const data=require("../../products/notify.json")

export default class NotifyScreen extends Component{
    constructor(props){
        super(props)
        this.navigation= props.navigation
        this.state={
            data:data.notifies
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Text></Text>
                <Text></Text>
                
            <FlatList 
              style={styles.notificationList} 
              enableEmptySections={true}
              data={this.state.data}
              keyExtractor= {(item) => {
                return item.id.toString();
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity /*onPress={()=>this.navigation.navigate('NotifyDetailScreen')}*/>
                      <View style={styles.notificationBox}>
                            <Image style={styles.icon}
                            source={{uri: 'https://img.icons8.com/ios/50/000000/computer-chat.png'}}/>
                            <Text style={styles.description}>{item.about}</Text>
                        </View>
                    </TouchableOpacity>
                )}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#808080',
      paddingBottom: 50
      },
      notificationList:{
        marginTop:20,
        padding:10,
      },
      notificationBox: {
        padding:15,
        marginBottom:5,
        backgroundColor:'white',
        marginBottom: 20,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: -4, height: 6},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 4,
        flexDirection: 'row'
      },
      icon:{
        width:35,
        height:35
      },
      description:{
        fontSize:17.5,
        color: "black",
        marginLeft:10,
        marginRight: 10
      }
})
