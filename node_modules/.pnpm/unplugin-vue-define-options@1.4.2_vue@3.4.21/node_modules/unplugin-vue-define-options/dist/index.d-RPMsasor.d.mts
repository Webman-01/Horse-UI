import { FilterPattern } from '@rollup/pluginutils';

interface BaseOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
    version?: number;
}

export type { BaseOptions as B };
