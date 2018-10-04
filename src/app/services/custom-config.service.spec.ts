import { TestBed } from '@angular/core/testing';

import { CustomConfigService } from './custom-config.service';

describe('CustomConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomConfigService = TestBed.get(CustomConfigService);
    expect(service).toBeTruthy();
  });
});
