import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { firebaseConfig } from './config';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

import Tabs from './tabs';

const stackNavigator = createStackNavigator({
  Tabs: Tabs

});

export default createAppContainer(stackNavigator)

