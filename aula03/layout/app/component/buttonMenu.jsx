import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ButtonMenu() {
  const router = useRouter();

  return (
    <View style={styles.menu}>
      <Pressable
        onPress={() => router.push('/')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Text style={styles.menuText}>🏠 Início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  menuText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
