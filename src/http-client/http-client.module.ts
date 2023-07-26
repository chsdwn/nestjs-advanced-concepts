import { DynamicModule, Inject, Module } from '@nestjs/common';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  HTTP_MODULE_OPTIONS,
  OPTIONS_TYPE,
} from './http-client.module-definition';

@Module({})
export class HttpClientModule extends ConfigurableModuleClass {
  constructor(@Inject(HTTP_MODULE_OPTIONS) private options) {
    super();
    console.log('[HttpClientModule:options]:', options);
  }

  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    console.log('[HttpClientModule:register()]: options:', options);
    return {
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    console.log('[HttpClientModule:registerAsync()]: options:', options);
    return {
      ...super.registerAsync(options),
    };
  }
}
