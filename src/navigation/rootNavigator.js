import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Main from '../screens/Main';
import SecondScreen from '../screens/SecondScreen';


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;