import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!(await permissionResult).granted) {
      Alert.alert(
        'Permission required',
        'Permission to access the media library is required.',
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing is not available on your platform.');
      return;
    }

    await Sharing.shareAsync(image!);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('@/assets/images/iced-coffee.png')}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <Text style={styles.title}>Pick an image</Text>
          <TouchableOpacity onPress={pickImage}>
            <Image
              style={styles.image}
              source={
                image
                  ? { uri: image }
                  : require('@/assets/images/react-logo.png')
              }
            />
          </TouchableOpacity>

          {image ? (
            <TouchableOpacity style={styles.button} onPress={openShareDialog}>
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
