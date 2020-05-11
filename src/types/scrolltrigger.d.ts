
declare module '@terwanerik/scrolltrigger' {

  export default ScrollTrigger;

  export interface ScrollTriggerOptions {
    trigger?: {
      once?: boolean;
      offset?: {
        element?: {
          x?: number;
          y?: (trigger: any, rect: any, direction: any) => number;
        };
        viewport?: {
          x?: number;
          y?: (trigger: any, rect: any, direction: any) => number;
        };
      };
      toggle?: {
        class?: {
          in?: string | string[];
          out?: string | string[];
        };
        callback?: {
          in?: any;
          visible?: any;
          out?: any;
        };
      };
    };
    scroll?: {
      sustain?: number;
      element?: HTMLElement;
      callback?: any;
      start?: () => {};
      stop?: () => {};
      directionChange?: () => {};
    }
  }

  export class ScrollTrigger {

    constructor(options?: ScrollTriggerOptions);

    public add(tagname: string): void;

    public kill(): void;

  }

}