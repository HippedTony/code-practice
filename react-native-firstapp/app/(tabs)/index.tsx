import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
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

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Image
          style={styles.image}
          source={
            image ? { uri: image } : require('@/assets/images/react-logo.png')
          }
        />
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
