// @flow

/* "javascript.validate.enable": false,
"flow.useNPMPackagedFlow": true*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Timer, NavigationBar, CardView } from '../components/common';
//import { Logger } from '../utilities';

type Props = {
  navigation: any
};

export default class NextFoodie extends React.Component<Props, void> {

  onForwordPress=()=>{
    this.props.navigation.navigate("ScreenTwo");
  }

  render() {
    const rightButtonConfig = {
      onPress: this.onForwordPress,
      icon : 'angle-right'
    };

    const titleConfig = {
      title: 'Hello, world',
    };
    return (
      <View style = {styles.container}>
        <NavigationBar
          title = {titleConfig}
          rightButton = {rightButtonConfig}
        />
        <Text style = {styles.welcome}>
          {'Welcome to React Native!'}
        </Text>
        <Avatar user = {{ role: '1', photo: '' }} />
        <Timer onFinish = {()=>console.log('timer finish')} startTime = {5} />
        <CardView>
          <Text style = {styles.welcome}>
            {'Welcome to React Native!'}
          </Text>
        </CardView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});