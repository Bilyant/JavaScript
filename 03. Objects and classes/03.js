function collectTaxes() {
    this.treasury += Math.floor(this.population * this.taxRate)
};

function applyGrowth(percentage) {
    this.population += Math.floor((this.population * percentage) / 100)
};

function applyRecession(percentage) {
    this.treasury -= Math.floor((this.treasury * percentage) / 100)
};

let obj = {
    city: 'Tortuga',
    population: 7000,
    treasury: 15000,
    taxRate: 10,
    collectTaxes: collectTaxes,
    applyGrowth: applyGrowth,
    applyRecession: applyRecession,
}

obj.collectTaxes();
console.log(obj.treasury);

obj.applyGrowth(5);
console.log(obj.population);

obj.applyRecession(10);
console.log(obj.treasury);