import React from 'react';
import { StackNavigator } from 'react-navigation';

import App from './App';
import Other from './Other';


export const Inicio = StackNavigator ({
    App:{
      screen: App,
    },
    Other:{
        screen: Other,
    }
});