import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import VocabScreen from './screens/VocabScreen';
import QuizScreen from './screens/QuizScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#0d0d0d', borderTopColor: '#222' },
          headerStyle: { backgroundColor: '#0d0d0d' },
          headerTintColor: '#ffffff',
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#555',
          tabBarIcon: ({ color, size }) => {
            let iconName = 'chat';
            if (route.name === 'Vocab') iconName = 'menu-book';
            if (route.name === 'Quiz') iconName = 'quiz';
            return <MaterialIcon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Vocab" component={VocabScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;