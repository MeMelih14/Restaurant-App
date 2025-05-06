import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import MainMenu from '../components/mainmenu';
import { useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToDetail = (menuText) => {
    navigation.navigate('MenuDetail', { menuText }); // Detay sayfasına veri gönder
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <MainMenu
          menuLogo={require('../assets/menuphotos/kahvaltılar.jpg')}
          menuText="Kahvaltılar"
          nextPage="Kahvaltılar"
        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/anayemekler.jpg')}
          menuText="Ana Yemekler"
          nextPage="Ana Yemekler"
        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/arasıcaklar.jpg')}
          menuText="Arasıcaklar"
          nextPage="Ara Sıcaklar"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/makarnalar.jpg')}
          menuText="Makarnalar"
          nextPage="Makarnalar"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/salatalar.jpg')}
          menuText="Salatalar"
          nextPage="Salatalar"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/tatlilar.jpg')}
          menuText="Tatlılar & Pastalar"
          nextPage="Tatlılar & Pastalar"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/çay.jpg')}
          menuText="Çay & Bitki Çayları"
          nextPage="Çay & Bitki Çayları"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/türkkahveleri.jpg')}
          menuText="Türk Kahveleri"
          nextPage="Türk Kahveleri"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/kahveler.jpg')}
          menuText="Kahveler"
          nextPage="Kahveler"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/soğukkahveler.jpg')}
          menuText="Soğuk Kahveler"
          nextPage="Soğuk Kahveler"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/milkshake.jpg')}
          menuText="Milkshake"
          nextPage="Milkshake"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/limonatalar.jpg')}
          menuText="Limonatalar"
          nextPage="Limonatalar"

        />
        <MainMenu
          menuLogo={require('../assets/menuphotos/dondurmalar.jpg')}
          menuText="Dondurmalar"
          nextPage="Dondurmalar"

        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,

    backgroundColor: '#030617',

  },
  scroll: {
    paddingHorizontal: 10,

    paddingTop: 20,

  },
});
