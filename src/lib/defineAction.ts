import { Action, PartialAction } from './types';

const defaultRun = () => {
  console.log('you should pass run function');
};

export const defineAction = (partialAction: PartialAction): Action => {
  const id = partialAction.id || Math.random().toString();
  const run = partialAction.run || defaultRun;
  const shortcut = partialAction.shortcut || null;

  const normalizedAction = {
    id,
    shortcut,
    run,
  };

  return normalizedAction;
};