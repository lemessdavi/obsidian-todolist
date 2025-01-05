import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Use This App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.instructions}>
        1. <Text style={styles.highlight}>Select a Markdown File</Text>: Tap on the <Text style={styles.bold}>"Select Markdown File"</Text> button to choose a <Text style={styles.code}>.md</Text> file from your device that contains your to-do items.
      </Text>

      <Text style={styles.instructions}>
        2. <Text style={styles.highlight}>View Your To-Dos</Text>: Once selected, the app will display your to-do items in an <Text style={styles.bold}>interactive list</Text> where you can easily manage them.
      </Text>

      <Text style={styles.instructions}>
        3. <Text style={styles.highlight}>Manage Your Tasks</Text>: Toggle the completion status of your tasks by tapping on them. The changes will automatically <Text style={styles.bold}>sync back</Text> to your original Markdown file in Obsidian.
      </Text>

      <Text style={styles.instructions}>
        4. <Text style={styles.highlight}>Organize Efficiently</Text>: Use the app to keep track of personal, work, house chores, and miscellaneous tasks all in one place. Enjoy features like <Text style={styles.bold}>dark mode</Text> for a comfortable user experience.
      </Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  instructions: {
    fontSize: 14,
    marginVertical: 5,
    lineHeight: 20,
    maxWidth: 400,
  },
  bold: {
    fontWeight: 'bold',
  },
  highlight: {
    color: '#1e90ff',
  },
  code: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    backgroundColor: '#942929',
    padding: 2,
    borderRadius: 4,
  },
});