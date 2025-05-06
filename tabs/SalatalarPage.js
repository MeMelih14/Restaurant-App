import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function SalatalarPage() {

    return (
        <ScrollView>
            <SlideNavbar

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Çoban Salata.jpg")}
                        price="180"
                        name="Çoban Salata"
                        onPress="Domates, Salatalık, Soğan, Biber, Maydanoz"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Mevsim Salata.jpg")}
                        price="190"
                        name="Mevsim Salata"
                        onPress="Göbek, Domates, Salatalık, Havuç, Mor Lahana, Mısır, Maydanoz"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Ton Balıklı Salta.jpg")}
                        price="220"
                        name="Ton Balıklı Salata"
                        onPress="Ton Balığı, Domates, Salatalık, Kıvırcık, Zeytin, Mısır, Havuç"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Akdeniz Salata.jpg")}
                        price="220"
                        name="Akdeniz Salata"
                        onPress="Göbek, Domates, Salatalık, Zeytin, Beyaz Peynir, Maydanoz"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Sezar Salata.jpg")}
                        price="250"
                        name="Sezar Salata"
                        onPress="Tavuk Dilimleri, Sezar Sos, Salatalık, Domates, Göbek, Kroton Ekmek"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Salatalar/Bonfile Salata.jpg")}
                        price="280"
                        name="Bonfile Salata"
                        onPress="Tavuk dilimleri,Domates, Salatalık, Göbek, Havuç, Mor Lahana"
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
