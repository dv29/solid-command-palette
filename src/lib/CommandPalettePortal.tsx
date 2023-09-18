import { Component, createRenderEffect, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { PaletteProps } from './types';

type PortalElem = undefined | HTMLDivElement;

export const CommandPalettePortal: Component<PaletteProps> = (p) => {
  let portalElem: PortalElem;

  createRenderEffect(() => {
    if (portalElem) {
      return;
    }

    const parent = document.body;
    const newPortalElem = document.createElement('div');
    newPortalElem.classList.add('command-palette-portal');
    parent.appendChild(newPortalElem);
    portalElem = newPortalElem;
  });

  onCleanup(() => {
    if (portalElem) {
      portalElem.remove();
      portalElem = undefined;
    }
  });

  return <Portal mount={portalElem}>{p.children}</Portal>;
};
