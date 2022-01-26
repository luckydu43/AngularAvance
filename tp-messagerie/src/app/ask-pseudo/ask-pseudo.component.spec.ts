import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPseudoComponent } from './ask-pseudo.component';

describe('AskPseudoComponent', () => {
  let component: AskPseudoComponent;
  let fixture: ComponentFixture<AskPseudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskPseudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
