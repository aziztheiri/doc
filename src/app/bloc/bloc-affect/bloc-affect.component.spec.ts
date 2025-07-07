import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocAffectComponent } from './bloc-affect.component';

describe('BlocAffectComponent', () => {
  let component: BlocAffectComponent;
  let fixture: ComponentFixture<BlocAffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocAffectComponent]
    });
    fixture = TestBed.createComponent(BlocAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
