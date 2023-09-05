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

declare global {
  interface Message {
    type: string;
    text: string;
  }
}

declare global {
  interface Wink {
    isPlaying: boolean;
    name: string;
  }
}
