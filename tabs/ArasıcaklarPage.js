import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function ArasıcaklarPage() {


    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Parmak Patates.jpg")}
                        price="140"
                        name="Parmak Patates"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Elma Dilim Patates.jpg")}
                        price="140"
                        name="Elma Dilim Patates"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Double Elma Dilim ve Parmak Patates.jpg")}
                        price="250"
                        name="Double Elma Dilim ve Parmak Patates"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/12'li Soğan Halkası.jpeg")}
                        price="120"
                        name="12'li Soğan Halkası"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Sosis Tabağı.jpg")}
                        price="160"
                        name="Sosis Tabağı"
                        onPress="Patates Kızartması ve 6'lı Sosis Eşliğinde..."
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Sigara Böreği.jpeg")}
                        price="150"
                        name="Sigara Böreği"
                        onPress="Patates Kızartması ve 6'lı Sigara Böreği Eşliğinde..."
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Kombo Mix.jpeg")}
                        price="240"
                        name="Kombo Mix"
                        onPress="Patates Kızartması, 4'lü Soğan Halkası, 4'lü Sosis, 4'lü Sigara Böreği, 4’lü Nugget Eşliğinde... "
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Nugget Sepeti.jpeg")}
                        price="180"
                        name="Nugget Sepeti"
                        onPress="Patates Kızartması ve 6'lı Nugget Eşliğinde..."
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Patso.jpg")}
                        price="110"
                        name="Patso"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Arasıcaklar/Ekmek Arası Köfte.jpg")}
                        price="190"
                        name="Ekmek Arası Köfte"
                        onPress="Yarım Ekmek Arası Köfte, Domates, Marul ve Soğan Eşliğinde.."
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
