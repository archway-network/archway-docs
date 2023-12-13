import { Window as KeplrWindow, ChainInfo as KeplrChainInfo, Currency as KeplrCurrency, Keplr } from '@keplr-wallet/types';

interface IWindow {
  addEventListener: (type: string, listener: (e: any) => void) => void;
  removeEventListener: (type, listener: (e: any) => void) => void;
}

interface Cosmostation {
  cosmostation: {
    cosmos: {
      request: (param: object) => Promis<any>;
      on: (type: string, listener: (e: any) => Promise<void>) => any;
      off: (event: any) => void;
    };
    providers: {
      // note: using cosmostation's keplr api instead becaue their api, cosmos, was causing extra popups to show
      // the any types here are bad, but necessary for now, as cosmostation emulates kepler's api so we don't know if it will diverge
      keplr: Keplr
    };
  };
}

interface Leap {
  leap: Keplr
}

declare global {
  interface Window extends KeplrWindow, Cosmostation, IWindow, Leap {}
  // for Cosmostation no need to add a type as they don't have one, but are compatible with Keplr
  interface ChainInfo extends KeplrChainInfo {}
  interface Currency extends KeplrCurrency {}
}
