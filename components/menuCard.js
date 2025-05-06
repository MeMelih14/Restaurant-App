import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuCard({ image, name, price, onPress, buttonText = "Detaylar" }) {
    const [modalVisible, setModalVisible] = useState(false); // Gözat modalı için
    const [imageModalVisible, setImageModalVisible] = useState(false); // Resim modalı için

    // Resme tıklandığında çalışacak fonksiyon
    const handleImagePress = () => {
        setImageModalVisible(true); // Resim modalını aç
    };

    // Resmi kapatmak için fonksiyon
    const handleCloseImageModal = () => {
        setImageModalVisible(false); // Resim modalını kapat
    };

    // Gözat butonuna tıklanıldığında yapılacak işlemi buraya yazabilirsiniz
    const handlePress = () => {
        setModalVisible(true); // Gözat modalını aç
    };

    const handleCloseModal = () => {
        setModalVisible(false); // Gözat modalını kapat
    };

    return (
        <>
            <View style={styles.card}>

                <TouchableOpacity onPress={handleImagePress}>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.image} resizeMode="cover" />
                        <View style={styles.priceTag}>
                            <Text style={styles.priceText}>{price} TL</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                        <Ionicons name="restaurant-outline" size={18} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>


            <Modal
                animationType="fade"
                transparent={true}
                visible={imageModalVisible}
                onRequestClose={handleCloseImageModal}
            >
                <TouchableWithoutFeedback onPress={handleCloseImageModal}>
                    <View style={styles.imageModalOverlay}>
                        <View style={styles.imageModalContent}>
                            <TouchableOpacity onPress={handleCloseImageModal} style={styles.closeButton}>
                                <Ionicons name="close" size={24} color="black" style={styles.closeButtonText}/>
                            </TouchableOpacity>
                            <Image source={image} style={styles.imageModal} resizeMode="contain" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <TouchableWithoutFeedback onPress={handleCloseModal}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>×</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>{name}</Text>
                            <Text style={styles.modalunderText}>{onPress}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        width: '48%', // Her card'ın genişliğini %48 yaparak 2 card'ı yan yana yerleştiriyoruz.
        marginHorizontal: '1%', // Aralarındaki boşluğu açıyoruz.
        justifyContent: 'space-between',

    },

    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 100,
    },
    priceTag: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    priceText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    content: {
        padding: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: '600',
        textAlign:'center',

    },
    button: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Arka plan şeffaf olacak şekilde koyu yapıldı
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
    },
    imageModalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Arka plan şeffaf olacak şekilde koyu yapıldı
    },
    imageModalContent: {
        width: '90%',
        alignItems: 'center',
    },
    imageModal: {
        width: '100%',
        height: '80%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent', // Çarpı işaretinin arka planı şeffaf
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
    },
    closeButtonText: {
        fontSize: 30, // Çarpı işaretini büyük yapıyoruz
        color: '#000', // Çarpı siyah olacak
    },
    modalunderText: {
        fontSize: 18,
        color: '#000', // Gözat ve name metinleri siyah olacak
        marginBottom: 20,
        textAlign: 'center', // Metin ortalanacak
    },
    modalText: {
        fontSize: 18,
        color: '#000', // Gözat ve name metinleri siyah olacak
        marginBottom: 20,
        textAlign: 'center', // Metin ortalanacak
        fontWeight: 'bold',
    }
});