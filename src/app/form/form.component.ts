import { Component } from '@angular/core';
import { SerieComponent } from '../serie/serie.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router: Router) {}

  private serieCalculate: SerieComponent = new SerieComponent();
  resultado: number = 0
  public numeroNatural: number | null = null
  
  restrictInput(event: any): void {
    if(event.target) {
      const currentValue: string = event.target.value;
  
      if(/^[0-9]*$/.test(currentValue)) {
        this.numeroNatural = parseInt(currentValue, 10);
      } else {
        this.numeroNatural = null;
      }
    }

  }

  onSubmit(): void {
    if(this.numeroNatural != undefined) {
      this.resultado = this.serieCalculate.serie(this.numeroNatural)
      this.router.navigate(['/result'], { queryParams: { resultado: this.resultado }});
      console.log(this.resultado)
    }
  }
}
