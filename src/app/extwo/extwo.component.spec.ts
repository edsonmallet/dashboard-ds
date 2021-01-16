import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtwoComponent } from './extwo.component';

describe('ExtwoComponent', () => {
  let component: ExtwoComponent;
  let fixture: ComponentFixture<ExtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
