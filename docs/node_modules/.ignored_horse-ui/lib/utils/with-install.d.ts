import { Plugin } from "vue";
export declare type SFCWithInstall<T> = T & Plugin;
export declare function withInstall<T>(com: T): SFCWithInstall<T>;
