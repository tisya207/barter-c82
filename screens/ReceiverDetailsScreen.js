import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class RecieverDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId:firebase.auth().currentUser.email,
      receiverId:this.props.navigation.getParam('details')['user_id'],
      requestId:this.props.navigation.getParam('details')['request_id'],
      bookName:this.props.navigation.getParam('details')['book_name'],
      reason_for_requesting:this.props.navigation.getParam('details')['reason_to_request'],
      receiverName:'',
      receiverContact:'',
      receiverAddress:'',
      receiverRequestDocId:'',
    }
  }



getRecieverDetails(){
  db.collection('users').where('email_id','==',this.state.receiverId).get()
.then((snapshot)=>{
snapshot.forEach((doc)=>{
  this.setState({
    receiverName:doc.data().first_name,
    receiverContact:doc.data().contact,
    receiverAddress:doc.data().address
  })
})
})
 }}