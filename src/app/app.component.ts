import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls
})
export class AppComponent {
  title = 'paymentt';


  isFlipped: boolean = false; // Initial state of the card
    cardNumber: string = '';
    cardHolder: string = '';
    expMonth: string = 'MM ';
    expYear: string = 'YYYY';
    cvv: string = '';
    cardNumberError: string = '';

  // Handle card number input
  updateCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 16); // Allow only numbers
    this.cardNumber = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Format with spaces
    if (value.length === 16) {
      this.cardNumberError = 'only numbers are allowed'; // Clear error if valid
    } else {
      this.cardNumberError = 'Card number must be 16 digits.';
    }
  }

  // Handle card holder input
  updateCardHolder(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardHolder = input.value; // Update card holder state
  }

  // Handle expiration month input
  updateExpMonth(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.expMonth = select.value; // Update expiration month
  }

  // Handle expiration year input
  updateExpYear(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.expYear = select.value; // Update expiration year
  }

  // Handle CVV input
  updateCVV(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cvv = input.value; // Update CVV state
    // Flip the card when the input is focused
    this.flipCard(true);
  }

  // Handle card flipping
  flipCard(isHovering: boolean) {
    this.isFlipped = isHovering; // Update the state based on hover or focus
  }

  // Method to submit the form
  submitForm(event: Event) {
    event.preventDefault();
    // Handle form submission
    console.log({
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvv: this.cvv,
    });
  }
}