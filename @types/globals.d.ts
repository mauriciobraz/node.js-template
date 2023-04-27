import type { Config } from '../source/config/schema';

/** Replace all non-string values in an object with the string type. */
type ReplaceNonString<T extends object> = {
	[K in keyof T]: T[K] extends string ? T[K] : string;
};

declare global {
	namespace NodeJS {
		interface ProcessEnv extends ReplaceNonString<Config> {}
	}
}
