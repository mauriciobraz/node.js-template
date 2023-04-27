import ConfigSchema from './schema';

// `process.env.NODE_ENV` is set by `tsup` at build time but it
// also allows for the environment variable to be set manually.
export const Config = ConfigSchema.parse(
	Object.assign(process.env, { NODE_ENV: process.env.NODE_ENV })
);
