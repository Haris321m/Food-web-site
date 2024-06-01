import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

// Replace 'your-publishable-key' with your actual Stripe publishable key
const stripePromise = loadStripe(pk_test_51PJHbSP62DFjvAs8sPkoIaGVnqDsE6JuLe4eU4d2cYNV9oxo6kqgqluj1QrDyZMGpuxYY0oOZCzfrLTMZq3NPIZR00uZpuALeD);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default App;
