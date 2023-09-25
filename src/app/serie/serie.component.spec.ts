import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponent } from './serie.component';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieComponent]
    });
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe devolver los valores correctos de la serie de acuerdo al numero ingresado', () => {
    expect(component.serie(1)).toBe(0)
    expect(component.serie(2)).toBe(14)
    expect(component.serie(15)).toBe(78925)
    expect(component.serie(10)).toBe(2969)
    expect(component.serie(8)).toBe(749)
    expect(component.serie(19)).toBe(906493)
    expect(component.serie(23)).toBe(9376843)
    expect(component.serie(6)).toBe(197)
    expect(component.serie(4)).toBe(53)
    expect(component.serie(13)).toBe(22039)
  })
});
