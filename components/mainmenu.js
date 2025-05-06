import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainCard({ menuLogo, menuText, nextPage }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate(nextPage)}>
                <ImageBackground
                    source={menuLogo}
                    style={styles.image}
                    imageStyle={styles.imageBorder}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.text}>{menuText}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        width: '100%',
        height: 200,
        marginBottom: 20,

    },
    touchable: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBorder: {
        borderRadius: 12,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
