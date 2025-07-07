import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocAddComponent } from './bloc-add.component';

describe('BlocAddComponent', () => {
  let component: BlocAddComponent;
  let fixture: ComponentFixture<BlocAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocAddComponent]
    });
    fixture = TestBed.createComponent(BlocAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
