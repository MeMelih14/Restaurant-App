import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function TatlılarPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/San Sebastian.jpg")}
                        price="220"
                        name="San Sebastian"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/Ballı Cevizli.jpg")}
                        price="230"
                        name="Ballı Cevizli"
                        onPress="Dondurma ile servis edilir. "
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/Ballı Fıstıklı.jpg")}
                        price="230"
                        name="Ballı Fıstıklı"
                        onPress="Dondurma ile servis edilir."
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/Profiterollü Pasta.jpg")}
                        price="190"
                        name="Profiterollü Pasta"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/Kalp Pasta.jpg")}
                        price="200"
                        name="Kalp Pasta"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Tatlılar/Frambuazlı Cheesecake.jpg")}
                        price="180"
                        name="Frambuazlı Cheesecake"
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
