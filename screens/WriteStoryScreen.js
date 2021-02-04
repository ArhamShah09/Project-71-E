import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            title : "",
            author : "",
            storyText : ""
        }
    }

    submitStory = () => {
        console.log(db.collection("stories"));
        db.collection("stories").add({
            title : this.state.title,
            author : this.state.author,
            storyText : this.state.storyText,
            //date : firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        });
        this.setState({
            title : "",
            author : "",
            storyText : ""
        });
    }

    /*<Header backgroundColor={'black'}
        centerComponent={{
        text:"Write Story Screen", 
        style:{color:"white", fontSize: 25}}}>
    </Header>*/

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.inputBox} 
                placeholder = "Story title"
                placeholderTextColor = 'black'
                onChangeText = {(text)=>{
                    this.setState({
                        title:text
                    });
                }}
                value = {this.state.title}/>

                <TextInput style={styles.inputBox} 
                placeholder = "Author"
                placeholderTextColor = 'black'
                onChangeText = {(text)=>{
                    this.setState({
                        author:text
                    });
                }}
                value = {this.state.author}/>

                <TextInput style={[styles.inputBox,{height : 150}]} 
                placeholder = "Write story"
                placeholderTextColor = 'black'
                onChangeText = {(text)=>{
                    this.setState({
                        storyText:text
                    });
                }}
                value = {this.state.storyText}
                multiline = {true}/>

                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress = {this.submitStory}
                >
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
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
    inputBox: {
        marginTop: 20, 
        width: '80%', 
        alignSelf: 'center', 
        height: 40, 
        textAlign: 'center', 
        borderWidth: 4, 
        outline: 'none' 
    },
    submitButton:{
        marginTop : 20,
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        radius : 15
    },
    submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:"bold",
        color: 'white'
    }
});