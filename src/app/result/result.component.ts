import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
resultado: number = 0

constructor(private router: Router, private route: ActivatedRoute) { }

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.resultado = +params['resultado'];
  })
}

calcularDeNuevo() {
  this.router.navigate(['/'])
}
}
