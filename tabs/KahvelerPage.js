import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';
export default function KahvaltiPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Single Espresso.jpg")}
                        price="100"
                        name="Single Espresso"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Double Espresso.jpg")}
                        price="150"
                        name="Double Espresso"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Cappucino.jpg")}
                        price="150"
                        name="Cappucino"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Cafe Latte.jpg")}
                        price="150"
                        name="Cafe Latte"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Filtre Kahve.jpg")}
                        price="130"
                        name="Filtre Kahve"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Americano.jpg")}
                        price="120"
                        name="Americano"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Espresso Affogato.jpg")}
                        price="130"
                        name="Espresso Affogato"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/White Chocolate Mocha.jpg")}
                        price="160"
                        name="White Chocolate Mocha"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Nescafe.jpg")}
                        price="100"
                        name="Nescafe"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahveler/Sütlü Nescafe.jpg")}
                        price="120"
                        name="Sütlü Nescafe"
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
        flexWrap: 'nowrap', // Kartlar sığmazsa alt satıra geçsin
        width: '100%', // Row'un genişliği tam ekran olmalı
        gap: 10,
    },
});
