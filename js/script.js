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

        if (userAge === 'under18') {
            discount = (priceKm * 20) / 100;
        } else if (userAge === 'over65') {
            discount = (priceKm * 40) / 100;
        } else {
            discount = 0;
        }

        console.log(discount);

        const finalPrice = priceKm - discount
        console.log(finalPrice);
        const priceSimple = finalPrice.toFixed(2)
    }
)