# 📱 Prata — React Native

The mobile version of *Prata*, a Swedish-learning app with three tabs: **Chat**, **Vocab** and **Quiz**. Built with **React Native** (CLI, TypeScript) and **React Navigation**. Currently a UI prototype.

> Part of the *Prata* family: [prata-React](https://github.com/lagoanadia/prata-React) (web), [Prata-Python](https://github.com/lagoanadia/Prata-Python) (desktop), [JFXML](https://github.com/lagoanadia/JFXML) (JavaFX) and [Prata-tracker](https://github.com/lagoanadia/Prata-tracker) (study log).

## 📁 Project Structure

```
├── App.tsx              → NavigationContainer + bottom tab navigator
├── index.js             → App registration
├── screens/
│   ├── ChatScreen.tsx   → Chat screen with message input
│   ├── VocabScreen.tsx  → Scrollable vocabulary list + input to add words
│   └── QuizScreen.tsx   → Quiz screen with answer input
├── android/  ios/       → Native projects
├── __tests__/App.test.tsx → Jest render test
└── package.json         → React Native 0.85, React Navigation 7, vector icons
```

## 🚀 How It Works

### Bottom tabs with React Navigation

`App.tsx` wraps everything in a `NavigationContainer` and declares one `Tab.Screen` per section. The icon for each tab is chosen from the route name inside `screenOptions`:

```tsx
tabBarIcon: ({ color, size }) => {
  let iconName = 'chat';
  if (route.name === 'Vocab') iconName = 'menu-book';
  if (route.name === 'Quiz') iconName = 'quiz';
  return <MaterialIcon name={iconName} size={size} color={color} />;
},
```

### Dark theme

Tab bar and header share a dark palette (`#0d0d0d` background, white active tint, grey inactive).

### Native components instead of HTML

Screens use `View`, `Text`, `TextInput`, `TouchableOpacity` and `ScrollView`, styled with `StyleSheet.create`.

## 🧠 Key Concepts

- **React Native core components** — `View`, `Text`, `TextInput`, `ScrollView`
- **React Navigation** — `createBottomTabNavigator`, `screenOptions`, route-based icons
- **`react-native-vector-icons`** — Material icons
- **`StyleSheet`** — styling without CSS
- **React Native CLI** — Metro bundler, Android/iOS builds

## 🛠️ How To Run

Requires a configured React Native environment (Node, JDK, Android Studio / Xcode).

```bash
npm install
```

```bash
npm start
```

In another terminal:

```bash
npm run android
```
