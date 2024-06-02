import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, View } from 'react-native';
import { Link, router } from 'expo-router';
import mainStyles from '@/styles/style';
import { Pressable } from 'react-native';

export default function AboutScreen() {
  return (
    <ThemedView style={mainStyles.container}>
      <ThemedText type="title">About Me</ThemedText>

      <Image
        source={require('@/assets/images/profile.jpeg')}
        resizeMode="contain"
        style={mainStyles.image}
      />

      <View style={styles.wrapper}>
        <ThemedText>Nama: Ahmad Ali</ThemedText>
        <ThemedText>TTL: Kendari, 25 Juni 2001</ThemedText>
        <ThemedText>Hobi: Bilas Muka, Gosok Gigi, Evaluasi</ThemedText>
        <ThemedText>Motto: Jadi orang penting memang baik, tapi jadi orang baik lebih penting</ThemedText>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
