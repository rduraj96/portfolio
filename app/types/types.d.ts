export {};

declare global {
  interface Program {
    name: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    isFocused: boolean;
  }
}
