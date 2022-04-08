const formBtn = document.getElementById('form-btn');
console.log(formBtn)

formBtn.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        console.log(userName);

        const userKm = parseInt(document.getElementById('user-km').value);
        console.log(userKm);

        const userAge = document.getElementById('user-age').value;
        console.log(userAge);

        const priceKm = userKm * 0.21
        console.log(priceKm);

        let discount;
        let ticketType;

        if (userAge === 'under18') {
            discount = (priceKm * 20) / 100;
            ticketType = 'Biglietto Minorenni';
        } else if (userAge === 'over65') {
            discount = (priceKm * 40) / 100;
            ticketType = 'Biglietto Silver';
        } else {
            discount = 0;
            ticketType = 'Biglietto Standard';
        }

        console.log(discount);

        const finalPrice = priceKm - discount
        console.log(finalPrice);
        const priceSimple = finalPrice.toFixed(2) + '€'

        // CABINE DA 1 A 7
        const userCab = Math.floor(Math.random() * 7) + 1;
        console.log(userCab);

        const cpCode = Math.floor(Math.random() * 10000 ) + 90000;
        console.log(cpCode);

        document.getElementById('passenger').innerHTML = userName;
        document.getElementById('ticket-type').innerHTML = ticketType;
        document.getElementById('cab').innerHTML = userCab;
        document.getElementById('cp-code').innerHTML = cpCode;
        document.getElementById('ticket-price').innerHTML = priceSimple;
    }
)