import { createBottomTabNavigator } from 'react-navigation-tabs';
import AuthenticationScreen from './authentication';
import UsersScreen from './users';

export default createBottomTabNavigator(
    {
  Authentication: AuthenticationScreen,
  Users:UsersScreen
},
{
    tabBarOptions: {
        labelStyle:{
            fontSize:20,
            marginBottom: 30,
        },
        style:{
            height:80,
        }
    }
}
);