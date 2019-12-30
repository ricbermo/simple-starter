# React Native Simple Starter

Just another [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

I created this boilerplate following the best practices, packages, configs I've been using for 3+ years developing RN apps.

## Content

Here you will find:

- [React Native](https://facebook.github.io/react-native/) 61.5
- [Redux Toolkit](https://redux-starter-kit.js.org/)
- [redux-promise-middleware-actions](https://github.com/omichelsen/redux-promise-middleware-actions) to a fancy way to create async actions
- [react-native-dotenv](https://github.com/zetachang/react-native-dotenv)
- [A supercharged StyleSheet replacement](https://github.com/vitalets/react-native-extended-stylesheet) you can use to apply themes.
- [A Babel plugin to make easier imports](https://github.com/tleunen/babel-plugin-module-resolver)
- [React Navigation](https://reactnavigation.org/docs/en/hello-react-navigation.html) with a nice NavigationService you could use within your async actions.
- Prettier + ESLint
- [Husky](https://github.com/typicode/husky)
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- Some other goodies like [RamdaJS](https://ramdajs.com/), [Lodash](https://lodash.com/), [date-fns](https://date-fns.org/), among others.

## Suggested Packages/Services

I didn't add the following packages in order to keep this project as simple as possible. Moreover, you may not want/need to use them.

- [Microsoft's AppCenter](https://appcenter.ms/)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons)

## Directory layout

- **src/actions:** here you should place all of your redux actions
- **src/api**:  place here any function that would send an HTTP request
- **src/assets**: Image, icons, fonts, sounds, etc.
- **src/common**: This is a folder where you will find commonly used components, styles, etc.
- **src/components**: presentational components
- **src/constants**: constants, types.
- **src/helpers**: Functions that would be commonly used within your app, like a date formatter.
- **src/navigation**: Your app's navigation setup/config.
- **src/reducers**: redux reducers.
- **src/screens**: container components, i.e. the application's screens

## Using the Boilerplate

- Clone this repository
- Remove the previous git history: `rm -rf .git`
- Install the npm dependencies by running `yarn` or `npm`
- Install [react-native-rename](https://github.com/JuneDomingo/react-native-rename) and rename the project to your own name. By default is SimpleStarter.
- Set your own bundle ID, package ID, android keystore, etc.
- Set/Customize the splash screen, app icons, app name.
- Customize your Husky setup
