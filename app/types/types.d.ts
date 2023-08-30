export {};

declare global {
  interface Program {
    id: string;
    name: string;
    isOpen: boolean;
    isFocused: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
  }
}
