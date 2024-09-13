import { TestBed } from '@angular/core/testing';

import { MessageDownloaderService } from './message-downloader.service';

describe('MessageDownloaderService', () => {
  let service: MessageDownloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageDownloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
