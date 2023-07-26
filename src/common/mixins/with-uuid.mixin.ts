import { Type } from '@nestjs/common';
import { randomUUID } from 'crypto';

export const WithUuid = <TBase extends Type>(Base: TBase) => {
  return class extends Base {
    uuid = randomUUID();

    regenerateUuid() {
      this.uuid = randomUUID();
    }
  };
};