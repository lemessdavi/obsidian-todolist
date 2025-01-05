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
    if (token.type === 'list_item_open') {
      const inlineToken = tokens[tokens.indexOf(token) + 2]; // Skipping 'paragraph_open' and accessing 'inline'

      if (inlineToken && inlineToken.type === 'inline') {
        const content = inlineToken.content.trim();

        // Regular expression to match [x] or [ ] at the beginning
        const todoRegex = /^\[(x| )\]\s+(.*)/i;
        const match = content.match(todoRegex);

        if (match) {
          const isChecked = match[1].toLowerCase() === 'x';
          const todoText = match[2].trim();

          todos.push({ text: todoText, completed: isChecked });
        }
      }
    }
  });

  return todos;
};