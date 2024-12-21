import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornarPrestadorComponent } from './tornarprestador.component';

describe('TornarprestadorComponent', () => {
  let component: TornarPrestadorComponent;
  let fixture: ComponentFixture<TornarPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TornarPrestadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornarPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
