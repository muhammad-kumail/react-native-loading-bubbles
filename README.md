# react-native-loading-bubbles
React Native package of loading balls. you can use it in your app to make more responsive.
## Installation
Native Cli: npm install react-native-loading-bubbles

Expo: expo install react-native-loading-bubbles
## Demo
![ezgif com-optimize](https://user-images.githubusercontent.com/56933027/217535240-1b231d80-8da1-4b3c-92c1-46365cf42e0d.gif)
## Sample Code
```
import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity as Button
} from 'react-native'
import {Loader} from 'react-native-loading-bubbles';

export default function App(){
    const [isLoad, setIsLoad] = useState(true)
    return (
        <View style={[styles.container,{}]}>
            <Text style={{color: 'black', fontSize: 18}}>Loading Bubbles</Text>
            {isLoad?<Loader 
                leftBubbleColor={'red'}
                middleBubbleColor={'green'}
                rightBubbleColor={'blue'}
                />:null}
            <Button style={[styles.button,{marginTop:55}]} activeOpacity={0.4} onPress={()=>setIsLoad(!isLoad)}>
                <Text style={{fontSize: 16, color: 'white'}}>{isLoad?'Stop':'Start'}</Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        margin: 5,
        paddingHorizontal: 30,
        padding: 6,
        backgroundColor: 'lime',
        borderRadius: 15,
    }
})
```
## Properties
|Props|Type|Default|
|---|---|---|
|leftBubbleColor|String|'red'|
|middleBubbleColor|String|'green'|
|rightBubbleColor|String|'blue'|