import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function AnayemeklerPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Izgara Köfte.jpg")}
                        price="320"
                        name="Izgara Köfte"
                        onPress="Izgara Köfte, Pirinç Pilavı, Patates Kızartması, Salata"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Kaşarlı Köfte.jpg")}
                        price="330"
                        name="Kaşarlı Köfte"
                        onPress="Kaşarlı Köfte, Pirinç Pilavı, Patates Kızartması, Salata"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Tavuk Sote.jpg")}
                        price="320"
                        name="Tavuk Sote"
                        onPress="Tavuk Sote, Pirinç Pilavı, Patates Kızartması"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Kiremitte Köfte.jpg")}
                        price="300"
                        name="Kiremitte Köfte"
                        onPress="Köfte, Domates Sosu, Domates Biber , Mozerella"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Şinitzel.jpg")}
                        price="220"
                        name="Şinitzel"
                        onPress="Kızartılmış Tavuk Bonfile, Pirinç Pilavı, Patates Kızartması, Salata"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Ana yemekler/Tavuk Pirzola.jpg")}
                        price="300"
                        name="Tavuk Pirzola"
                        onPress="Tavuk Pirzola Izgara, Pirinç Pilavı, Patates Kızartması ve Salata eşliğinde.."
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
        flexWrap: 'nowrap', // Kartlar sığmazsa alt satıra geçsin
        width: '100%', // Row'un genişliği tam ekran olmalı
        gap: 10,
    },
});
