import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDetialsComponent } from './package-detials.component';

describe('PackageDetialsComponent', () => {
  let component: PackageDetialsComponent;
  let fixture: ComponentFixture<PackageDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageDetialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
