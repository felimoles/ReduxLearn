/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux'
import { fetchData } from './actions'

class App extends Component {

    
  a(){
      var movieList = [ubic= "32",ad="34", k = true]
    movieList => movieList.json();
      console.log(movieList[0]);
      var dopa = movieList;
      this.props.fetchData(dopa);

  }

  next(){
     this.props.navigation.navigate("Other");
  }
  render() {
    const { fetchData, appDataa } = this.props;
    if (appDataa.data) {
      movieList = appDataa.data;
    } else {
      movieList = [];
    }
    console.log(movieList)
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this.a.bind(this)}>
          <Text style = {styles.getButton}>
           |-----------------Set-----------------|
           </Text>
        </TouchableOpacity>
              <TouchableOpacity onPress = {this.next.bind(this)}>
          <Text style = {styles.getButton}>
           |-----------------Next-----------------|
           </Text>
        </TouchableOpacity>
     
        <FlatList 
          style = {{backgroundColor: 'red'}}
          data = {movieList}
          keyExtractor = {(_,index)=>index}
          renderItem = {({item}) => (
            <Text>
              {item.title}
            </Text>
            
          )}
        />
           <Text>{movieList[1]} - {movieList[0]}</Text>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    appDataa: state.dataReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: (data) => dispatch(fetchData(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 200
  },
  getButton:{
    alignSelf: 'center',
    textAlign: 'center'
  }
})