import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function MilkshakePage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Çikolatalı Milkshake.jpg")}
                        price="190"
                        name="Çikolatalı Milkshake"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Çilekli Milkshake.jpg")}
                        price="190"
                        name="Çilekli Milkshake"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Karamelli Milkshake.jpg")}
                        price="190"
                        name="Karamelli Milkshake"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Vanilyalı Milkshake.png")}
                        price="190"
                        name="Vanilyalı Milkshake"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Muzlu Milkshake.jpg")}
                        price="190"
                        name="Muzlu Milkshake"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Milkshakeler/Smothie.jpg")}
                        price="190"
                        name="Smothie"
                        onPress=""
                    />

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#030617',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, // Kartların arasında biraz boşluk olması için
    },
    text: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20, // Başlık ile kartlar arasında boşluk
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center', // Kartlar arasındaki boşluk
        flexWrap: 'nowrap', // Kartlar sığmazsa alt satıra geçsin
        width: '100%', // Row'un genişliği tam ekran olmalı
        gap: 10,
    },
});
