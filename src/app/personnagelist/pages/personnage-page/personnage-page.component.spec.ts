import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagePageComponent } from './personnage-page.component';

describe('PersonnagePageComponent', () => {
  let component: PersonnagePageComponent;
  let fixture: ComponentFixture<PersonnagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
