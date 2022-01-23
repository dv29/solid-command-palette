import { Store } from 'solid-js/store';

export type ActionsContext = Record<string, unknown>;

export type RunArgs = {
  actionId: Action['id'],
  actionsContext: ActionsContext;
};

export type Action = {
  id: string;
  title: string;
  subtitle?: string;
  /**
   * Keyboard Shortcut like `$mod+e`, `Shift+p`.
   */
  shortcut: string | null;
  run: (args: RunArgs) => void;
};

export type PartialAction = Partial<Action> & {
  id: Action['id'];
  title: Action['title'];
};

export type Actions = Record<Action['id'], Action>;

export type RootProps = {
  actions: Actions;
  actionsContext: ActionsContext;
};

export type StoreState = {
  visibility: 'opened' | 'closed';
  searchText: string;
  actions: Actions;
  actionsContext: ActionsContext;
};

export type StoreStateWrapped = Store<StoreState>;

export type StoreMethods = {
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
  setSearchText: (newValue: string) => void;
};

export type StoreContext = [StoreStateWrapped, StoreMethods];
