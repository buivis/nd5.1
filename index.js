var tasks = {
    cars: [
        { id: 1, name: 'Ford', color: 'white', isDamaged: false },
        { id: 2, name: 'Suzuki', color: 'green', isDamaged: false },
        { id: 3, name: 'BMW', color: 'black', isDamaged: true }

    ],
    owners: [
        { id: 1, name: 'Jonas' },
        { id: 2, name: 'Ona' },
        { id: 3, name: 'Petras' }
    ]
}


console.log(tasks);
console.log('--- FOR LOOP --');
tasks.cars.forEach((cars) => {
    console.log(cars.name);
});