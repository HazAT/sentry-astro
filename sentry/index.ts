import type { AstroConfig, AstroIntegration, AstroIntegrationLogger, AstroRenderer, ClientDirectiveConfig, InjectedRoute, InjectedScriptStage } from 'astro';
import type { AddressInfo } from 'node:net';
import type * as vite from 'vite';
import * as Sentry from '@sentry/node';

const DSN = 'https://1d8b45cffaf0d833276a6ad1ae7d726d@o447951.ingest.sentry.io/4505912155701248';
// https://sentry-sdks.sentry.io/issues/?project=4505912155701248
Sentry.init({
    dsn: DSN,
    debug: true,
    tracesSampleRate: 1.0,
});

const PKG_NAME = '@sentry/astro';

const createPlugin = (options?: {}): AstroIntegration => {
	let config: AstroConfig;
	// const logger = new Logger(PKG_NAME);

	return {
		name: PKG_NAME,

		hooks: {
            'astro:config:setup': async (options: {
                config: AstroConfig;
                command: 'dev' | 'build' | 'preview';
                isRestart: boolean;
                updateConfig: (newConfig: Record<string, any>) => void;
                addRenderer: (renderer: AstroRenderer) => void;
                addWatchFile: (path: URL | string) => void;
                injectScript: (stage: InjectedScriptStage, content: string) => void;
                injectRoute: (injectRoute: InjectedRoute) => void;
                addClientDirective: (directive: ClientDirectiveConfig) => void;
                logger: AstroIntegrationLogger;
            }) => {
                options.injectScript('page', `
                import * as Sentry from '@sentry/browser'; 
                Sentry.init({
                    debug: true, 
                    tracesSampleRate: 1.0,
                    transport: Sentry.makeSpotlightTransport
                });`);
                console.log('astro:config:setup ------------');
                console.log(options);
              },
			'astro:config:done': async ({ config: cfg }) => {
                console.log('astro:config:done ------------');
				config = cfg;
                console.log(config);
			},

			'astro:build:done': async ({ dir, routes, pages }) => {
                console.log('astro:build:done ------------');
				console.log(dir, routes, pages);
			},


            'astro:server:start': async (options: { address: AddressInfo; logger: AstroIntegrationLogger; }) => {
                console.log('astro:server:start ------------');
            },

            'astro:server:done': async (options: { logger: AstroIntegrationLogger; }) => {
                console.log('astro:server:done ------------');
            },

            'astro:server:setup': async (options: { server: vite.ViteDevServer; logger: AstroIntegrationLogger; }) => {
                console.log('astro:server:setup ------------');
                console.log(options);
                console.log(options.server.middlewares);
                // options.server.middlewares.use(Sentry.Handlers.requestHandler());
                
                // options.server.middlewares.use(Sentry.Handlers.errorHandler());
                // let interval = null;
                // const hub = Sentry.getCurrentHub();
                // options.server.middlewares.use((req, _res, next) => {
                    
                //     if (req.headers['sec-fetch-mode'] === 'navigate' && req.headers['sec-fetch-dest'] === 'document') {
                //         hub.configureScope((scope) => {
                //             const transaction = hub.startTransaction({
                //                 op: 'http',
                //                 name: req.originalUrl,
                //             });
                //             scope.setSpan(transaction);
                //         });
                //     }
                //     let transaction = hub.getScope().getTransaction();
                //     let child = null;
                //     if (transaction) {
                //         child = transaction.startChild({
                //             op: 'vite.devserver',
                //             name: req.originalUrl,
                //         });
                //     }
                    
                //     next();
                //     if (child) {
                //         child.finish();
                //     }
                    
                    
                //     clearTimeout(interval);
                //     interval = setTimeout(() => {
                //         transaction.finish();
                //     }, 1000);
                
                // });
                
            },

            'astro:build:generated': async (options: { dir: URL; logger: AstroIntegrationLogger; }) => {
                console.log('astro:build:generated ------------');
                console.log(options);
            }

		},
	};
};

export default createPlugin;