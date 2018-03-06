import React from 'react';
import { StyleSheet, Text, View,TextInput,Switch } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import RNCallKit from 'react-native-callkit';


export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       quickdrawStatus:false,
       number:null
    }
  }
  
  handleSwitchChange(){
    this.setState({quickdrawStatus: this.state.quickdrawStatus=!this.state.quickdrawStatus})

    RNImmediatePhoneCall.immediatePhoneCall(this.state.number);

  }

  handleInputChange(e){
      this.setState({
        number:e
      })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text} >
            Quick Draw
        </Text>
          <TextInput style={styles.viewInput} placeholder={'phone number'} onChangeText={this.handleInputChange.bind(this)} type="number"/>
          <Switch value={this.state.quickdrawStatus} onValueChange={this.handleSwitchChange.bind(this)} ></Switch>
         
            <Text style={styles.textBottom} >
              {this.state.number}
            </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText:{

  },
  text:{
    color:'white',
    textAlign:'center',
    fontSize:50,
    fontFamily: 'Cochin',
    width:'100%',
    backgroundColor:'black'
  },
  textBottom:{
    justifyContent:'flex-end',
    paddingTop:'30%'
  },
  viewInput:{
    margin:10,
    borderTopWidth:2,
    borderBottomWidth:2,
    height:'10%',
    width:'100%',
    textAlign: 'center'
  }
});
