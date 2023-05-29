# Energy Fund
A finance app - just a test


## Running
Just install dependencies
`yarn`
`npx pod-install`

Start the bundler (keep this running on another terminal)
`npx react-native start`

Run on your platform of choice
`npx react-native run-ios` or `npx react-native run-android`

## Using
This is just a test app, as such all data is mocked - but dynamically generated!
To "Log in" just type one of the available mock user's e-mail in the login screen:
```
jon@doe.com
mary@sue.com
fulano@tal.com
```

## Technologies
- React Native
- React Navigation
- Redux + Redux/toolkit
- react-native-graph
- Typescript
- Formik + Yup


## File Structure
- src/components
	Shared components, used all over the app
- src/screens
	Special case components: these represent screens to be used in navigation. Modules are in *folder/index.tsx* type. This is done so it's possible to break down the screen in sub-files, like Components and redux state.
- src/navigation
  All of React Navigation files.
- src/types
	Typescrip type definitions to be used all over the app. One type per file to be more explicit.
- src/utils
  Libraries of shared code, generally pure Typescript/javascript and grouped in files by context.
- src/redux
  Contains main Redux setup and shared redux slices.
- src/images
  Shared static image assets. Exported in index.ts module.

