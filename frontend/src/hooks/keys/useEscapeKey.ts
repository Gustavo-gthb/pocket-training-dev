import React from "react";
import { IKeyHook } from "./types";

export const useScapeKey: IKeyHook = (callback, deps = []) => {
  React.useEffect(() => {
    function onEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', onEscapeKey);

    return () => {
      window.removeEventListener('keydown', onEscapeKey);
    };
  }, deps);
}
