import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/menuCard';
import SlideNavbar from '../components/slideNavbar';

export default function DondurmalarPage() {

    return (
        <ScrollView>
            <SlideNavbar 

            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <MainMenu
                        image={require("../assets/menucontents/Dondurmalar/Top Dondurma.jpg")}
                        price="60"
                        name="Top Dondurma"
                        onPress="İsteğe Bağlı 1 Top Dondurma"
                    />
                    <MainMenu
                        image={require("../assets/menucontents/Dondurmalar/Porsiyon Dondurma.jpg")}
                        price="200"
                        name="Porsiyon Dondurma"
                        onPress="5 Top İsteğe Bağlı (Vanilya, Kakao, Çilek, Karamel, Muz)"
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
