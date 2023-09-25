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

const serie = new SerieComponent();

console.log('1', serie.serie(1)) // (2 * 0) * (3 * 0) + (7 * 0) = 0
console.log('2', serie.serie(2)) // (2 * 0) * (3 * 0) + (7 * 2) = 14
console.log('3', serie.serie(3)) // (2 * 0) * (3 * 1) + (7 * 3) = 21
console.log('4', serie.serie(4)) // (2 * 1) * (3 * 3) + (7 * 5) = 2 * 9 + 35 = 53
console.log('5', serie.serie(5)) // (2 * 1) * (3 * 6) + (7 * 7) = 2 * 18 + 49 = 85
console.log('6', serie.serie(6)) // (2 * 2) * (3 * 10) + (7 * 11) = 4 * 30 + 77 = 197
console.log('7', serie.serie(7)) // (2 * 3) * (3 * 15) + (7 * 13) = 6 * 45 + 91 = 361
console.log('8', serie.serie(8)) // (2 * 5) * (3 * 21) + (7 * 17) = 10 * 63 + 119 = 749
console.log('9', serie.serie(9)) // (2 * 8) * (3 * 28) + (7 * 19) = 16 * 84 + 133 = 1477
console.log('10', serie.serie(10)) // (2 * 13) * (3 * 36) + (7 * 23) = 26 * 108 + 161 = 2969



