
import FixedExpenses from "./Expenses/FixedExpenses";


import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Home";



type RootStackParamList = {
  Home: undefined;
  FixedExpenses: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
  
  <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FixedExpenses" component={FixedExpenses} />
    </Stack.Navigator>

  );
}
