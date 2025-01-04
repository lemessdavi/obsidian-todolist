import * as FileSystem from 'expo-file-system';

export const readMarkdownFile = async (fileUri: string): Promise<string> => {
  try {
    const content = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    return content;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
};

export const writeMarkdownFile = async (fileUri: string, content: string): Promise<boolean> => {
  try {
    await FileSystem.writeAsStringAsync(fileUri, content, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    return true;
  } catch (error) {
    console.error('Error writing file:', error);
    throw error;
  }
};