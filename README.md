## RockXRNFrontend
This front end client is written in React Native and Expo, for the following requirements: Make an API call to retrieve data based on multiple comma-seperated pairs and a single base_currency

### Install instructions
First, please follow the instructions to install React Native via Expo CLI [here](https://facebook.github.io/react-native/docs/getting-started). In short, assuming you have already installed [Node.js](https://nodejs.org/en/download/), go to command prompt in this folder and run
    
    // install expo cli
    npm install -g expo-cli
    // to start the expo server
    expo start

This will open a web browser, and once the metro bundler starts, you can start running and testing the app.

#### Running on iOS simulator
On a MacOS, if you don't already have XCode installed, you can install it from [here](https://apps.apple.com/sg/app/xcode/id497799835?mt=12). Once XCode is installed, run it for the first time to install the required components. Afterwards, you can run on the iOS simulator from the button on the web browser.

#### Running on Android simulator
If you have not already installed Android Studio, you can do so [here](https://developer.android.com/studio/?gclid=CjwKCAiA8qLvBRAbEiwAE_ZzPfnS1a1nTfENSmiV7YHhSw6gySf825s0qOQznueAbgsj0dPRGON_UBoCFZMQAvD_BwE). Next, if you have not created an Android emulator, you can do so by following the instructions [here](https://developer.android.com/studio/run/emulator) and [here](https://developer.android.com/studio/run/managing-avds).
If you have Android Studio open, navigate to Tools > AVD Manager, then start one of the emulator(s).
From here, go back to the web browser and click on the button to start Android emulator.

#### Running on iOS device
Install Expo Client [here](https://apps.apple.com/us/app/expo-client/id982107779). Once installed, start the app and tap on the left most bottom tab, then scan the QR code displayed on the web browser.

#### Running on Android device
Install the Expo App [here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en). Once installed, start the app and tap on the left most bottom tab, then scan the QR code displayed on the web browser.

### Additional notes
I have managed to push out this very simple frontend client in less than 2 hours, I feel it is not the best in terms of UI and UX. Due to the lack of time as I have to OT, I am unable to implement backend server. Thank you for your time to check out this repository.