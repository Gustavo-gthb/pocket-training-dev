import React from 'react';
import { IKeyHook } from './types';

export const useBackButton: IKeyHook = (callback, deps = []) => {
  React.useEffect(() => {
    function onBackButtonEvent(e: Event) {
      e.preventDefault();
      callback();
    }

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, deps);
}
