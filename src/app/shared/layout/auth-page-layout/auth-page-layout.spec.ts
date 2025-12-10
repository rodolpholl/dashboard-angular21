import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageLayout } from './auth-page-layout';

describe('AuthPageLayout', () => {
  let component: AuthPageLayout;
  let fixture: ComponentFixture<AuthPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPageLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
