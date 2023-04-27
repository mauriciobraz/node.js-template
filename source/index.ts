import 'dotenv-expand/config';
import { Config } from './config';

function main(): void {
	console.log('Hello World', Config.NODE_ENV);
}

// Ensure that the main function is only called when this file is run directly
// (e.g. "ts-node source/index.ts"), and not when it is imported by another file.
if (require.main === module) {
	void main();
}
