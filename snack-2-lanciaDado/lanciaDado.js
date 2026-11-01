/* const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...');
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject('Il dado si è incastrato');
            } else {
                resolve(Math.floor(Math.random() * 6) + 1);
            }
        }, 3000);
    });
};

lanciaDado()
    .then((risultato) => console.log('Uscito', risultato))
    .catch((errore) => console.log('Errore', errore)); */

const creaLanciaDado = () => {
    let ultimoLancio = 0;
    return () => {
        return new Promise((resolve, reject) => {
            console.log('Sto lanciando il dado...');
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    reject('Il dado si è incastrato');
                } else {
                    let numero = (Math.floor(Math.random() * 6) + 1);
                    if (numero === ultimoLancio) {
                        console.log('Incredibile!');
                    }
                    ultimoLancio = numero;
                    resolve(numero);
                }
            }, 3000);
        });
    };

};

const lancia = creaLanciaDado();
lancia().then((risultato) => console.log('Uscito', risultato)).catch((errore) => console.log('Errore', errore));
lancia().then((risultato) => console.log('Uscito', risultato)).catch((errore) => console.log('Errore', errore));