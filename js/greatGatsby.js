console.log('JS OK')
const vip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

const vipTable = vip.map((vip, index) => ({
    tableName: "Tavolo Vip",
    name: vip,
    seat: index + 1
  }));
