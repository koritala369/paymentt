import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'paymentt';


  isFlipped: boolean = false; 
    cardNumber: string = '';
    cardHolder: string = '';
    expMonth: string = 'MM ';
    expYear: string = 'YYYY';
    cvv: string = '';
    cardNumberError: string = '';

  // Handle card number input
  updateCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 16); 
    if (input.value.match(/[a-zA-Z]/)) {
      this.cardNumberError = 'Only numbers are allowed.'; // Error for alphabetic characters
  } else if (value.length < 16) {
      this.cardNumberError = 'Card number must be 16 digits.'; // Error for length
  } else {
      this.cardNumberError = ''; // Clear error if valid
  }
  this.cardNumber = value.replace(/(.{4})/g, '$1 ').trim();
  this.cardNumber = value.replace(/(\d{4})(?=\d)/g, '$1 '); 
}

  // Handle card holder input
  updateCardHolder(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardHolder = input.value; 
  }

  // Handle expiration month input
  updateExpMonth(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.expMonth = select.value;
  }

  // Handle expiration year input
  updateExpYear(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.expYear = select.value;
  }

  // Handle CVV input
  updateCVV(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cvv = input.value; 
    this.flipCard(true);
  }

  // Handle card flipping
  flipCard(isHovering: boolean) {
    this.isFlipped = isHovering; 
  }


  submitForm(event: Event) {
    event.preventDefault();
    
    console.log({
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvv: this.cvv,
    });
  }
}