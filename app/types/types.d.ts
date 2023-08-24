export {};

declare global {
  interface Program {
    id: string;
    name: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    isFocused: boolean;
  }
}
