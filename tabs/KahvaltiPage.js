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
                        image={require("../assets/menucontents/Kahvaltılar/KahvaltıTabağı.jpg")}
                        price="290"
                        name="Kahvaltı Tabağı"
                        onPress="Beyaz Peynir, Dilim Kaşar, Domates, Salatalık, Zeytin, Haşlanmış Yumurta, Reçel, Bal, Kaymak, Patates Kızartması, Salam"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/SerpmeKahvaltı.jpg")}
                        price="700"
                        name="Serpme Kahvaltı 2 Kişilik"
                        onPress="Kahvaltı Yanında Bir Termos Çay İkramımızdır."
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/SadeOmlet.jpg")}
                        price="100"
                        name="Sade Omlet"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/PeynirliOmlet.jpg")}
                        price="110"
                        name="Peynirli Omlet"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/SahandaYumurta.jpg")}
                        price="90"
                        name="Sahanda Yumurta"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/SucukluYumurta.jpg")}
                        price="110"
                        name="Sucuklu Yumurta"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/KavurmalıYumurta.jpg")}
                        price="150"
                        name="Kavurmalı Yumurta"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/Menemen.jpg")}
                        price="140"
                        name="Menemen"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/KaşarlıMenemen.jpg")}
                        price="160"
                        name="Kaşarlı Menemen"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/SucukluMenemen.jpg")}
                        price="170"
                        name="Sucuklu Menemen"
                        onPress=""
                    />

                </View>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/KarışıkMenemen.jpg")}
                        price="180"
                        name="Karışık Menemen"
                        onPress=""
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Kahvaltılar/KavurmalıMenemen.jpeg")}
                        price="190"
                        name="Kavurmalı Menemen"
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
        padding: 10, 
    },
    text: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 2,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        gap: 10,
    },
});
