const countrycities = {
    azerbaijan: {
        city: ['Baku', 'Sumgait', 'Gandja'],
        district: {
            baku: ['Binagadi', 'Nasimi', 'Khatai', 'Yasamal'],
            sumgait: ['HajiZeynalabdin', 'Jorat'],
            gandja: ['Hajikend', 'Javadkhan']
        }

    },
    france: {
        city: ['Paris', 'Marseille'],
        district: {
            paris: ['Marais', 'MontMartre', 'Bercy', 'Ternes'],
            marseille: ['Cassis', 'Gemenos', 'Venelles']
        }
    },
    germany: {
        city: ['Berlin', 'Hamburg'],
        district: {
            berlin: ['Spandau', 'Pankow'],
            hamburg: ['Altona', 'Mitte', 'Nord']
        }
    },
    turkey: {
        city: ['Ankara', 'Istanbul', 'Izmir'],
        district: {
            ankara: ['Polatli', 'Haymana'],
            istanbul: ['Eyup', 'Avcilar', 'Bayrampasa', 'Beykoz'],
            izmir: ['Urla', 'Kiraz', 'Kinik']
        }
    }

};

const countries = document.getElementById('countries');
const cities = document.getElementById('cities');
const districts = document.getElementById('districts');

countries.addEventListener('change', function () {
    try {
        cities.innerHTML = '<option value="" disabled selected>Choose a city</option>';
        districts.innerHTML = '<option value="" disabled selected>Choose a district</option>';
        const country = countrycities[this.value];

        for (const c of country['city']) {
            const opt = document.createElement('option');
            opt.value = c.toLowerCase();
            opt.innerText = c;
            cities.appendChild(opt);
        }
    }
    catch (e) {

    }

});

cities.addEventListener('change', function () {

    try {
        districts.innerHTML = '<option value="" disabled selected>Choose a district</option>';
        const country = countrycities[countries.value];
        const city = this.value;

        for (const d of country['district'][city]) {
            const opt = document.createElement('option');
            opt.value = d.toLowerCase();
            opt.innerText = d;
            districts.appendChild(opt);
        }

    }
    catch (e) {

    }


});