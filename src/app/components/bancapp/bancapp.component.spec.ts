import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancappComponent } from './bancapp.component';

describe('BancappComponent', () => {
  let component: BancappComponent;
  let fixture: ComponentFixture<BancappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BancappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BancappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
