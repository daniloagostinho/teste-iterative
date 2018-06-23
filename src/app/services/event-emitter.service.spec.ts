import { EventEmitterService } from './event-emitter.service';
import { TestBed, inject } from '@angular/core/testing';

describe('EventEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEmitterService]
    });
  });

  it('should be created', inject([EventEmitterService], (service: EventEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
