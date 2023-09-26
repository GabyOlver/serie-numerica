import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
})
export class SerieComponent {
  
  private fibonacci(n: number): number {
    if ( n <= 2 ) {
      return 0
    } else {
      let num = n-2;
      let prev = 0;
      let current = 1;
  
      for(let i = 2; i < num; i++) {
        const next = prev + current;
        prev = current;
        current = next
      }
      return current;
    }
  }
  

  private triangular(n: number): number {
    if (n <= 2) {
      return 0
    } else  {
      let num = n-2;
      let count = 0;
      for(let i = 1; i < num; i++){
        count = (num * (num+1)/2)
      }
      return count;
    }
  }

  private isPrime(n: number): boolean {
    if(n <= 1) {
      return false;
    }
    if(n <= 3) {
      return true;
    }
    if(n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for(let i = 5; i * i <= n; i += 6) {
      if(n % i === 0 ||n % (i+2) === 0) {
        return false;
      }
    }
    return true;
  }

  private findPrime(n: number): number {
    if (n <= 1) {
      return 0
    } else  {
      const primes = [];
      const num = n - 1;
  
      for(let i = 2; primes.length < num; i++) {
        if(this.isPrime(i)) {
          primes.push(i)
        }
      }
      return primes[primes.length - 1]
    }
  }

  public serie(n: number): number {
    const fibonacciResult = this.fibonacci(n);
    const triangularResult = this.triangular(n);
    const primeResult = this.findPrime(n);

    return (2 * fibonacciResult) * (3 * triangularResult) + (7 * primeResult)
  }
  
}


