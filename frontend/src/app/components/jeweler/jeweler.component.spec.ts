import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelerComponent } from './jeweler.component';

describe('JewelerComponent', () => {
  let component: JewelerComponent;
  let fixture: ComponentFixture<JewelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelerComponent]
    });
    fixture = TestBed.createComponent(JewelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
