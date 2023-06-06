import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelersComponent } from './jewelers.component';

describe('JewelersComponent', () => {
  let component: JewelersComponent;
  let fixture: ComponentFixture<JewelersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelersComponent]
    });
    fixture = TestBed.createComponent(JewelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
