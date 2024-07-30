document.addEventListener('DOMContentLoaded', () => {
    const paymentOptions = document.querySelectorAll('.payment-option input[type="radio"]');

    paymentOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            const selectedPayment = event.target.value;
            console.log(Selected Payment Method: ${selectedPayment});
        });
    });
});
