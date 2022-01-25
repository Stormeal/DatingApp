import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AccountService],
    });

    accountService = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(accountService).toBeTruthy();
  });
});
