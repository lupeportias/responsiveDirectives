import { TestBed } from '@angular/core/testing';

import { MobileDesktopService } from './mobile-desktop.service';

describe('MobileDesktopService', () => {
  let service: MobileDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
