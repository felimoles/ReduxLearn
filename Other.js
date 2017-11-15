import React, { Component } from 'react';
import {
  Platform,

  Text,
  View,
  TouchableOpacity,

} from 'react-native';
import { connect } from 'react-redux';

class Other extends Component{

        constructor(props) {

        super(props);
   const {appDataa} = this.props;
        this.state = {
         ubicacion: appDataa.data[0],

        };
     }


    render(){
      
        let y = this.state.ubicacion;

        if(y == null){
        return(
            <View>
                <Text> No hay datos </Text>
                </View>
        )
        }else{
            return(
                <Text>{this.state.ubicacion} </Text>
            )

        }
    }

}

function mapStateToProps (state) {
  return {
    appDataa: state.dataReducer
  }
}


export default connect(
  mapStateToProps
)(Other)