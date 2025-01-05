import TodoList from '@/components/TodoList';
import { parseMarkdown } from '@/services/markdownService';
import { readMarkdownFile, writeMarkdownFile } from '@/utils/fileUtils';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const HomeScreen: React.FC = () => {
  const [todos, setTodos] = useState<ParsedTodoItem[]>([]);
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync();
      if (!res.canceled) {
        setFileUri(res.assets[0].uri);
        loadTodos(res.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick a file.');
    }
  };

  const loadTodos = async (uri: string) => {
    setLoading(true);
    try {
      const content = await readMarkdownFile(uri);
      console.log('Content:', content);
      const extractedTodos = parseMarkdown(content);
      setTodos(extractedTodos);
    } catch (error) {
      Alert.alert('Error', 'Failed to load to-dos.');
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    syncChanges(updatedTodos);
  };

  const syncChanges = async (updatedTodos: ParsedTodoItem[]) => {
    if (!fileUri) return;
    try {
      let content = '';
      updatedTodos.forEach((todo) => {
        const checkbox = todo.completed ? '- [x] ' : '- [ ] ';
        content += `${checkbox}${todo.text}\n`;
      });
      await writeMarkdownFile(fileUri, content);
    } catch (error) {
      Alert.alert('Error', 'Failed to sync changes.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Markdown File" onPress={selectFile} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <>
          {fileUri && <Text style={styles.fileUri}>File: {fileUri}</Text>}
          <TodoList todos={todos} onToggle={toggleTodo} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loader: {
    marginTop: 20,
  },
  fileUri: {
    marginVertical: 10,
    fontStyle: 'italic',
    color: '#555',
  },
});

export default HomeScreen;