import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function SlideNavbar() {
    const navigation = useNavigation();
    const route = useRoute(); // ← aktif sayfanın route bilgisi

    const currentPage = route.name; // ← aktif sayfanın adı

    const data = [
        {
            name: 'Kahvaltılar',
            image: require('../assets/menuphotos/kahvaltılar.jpg'),
            nextPage: 'Kahvaltılar',
            visible: true
        },
        {
            name: 'Ana Yemekler',
            image: require('../assets/menuphotos/anayemekler.jpg'),
            nextPage: 'Ana Yemekler',
            visible: true
        },
        {
            name: 'Arasıcaklar',
            image: require('../assets/menuphotos/arasıcaklar.jpg'),
            nextPage: 'Ara Sıcaklar',
            visible: true
        },

        {
            name: 'Makarnalar',
            image: require('../assets/menuphotos/makarnalar.jpg'),
            nextPage: 'Makarnalar',
            visible: true
        },
        {
            name: 'Salatalar',
            image: require('../assets/menuphotos/salatalar.jpg'),
            nextPage: 'Salatalar',
            visible: true
        },
        {
            name: 'Tatlılar & Pastalar',
            image: require('../assets/menuphotos/tatlilar.jpg'),
            nextPage: 'Tatlılar & Pastalar',
            visible: true
        },
        {
            name: 'Çay & Bitki Çayları',
            image: require('../assets/menuphotos/çay.jpg'),
            nextPage: 'Çay & Bitki Çayları',
            visible: true
        },
        {
            name: 'Türk Kahveleri',
            image: require('../assets/menuphotos/türkkahveleri.jpg'),
            nextPage: 'Türk Kahveleri',
            visible: true
        },
        {
            name: 'Kahveler',
            image: require('../assets/menuphotos/kahveler.jpg'),
            nextPage: 'Kahveler',
            visible: true
        },
        {
            name: 'Soğuk Kahveler',
            image: require('../assets/menuphotos/soğukkahveler.jpg'),
            nextPage: 'Soğuk Kahveler',
            visible: true
        },
        {
            name: 'Milkshake',
            image: require('../assets/menuphotos/milkshake.jpg'),
            nextPage: 'Milkshake',
            visible: true
        },
        {
            name: 'Limonatalar',
            image: require('../assets/menuphotos/limonatalar.jpg'),
            nextPage: 'Limonatalar',
            visible: true
        },
        {
            name: 'Dondurmalar',
            image: require('../assets/menuphotos/dondurmalar.jpg'),
            nextPage: 'Dondurmalar',
            visible: true
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {data
                    .filter(item => item.visible !== false && item.nextPage !== currentPage)
                    .map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.card}
                            onPress={() => navigation.navigate(item.nextPage)}
                        >
                            <Image source={item.image} style={styles.imageContainer} />
                            <Text style={styles.cardTitle}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        padding: 10,
        backgroundColor: '#030617',
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 150,
        maxHeight: 200,
        marginRight: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    imageContainer: {
        width: 150,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        padding: 5,
    },
});
