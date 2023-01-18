import { ElectronAPI } from '../electron/preload/types'

declare global {
  interface Window {
    electronAPI: any;
  }
}