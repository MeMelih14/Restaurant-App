import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';
import Navbar from '../components/navbar.js';
export default function ÇaylarPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Çay.jpg")}
                        price="30"
                        name="Çay"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Fincan Çay.jpg")}
                        price="50"
                        name="Fincan Çay"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Kivi Çayı.jpg")}
                        price="60"
                        name="Kivi Çayı"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Ihlamur.jpg")}
                        price="100"
                        name="Ihlamur"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Papatya Çayı.jpg")}
                        price="100"
                        name="Papatya Çayı"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Kış Çayı.jpg")}
                        price="100"
                        name="Kış Çayı"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Limonlu Melisa.jpg")}
                        price="100"
                        name="Yeşil Çay"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Karadut Çayı.jpg")}
                        price="75"
                        name="Karadut Çayı"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Limonlu Melisa.jpg")}
                        price="100"
                        name="Limonlu Melisa"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Çaylar/Nane Limon.jpg")}
                        price="100"
                        name="Nane Limon"
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
