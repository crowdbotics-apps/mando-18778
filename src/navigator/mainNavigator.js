import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial76817Navigator from '../features/Tutorial76817/navigator';
import NotificationList76789Navigator from '../features/NotificationList76789/navigator';
import Settings76788Navigator from '../features/Settings76788/navigator';
import Settings76780Navigator from '../features/Settings76780/navigator';
import UserProfile76778Navigator from '../features/UserProfile76778/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Tutorial76817: { screen: Tutorial76817Navigator },
NotificationList76789: { screen: NotificationList76789Navigator },
Settings76788: { screen: Settings76788Navigator },
Settings76780: { screen: Settings76780Navigator },
UserProfile76778: { screen: UserProfile76778Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
