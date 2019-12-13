import { NavigationActions } from "react-navigation";

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
}

function goBack(params) {
  navigator.dispatch(NavigationActions.back(params));
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator
};
