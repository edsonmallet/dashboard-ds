import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoneComponent } from './exone.component';

describe('ExoneComponent', () => {
  let component: ExoneComponent;
  let fixture: ComponentFixture<ExoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
