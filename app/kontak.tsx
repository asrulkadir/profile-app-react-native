import { Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Fontisto';
import { Link, router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import mainStyles from '@/styles/style';
import { tintColorLight } from '@/constants/Colors';

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={mainStyles.container}>
      <ThemedText type="title">Contact</ThemedText>

      <Image
        source={require('@/assets/images/profile.jpeg')}
        resizeMode="contain"
        style={mainStyles.image}
      />

      <View style={styles.wrapper}>
        <View style={styles.subWrapper}>
          <Icons name="whatsapp" size={40} color="black" />
          <Text style={styles.text}>081231010590</Text>
        </View>
        <View style={styles.subWrapper}>
          <Icons name="instagram" size={50} color="black" />
          <Text style={styles.text}>ahmdaali_</Text>
        </View>
        <View style={styles.subWrapper}>
          <Icons2 name="email" size={50} color="black" />
          <Text style={styles.text}>ahmadaksol7@gmail.com</Text>
        </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  subWrapper: {
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 20,
  }
});
