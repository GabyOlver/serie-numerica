import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports:[FormsModule],
      providers :[
        { provide:Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
            }
          }
      ]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe restringir numeros decimales', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '5.5'
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.numeroNatural).toBeNull();
  })

  it('Debe restringir numeros negativos', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '-8'
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.numeroNatural).toBeNull();
  })

  it('Debe navegar al componente result al dar click en calcular', () => {
    component.numeroNatural = 5;

    component.onSubmit();

    expect(component.resultado).toBe(85);
    expect(router.navigate).toHaveBeenCalledWith(['/result'], {queryParams: { resultado: component.resultado }})
  })
});
