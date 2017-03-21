import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpntNameComponent } from './cmpnt-name.component';

describe('CmpntNameComponent', () => {
  let component: CmpntNameComponent;
  let fixture: ComponentFixture<CmpntNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpntNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpntNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
