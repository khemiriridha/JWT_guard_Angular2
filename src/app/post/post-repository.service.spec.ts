/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostRepositoryService } from './post-repository.service';

describe('PostRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostRepositoryService]
    });
  });

  it('should ...', inject([PostRepositoryService], (service: PostRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
