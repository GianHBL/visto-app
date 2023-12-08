//Basic Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Pages Imports
import Welcome from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Tabs from './tabs';


//Constants
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

