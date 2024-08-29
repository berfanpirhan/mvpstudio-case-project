Running The Project
This guide will walk you through the steps to get your app up and running on your local development environment.

---

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js: Download and install Node.js from nodejs.org.

Expo CLI: Install the Expo CLI globally using npm or yarn:
npm install -g expo-cli

3. A code editor: Use your preferred code editor. Popular choices include Visual Studio Code or Atom.

4. Android Studio (optional): For Android development, install Android Studio and set up an Android Virtual Device (AVD).

5. Xcode (optional): For iOS development, install Xcode from the Mac App Store (macOS only).

---

Getting Started

1. Clone the Repository
   Clone the repository to your local machine.

2. Install Dependencies
   Navigate to the root folder in a terminal and run the following command to install dependencies:
   npm install

## Use "npx expo start" to start the app, which will prompt you with a menu consisting of various commands and a QR code.

Running on a Mobile Device
Download Expo Go: Install the Expo Go app from the Google Play Store (Android) or the Apple App Store (iOS).

Scan QR Code: Open Expo Go on your device and scan the QR code displayed in the Expo developer tools. Your app will load and run on your mobile device.

Running on an Emulator
For Android
Open Android Studio and start an Android Virtual Device (AVD).

Ensure that the emulator is running and execute the following command:
npx expo start --android

For iOS (macOS only)
Ensure that Xcode is installed and configured.

Open the iOS simulator using the following command:
npx expo start --ios
