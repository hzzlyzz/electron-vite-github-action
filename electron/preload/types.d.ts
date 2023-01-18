type voidFn = () => void;

export interface ElectronAPI {
  setTitle: (title: string) => void;
  openFile: () => Promise<string>;
  min: voidFn;
  full: voidFn;
  close: voidFn;
}