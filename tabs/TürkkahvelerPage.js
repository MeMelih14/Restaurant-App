import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function TürkkahvelerPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Türk Kahveleri/Türk Kahvesi.jpg")}
                        price="100"
                        name="Türk Kahvesi"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Türk Kahveleri/Sütlü Türk Kahvesi.jpg")}
                        price="110"
                        name="Sütlü Türk Kahvesi"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Türk Kahveleri/Menengiç Kahvesi.png")}
                        price="120"
                        name="Menengiç Türk Kahvesi"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Türk Kahveleri/Dibek Kahvesi.jpg")}
                        price="120"
                        name="Dibek Kahvesi"
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
