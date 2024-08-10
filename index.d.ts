import { EmailOptions, ServiceConfig } from './dist/src/types';

declare function amailer(options: EmailOptions & ServiceConfig): Promise<any>;

export { amailer };
export * from './dist/src/services';
export * from './dist/src/types';