import { ReactNode } from "react";
import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

interface ConfirmData {
  title?: string;
  message: string;
  notice?: string;
  rewriteValue?: string;
  isDelete?: boolean;
  children?: ReactNode;
  apiCall: (data?: { name: string }) => Promise<void>;
}

interface UIStore {
  showRootLoading: boolean;
  sidebarCollapsed: boolean;
  showConfirm: boolean;
  confirmData?: ConfirmData;
  setConfirmData: (confirmData?: ConfirmData) => void;
  setShowConfirm: (isOpen: boolean) => void;
  setShowRootLoading: (isLoading: boolean) => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>()(
  devtools(
    persist(
      (set, get) => ({
        showRootLoading: true,
        sidebarCollapsed: false,
        showConfirm: false,
        confirmData: undefined,
        setConfirmData: (confirmData) => set(() => ({ confirmData })),
        setShowConfirm: (isOpen) => {
          set({ showConfirm: isOpen });
          if (!isOpen) {
            get().setConfirmData(undefined);
          }
          return;
        },
        setShowRootLoading: (isLoading) => set(() => ({ showRootLoading: isLoading })),
        toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      }),
      {
        name: "uiStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
