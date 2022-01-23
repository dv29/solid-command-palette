import { Store } from 'solid-js/store';

export type ActionsContext = Record<string, unknown>;

export type RunArgs = {
  actionsContext: ActionsContext;
};

export type Action = {
  id: string;
  /**
   * Keyboard Shortcut like `$mod + E`, `Shift + P`.
   */
  shortcut: string | null;
  run: (args: RunArgs) => void;
};

export type PartialAction = Partial<Action>;

export type Actions = Record<Action['id'], Action>;

export type RootProps = {
  actions: Actions;
  actionsContext: ActionsContext;
};

export type StoreState = {
  visibility: 'opened' | 'closed';
  actions: Actions;
  actionsContext: ActionsContext;
};

export type StoreStateWrapped = Store<StoreState>;

export type StoreMethods = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export type StoreContext = [StoreStateWrapped, StoreMethods];