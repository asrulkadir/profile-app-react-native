import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="index" />
      <Stack.Screen name="galeri" />
      <Stack.Screen name="biodata" />
      <Stack.Screen name="kontak" />
    </Stack>
  );
}
