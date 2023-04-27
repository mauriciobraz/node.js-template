import { z } from 'zod';

const ConfigSchema = z.object({
	NODE_ENV: z.enum(['development', 'production'])
});

export type Config = z.infer<typeof ConfigSchema>;
export default ConfigSchema;
