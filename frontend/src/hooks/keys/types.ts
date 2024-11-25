interface Options {
  enableOnPopState?: boolean;
  enableOnBackButton?: boolean;
  enableOnHashChange?: boolean;
}

export type IKeyHook = (callback: Function, deps?: Array<unknown>, options?: Options) => void;
