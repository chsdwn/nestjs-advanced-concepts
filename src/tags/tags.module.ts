import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule implements OnApplicationBootstrap {
  constructor(private readonly moduleRef: ModuleRef) {}

  async onApplicationBootstrap() {
    const contextId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId({ hello: 'world' }, contextId);
    const tagsService = await this.moduleRef.resolve(TagsService, contextId);
    console.log(
      '[TagsModule:onApplicationBootstrap]: tagsService:',
      tagsService,
    );

    // const tagsService = await Promise.all([
    //   this.moduleRef.resolve(TagsService, contextId),
    //   this.moduleRef.resolve(TagsService, contextId),
    // ]);
    // console.log('[tagsServices equal]:', tagsService[0] === tagsService[1]);
  }
}
