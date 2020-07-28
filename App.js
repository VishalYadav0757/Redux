import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/Login';
import Signup from './src/Signup';
import Dashboard from './src/Dashboard';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Register',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    }, 
  },
});

export default createAppContainer(AppNavigator);