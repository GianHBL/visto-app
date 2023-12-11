//Basic Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Pages Imports
import Welcome from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Tabs from './tabs';
import NovoProprietario from '../pages/novoProprietario/novoProprietario';
import NovoEnderecoProprietario from '../pages/novoEnderecoProprietario/novoEnderecoProprietario';
import { ScreenStack } from 'react-native-screens';


//Constants
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name= "NovoProprietario" component={NovoProprietario} options={{ headerShown: false }} />
            <Stack.Screen name= "NovoEnderecoProprietario" component={NovoEnderecoProprietario} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

