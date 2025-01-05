import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Themed';

interface TodoItemProps {
  todo: {
    text: string;
    completed: boolean;
  };
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onToggle}>
      <Text style={[styles.text, todo.completed && styles.completed]} >
        {todo.completed ? '✅' : '⬜'} {todo.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoItem;