import { Injectable, Logger } from '@nestjs/common';

type EventPayload = Record<string, unknown>;

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  emit(eventName: string, payload: EventPayload) {
    this.logger.log(`event=${eventName} payload=${JSON.stringify(payload)}`);
  }
}
