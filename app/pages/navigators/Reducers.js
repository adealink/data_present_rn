/**
 * Created by sunxiaodong on 2017/5/20.
 */
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const mainAction = AppNavigator.router.getActionForPathAndParams('Main');
const mainNavState = AppNavigator.router.getStateForAction(mainAction);

const initialNavState = AppNavigator.router.getStateForAction(
  mainAction,
  mainNavState,
);

function nav(state = initialNavState, action) {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export { nav };
