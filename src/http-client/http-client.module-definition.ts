import { ConfigurableModuleBuilder } from '@nestjs/common';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: HTTP_MODULE_OPTIONS,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<{
  baseUrl?: string;
}>({ alwaysTransient: false })
  // .setClassMethodName('forRoot') // only .forRoot method available
  // .setFactoryMethodName('resolve')
  .setExtras<{ isGlobal?: boolean }>(
    {
      isGlobal: true,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();
