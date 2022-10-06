import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUIComponent } from './document-ui.component';

describe('DocumentUIComponent', () => {
  let component: DocumentUIComponent;
  let fixture: ComponentFixture<DocumentUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
