import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetdetailComponent } from './assetdetail.component';

describe('AssetdetailComponent', () => {
  let component: AssetdetailComponent;
  let fixture: ComponentFixture<AssetdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
