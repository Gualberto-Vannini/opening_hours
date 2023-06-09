# OPENING HOURS
This project aims to recreate a working structure consuming APIs and creating an opening hours card schedule.

| Iphone 14 Pro | Android Galaxy A10s |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/22340454/225926108-07da3906-a9c9-4f28-873c-7278b63ca77d.png" width="200"> | <img src="https://user-images.githubusercontent.com/22340454/225926204-56f80e07-e7ee-4723-b4ce-657efc6edeb0.jpg" width="200">


## Pre requisites
- [Node.js > 14](https://nodejs.org) and yarn (Recommended: Use [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [min Android Studio canary 5 and Android SDK](https://developer.android.com/studio)

## Base dependencies
- [gist github APIs](https://gist.github.com/Gualberto-Vannini) personal github gist for APIs.
- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [stack-navigator](https://reactnavigation.org/docs/stack-navigator/) to handle stack navigation.
- [bottom-tabs-navigator](https://reactnavigation.org/docs/bottom-tab-navigator/) as bottom tab solution.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit) toolset for efficient Redux development.
- [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) data storage system for React Native.
- [circular dependencies](https://github.com/acrazing/dpdm) Check if Redux is creating Circular Dependencies.
- [dpdm](https://github.com/acrazing/dpdm#readme) dep of circular dependencies.
- [styled-components](https://github.com/styled-components/styled-components) style your component with a custom theme app wrapper.
- [styled-system](https://styled-system.com) quickly build custom UI.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)flexible way to handle safe area.
- [react-native-rename](https://github.com/junedomingo/react-native-rename)rename easily the project.
- [react-native-svg](https://github.com/software-mansion/react-native-svg) svg for tab bar icons.
- [jest](https://facebook.github.io/jest/) for testing.

## Folder structure
- `src`: This folder is the main container of all the code inside your application.
  - `api`: Folder to store all axios rest apis.
  - `components`: Folder to store any common component that you use through your app.
  - `hooks`: Folder to store custom hooks.
  - `navigation`: Folder to store all screens and possibile stacks.
  - `redux`: Folder to store all redux actions, selectors e the application storage logic.
  - `screens`: Folder to store all screens and possibile stacks.
  - `utils`: Folder to store utilities.
      - `helpers`: Folder to store helper functions.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file.

#### iOS install
with M1 machine could happen sever problems connected with rosetta setup. Place check the scripts into the package.json
- M1: `yarn m1-ios-install`
- intel: `yarn intel-install`

#### iOS cleanup
with M1 machine could happen sever problems connected with rosetta setup. Place check the scripts into the package.json
- M1: `yarn m1-ios-cleanup`
- intel: `yarn intel-ios-cleanup`

#### iOS execute
- M1 and intel: `yarn ios`

#### Android cleanup
- `yarn android-cleanup`

#### Android execute
- `yarn android`


You can always execute both OS from Xcode and Android Studio. My suggestion is always execute with native IDE in order to see more logs.

## Jest Unit Tests
#### The utils folder tests
![test-suite](https://user-images.githubusercontent.com/22340454/226169772-94bb7970-03ee-4bbf-ac43-916d68058a4d.png)

includes tests for three core utility functions on [src/utils/helpers/__tests__/formatDateHelper.ts](https://github.com/Gualberto-Vannini/opening_hours/blob/main/src/utils/helpers/__tests__/formatDateHelper.test.ts) related to formatting opening hours data: `formatOpeningHours, reorderDays, and convertDate12Clock`.

The `formatOpeningHours` function takes an array of DaySchedule objects and returns a string representation of the opening hours, formatted in a human-readable way. The tests for this function check that it can handle various input scenarios, such as empty arrays and multiple pairs of opening hours.

The `reorderDays` function takes an object representing the opening hours for each day of the week, and returns a new object with the days reordered so that they match the order in which they appear in the standard Sunday-Saturday week. The tests for this function check that it correctly reorders the days in the input object.

The `convertDate12Clock` function takes a number representing the number of seconds since midnight, and returns a string representation of the time in 12-hour clock format. The tests for this function check that it correctly converts various input values to the expected output format.

The test specific file can be executed with `yarn test src/utils/helpers/formatDateHelper.test.ts` or all test can be executed with `yarn test`

#### The custom hook tests
![test-suite_2](https://user-images.githubusercontent.com/22340454/226169809-56a1dcb7-eeec-4006-a532-08e86f5ba950.png)

includes tests for core hook on [src/hooks/useCurrentDay.ts](https://github.com/Gualberto-Vannini/opening_hours/blob/main/src/hooks/__tests__/useCurrentDay.test.ts) related to checking the current date.
The `useCurrentDay` hook comes with a simple test suite to ensure that it is returning the correct day of the week and isToday value for the specified checkDay. The test checks for the current day of the week as well as a future day of the week to ensure that the hook is working as expected.

The test specific file can be executed with `jest src/utils/helpers/__tests__/formatDateHelper.test.ts` or all test can be executed with `yarn test`

## Redux
Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success, error and loading responses are also defined by the same form.

### Controllers folder and API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `src/api/Apis.ts`. It uses interceptors to define common side effects for the responses.

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers' folder.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux store. This is useful because you can create behaviors based on those states in a quick and simple way

### Redux folders

- `redux`
   - `OpeningHours`: folder to store all redux information connected to OpeningHours apis.
      - `OpeningHours.ts` handle actions in your reducers:
      - `openHoursActions.ts` createAsyncThunk abstracts the standard recommended approach for handling async request lifecycles.
      - `openHoursSelector.ts`: selectors.
   - `loading`: folder to store all redux load state information.
   - `rootReducer`: combining reducers into RootState.
   - `store`: here you define the store shape and you can configure the persistReducer and middlewares.


## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

## Debugging

For debugging, we use [React Native Debugger](https://github.com/jhen0409/react-native-debugger). After this has been installed, open the debugger and run the app. You should see the JavaScript logs appear in the debugger console. You can execute and runs using the shortcut `⌘ + D`.

## Generate production version

Not in scope of the project

## Extra suggestions

Navigate into `src/api/OpeningHours.ts` you can change the route in order to point to a different .json to try a different dataset. Both dataset are hosted on [gist github APIs](https://gist.github.com/Gualberto-Vannini).


## Personal Goals

This repository is a partial clone and reuse of my [personal RN template](https://github.com/Gualberto-Vannini/template_RN_2023). My aim is to have a quick and easy way to start new projects using my preferred, adaptable, and scalable structure. I consider this repository a part of my personal development journey, as it allows me to swiftly create new apps whenever I have an idea.
