
//Credit card input
new Cleave('.creditCard', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    }
});
//Telephone input
new Cleave('.phoneNumber', {
    phone: true,
    delimiter: '-',
    prefix: '0',
    phoneRegionCode: 'FR'
});
//date de commande 
new Cleave('.commandDate', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});





