
# MapsPlaceSearchApp

A high-performance, production-ready React Native app for searching and saving places using the Google Maps Places API. Built with TypeScript and native modules, this project showcases advanced usage of maps, location persistence, smooth animations, and clean navigation architecture.

---

## 🚀 Features

- 🔍 Google Places API with live search suggestions
- 🗺️ Interactive Map with animated marker focus
- 💾 Local search history persisted via AsyncStorage
- 📍 View & navigate to saved locations from a separate screen
- 🎯 Modular architecture using custom hooks & reusable components
- ⚡ Fast and responsive UI (no 3rd-party design libraries used)
- ✅ Type-safe navigation (React Navigation v6 + TypeScript)
- 💅 Custom color scheme that complements Google Maps visuals

---

## 🧠 Screens Overview

- **MapScreen**
  - Live search with Google Places autocomplete
  - Animated camera + marker focus on selection
  - Info card with address, coordinates & external Google Maps link
  - Save selected places to local history

- **DetailsScreen**
  - Displays all saved locations from history
  - Tap to focus any saved location back on the map

---

## 🧪 Tech Stack

- React Native (TypeScript)
- React Navigation (v6)
- Google Places API
- AsyncStorage
- Animated API
- Native Maps (via `react-native-maps`)

---

## 🔑 Environment Variables Setup

Create a `.env` file in the root of the project:

```env
GOOGLE_MAPS_KEY=your_google_maps_api_key_here
```

This key will automatically be injected into the native code for android.

- ✅ Android: Key is auto-injected into `AndroidManifest.xml`
- ✅ iOS: Key is read at runtime from `.env`

 

---

## 🛠 Installation

```bash
# Install dependencies
yarn install

# OR if you use npm
npm install
```

---

## 📱 Running the App

### Start Metro

```bash
# With yarn
yarn start

# OR with npm
npm start
```

### Run on Android

```bash
yarn android
# OR
npm run android
```

### Run on iOS

```bash
cd ios && pod install && cd ..
yarn ios
```

---

## 🧼 Code Style & Structure

- `hooks/`: Custom hooks (`usePlaceSearch`, etc.)
- `components/`: Fully reusable, memoized components
- `navigation/`: Typed stack navigator configuration
- `screens/`: UI screens (MapScreen, DetailsScreen)
- `utils/`: Helpers like coordinate formatting, theme, etc.

---

## 📂 Folder Structure

```
src/
├── components/
├── hooks/
├── navigation/
├── screens/
├── utils/
└── App.tsx
```

---

## 👨‍💻 Developer Notes

- All components are wrapped with `React.memo` where needed to reduce re-renders.
- Logic-heavy parts (e.g., API fetch, marker animation, AsyncStorage logic) are extracted to hooks.
- Built with readability, reusability, and interview-readiness in mind.

---

## 📄 License

This project is for demo and interview purposes. You are free to fork and customize.

---
