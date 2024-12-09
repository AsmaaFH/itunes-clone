//In this example, the Strategy Pattern allows the payment behavior to be changed at runtime.
//The PaymentContext class can use different strategies (CreditCardPayment,
//PayPalPayment) based on the current situation.

interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using credit card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

// Context
class PaymentContext {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  executePayment(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

// Client Code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executePayment(100);

// Change strategy dynamically
paymentContext.setPaymentStrategy(new PayPalPayment());
paymentContext.executePayment(200); // Output: "Paid $200 using PayPal."
