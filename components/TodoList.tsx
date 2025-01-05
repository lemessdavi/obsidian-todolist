// components/TodoList.tsx

import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: {
    text: string;
    completed: boolean;
  }[];
  onToggle: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TodoItem
          todo={item}
          onToggle={() => onToggle(index)}
        />
      )}
    />
  );
};

export default TodoList;