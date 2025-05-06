import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function LimonatalarPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Limonatalar/Klasik Limonata.jpg")}
                        price="130"
                        name="Klasik Limonata"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Limonatalar/Çilekli Limonata.jpg")}
                        price="150"
                        name="Çilekli Limonata"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Limonatalar/Karpuzlu Limonata.jpg")}
                        price="150"
                        name="Karpuzlu Limonata"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Limonatalar/Naneli Limonata.jpg")}
                        price="150"
                        name="Naneli Limonata"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Limonatalar/Orman Meyveli Limonata.jpg")}
                        price="150"
                        name="Orman Meyveli Limonata"
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
