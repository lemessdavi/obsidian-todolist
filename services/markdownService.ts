import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export interface TodoItem {
  text: string;
  completed: boolean;
}

export const parseMarkdown = (markdownContent: string): TodoItem[] => {
  const tokens = md.parse(markdownContent, {});
  const todos: TodoItem[] = [];

  tokens.forEach((token) => {
    if (token.type === 'inline' && token.children) {
      token.children.forEach((child, index) => {
        if (child.type === 'checkbox_open') {
          const nextChild = token.children![index + 1] ;
          if (nextChild && nextChild.type === 'text') {
            const todoText = nextChild.content;
            const isChecked = child.markup === '[x]';
            todos.push({ text: todoText, completed: isChecked });
          }
        }
      });
    }
  });

  return todos;
};