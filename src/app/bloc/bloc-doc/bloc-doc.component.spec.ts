import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocDocComponent } from './bloc-doc.component';

describe('BlocDocComponent', () => {
  let component: BlocDocComponent;
  let fixture: ComponentFixture<BlocDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocDocComponent]
    });
    fixture = TestBed.createComponent(BlocDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
