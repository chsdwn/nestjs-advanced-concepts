import { IntervalHost } from 'src/scheduler/decorators/interval-host.decorator';
import { Interval } from 'src/scheduler/decorators/interval.decorator';

@IntervalHost
export class CronService {
  @Interval(1000 * 60)
  everySecond() {
    console.log('[CronService:everySecond()]');
  }
}
