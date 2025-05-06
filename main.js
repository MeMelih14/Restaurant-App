import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import PagesNav from './navigation/PageNavigator';

function Main() {
    return (
        <NavigationContainer>
            <PagesNav />
        </NavigationContainer>
    );
}

registerRootComponent(Main);


