import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAreaComponent } from './content.component';

describe('ContactAreaComponent', () => {
  let component: ContactAreaComponent;
  let fixture: ComponentFixture<ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactAreaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
