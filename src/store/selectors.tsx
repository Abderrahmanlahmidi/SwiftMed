import type { RootState } from "./store";

export const selectIsOpen = (state: RootState): boolean =>
  state.isOpenClose.isOpen;
