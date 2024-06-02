import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import mainStyles from '@/styles/style';
import { router } from 'expo-router';
import { StyleSheet, Image, View, TouchableOpacity, Pressable } from 'react-native';

const menu = [
  {
    title: 'ABOUT',
    route: '/biodata',
  },
  {
    title: 'GALLERY',
    route: '/galeri',
  },
  {
    title: 'CONTACT',
    route: '/kontak',
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={mainStyles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Hi, Welcome</ThemedText>
        <HelloWave />
      </View>

      <Image
        source={require('@/assets/images/profile.jpeg')}
        resizeMode="contain"
        style={mainStyles.image}
      />

      <View>
        {
          menu.map((item) => (
            <View key={item.route} style={styles.stepContainer}>
                <Pressable
                  style={({ pressed }) => [
                    { opacity: pressed ? 0.5 : 1},
                    mainStyles.buttonRedirect
                  ]}
                  onPress={() => router.push(item.route)}
                >
                  <ThemedText type="subtitle">{item.title}</ThemedText>
                </Pressable>
            </View>
          ))
        }
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
});
