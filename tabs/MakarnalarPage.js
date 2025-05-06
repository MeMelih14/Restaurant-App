import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';

export default function MakarnalarPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Ev Mantısı.jpg")}
                        price="200"
                        name="Ev Mantısı"
                        onPress="Ev Yapımı Mantı, Yoğurt, Tereyağlı Sos"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Arabiatta Soslu Makarna.jpg")}
                        price="220"
                        name="Arabiatta Soslu Makarna"
                        onPress="Domates Sosu, Zeytin, Penne Makarna"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Köri Soslu Mantarlı Makarna.jpeg")}
                        price="220"
                        name="Köri Soslu Mantarlı Makarna"
                        onPress="Tagliateli, Mantar, Köri Sosu"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Bolonez Soslu Spagetti.jpg")}
                        price="230"
                        name="Bolonez Soslu Spagetti"
                        onPress="Spagetti Makarna, Kıyma, Havuç, Domates Sosu"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Fettucine Alfredo (Tavuklu Mantarlı Makarna).jpg")}
                        price="240"
                        name="Fettucine Alfredo (Tavuklu Mantarlı Makarna)"
                        onPress="Tagliateli, Tavuk Dilimleri, Kırmızı ve Yeşil Biber, Mantar, Krema"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Pesto Soslu Makarna.jpeg")}
                        price="200"
                        name="Pesto Soslu Makarna"
                        onPress="Spagetti Makarna, Pesto Sosu"
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Makarnalar/Kavurmalı Penne.jpg")}
                        price="250"
                        name="Kavurmalı Penne"
                        onPress="Penne Makarna, Domates Sosu, Kavurma"
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
