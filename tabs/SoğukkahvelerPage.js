import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function SoğukkahvelerPage() {

    return (
        <ScrollView>
            <SlideNavbar

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Soğuk Kahveler/Ice Americano.jpg")}
                        price="150"
                        name="Ice Americano"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Soğuk Kahveler/Ice Latte.jpg")}
                        price="180"
                        name="Ice Latte"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Soğuk Kahveler/Ice Mocha.jpg")}
                        price="200"
                        name="Ice Mocha"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Soğuk Kahveler/Frappe.jpg")}
                        price="180"
                        name="Frappe"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Soğuk Kahveler/Ice White Chocolate Mocha.jpg")}
                        price="200"
                        name="Ice White Chocolate Mocha"
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
