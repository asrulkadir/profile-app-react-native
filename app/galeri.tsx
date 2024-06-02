import { ThemedText } from '@/components/ThemedText';
import { Image, StyleSheet, View , ScrollView, Modal, Button, TouchableOpacity, Text, Pressable} from 'react-native';
import { Link, router } from 'expo-router';
import mainStyles from '@/styles/style';
import { useState } from 'react';

const galeries = [
  {
    title: 'Picture 1',
    image: require('@/assets/images/foto1.jpeg'),
  },
  {
    title: 'Picture 2',
    image: require('@/assets/images/foto2.jpeg'),
  },
  {
    title: 'Picture 3',
    image: require('@/assets/images/foto3.jpeg'),
  },
  {
    title: 'Picture 4',
    image: require('@/assets/images/foto4.jpeg'),
  },
  {
    title: 'Picture 5',
    image: require('@/assets/images/foto5.jpeg'),
  },
];

export default function GalleryScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImagePress = (image: string) => {
    setSelectedImage(image);
    setModalVisible(true);
  }

  return (
    <ScrollView contentContainerStyle={mainStyles.container}>
      <ThemedText type='title'>Gallery</ThemedText>

      <Image
        source={require('@/assets/images/profile.jpeg')}
        resizeMode="contain"
        style={mainStyles.image}
      />

      <View style={styles.imageContainer}>
        {
          galeries.map((item) => (
            <View key={item.title}>
              <TouchableOpacity onPress={() => handleImagePress(item.title)}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.image}
                />
              </TouchableOpacity>
              <ThemedText style={styles.labelImage}>{item.title}</ThemedText>
            </View>
          ))
        }
      </View>

      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1},
          mainStyles.buttonRedirect
        ]}
        onPress={() => router.back()}
      >
        <ThemedText type="subtitle">Back</ThemedText>
      </Pressable>

      {selectedImage && 
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.fullscreenView}>
            <Image
              source={galeries.find((item) => item.title === selectedImage)?.image}
              resizeMode="contain"
              style={styles.fullscreenImage}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  labelImage: {
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor:'#006effff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  fullscreenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
