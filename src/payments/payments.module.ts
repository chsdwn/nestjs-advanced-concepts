import { Module } from '@nestjs/common';

import { EventContext } from './context/event-context';
import { PaymentsWebhookController } from './payments-webhook.controller';
import { NotificationsService } from './notifications.service';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  controllers: [PaymentsWebhookController],
  providers: [NotificationsService, SubscriptionsService, EventContext],
})
export class PaymentsModule {}
