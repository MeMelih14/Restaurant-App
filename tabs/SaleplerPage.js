import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function SaleplerPage() {

    return (
        <ScrollView>
            <SlideNavbar

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
                    />
                    <MainMenu
                        image={require("../assets/menuphotos/arasıcaklar.jpg")}
                        price="150"
                        name="Kuru Fasulye"
                        onPress="Kuru Fasulye Üstü Pilav"
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
