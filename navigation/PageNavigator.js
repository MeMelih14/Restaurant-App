import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../tabs/HomeScreen';
import KahvaltiPage from '../tabs/KahvaltiPage';
import AnayemeklerPage from '../tabs/AnayemeklerPage';
import ArasıcaklarPage from '../tabs/ArasıcaklarPage';
import MakarnalarPage from '../tabs/MakarnalarPage';
import SalatalarPage from '../tabs/SalatalarPage';
import TatlılarPage from '../tabs/TatlılarPage';
import ÇaylarPage from '../tabs/ÇaylarPage';
import TürkkahvelerPage from '../tabs/TürkkahvelerPage';
import KahvelerPage from '../tabs/KahvelerPage';
import SoğukkahvelerPage from '../tabs/SoğukkahvelerPage';
import MilkshakePage from '../tabs/MilkshakePage';
import LimonatalarPage from '../tabs/LimonatalarPage';
import DondurmalarPage from '../tabs/DondurmalarPage';

const Stack = createNativeStackNavigator();

export default function PagesNav() {

    const defaultOptions = (navigation) => ({
        headerRight: () => (
            <TouchableOpacity
                
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Nis Cafe' }],
                    });
                }}
            >
                <Ionicons name="home" size={28} color="#3b82f6" />
            </TouchableOpacity>
        ),
    });

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#030617' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
                contentStyle: { backgroundColor: '#030617' },
            }}
        >
            <Stack.Screen
                name="Nis Cafe"
                component={HomeScreen}
            />

            <Stack.Screen name="Kahvaltılar" component={KahvaltiPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Ana Yemekler" component={AnayemeklerPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Ara Sıcaklar" component={ArasıcaklarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Makarnalar" component={MakarnalarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Salatalar" component={SalatalarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Tatlılar & Pastalar" component={TatlılarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Çay & Bitki Çayları" component={ÇaylarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Türk Kahveleri" component={TürkkahvelerPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Kahveler" component={KahvelerPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Soğuk Kahveler" component={SoğukkahvelerPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Milkshake" component={MilkshakePage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Limonatalar" component={LimonatalarPage} options={({ navigation }) => defaultOptions(navigation)} />
            <Stack.Screen name="Dondurmalar" component={DondurmalarPage} options={({ navigation }) => defaultOptions(navigation)} />
        </Stack.Navigator>
    );
}
