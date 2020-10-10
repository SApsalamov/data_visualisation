const Data = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(index) {
    this.items.splice(index, 1);
  },
  updateItem(index, newValue){
    this.items[index] = newValue;
  }
}

Data.addItem("Uzb");
Data.addItem("Ukr");
Data.addItem("Kaz");
Data.addItem("Kyr");

console.log(Data.items);

d3.select('ul')
  .selectAll('li')
    .data(Data.items)
    .enter()
    .append('li')
    .text(data=>data);

setTimeout(() => {
  Data.addItem('Azb');
  d3.select('ul')
    .selectAll('li')
      .data(Data.items)
      .enter()
      .append('li')
      .text(data=>data);
}, 2000);

setTimeout(() => {
  Data.removeItem(0);
  console.log(Data.items);
  d3.select('ul')
    .selectAll('li')
      .data(Data.items, data=>data)
      .exit()
      .remove();
    console.log(Data.items);
}, 3000);

setTimeout(() => {
  Data.removeItem(0);
  console.log(Data.items);
  d3.select('ul')
    .selectAll('li')
      .data(Data.items, data=>data)
      .exit()
      .classed('redun', true);
    console.log(Data.items);
}, 4000);

setTimeout(() => {
  Data.updateItem(1, "Rus");
  console.log(Data.items);
    d3.select('ul')
      .selectAll('li')
        .data(Data.items, data=>data)
        .exit()
        .classed('udpated', true)
        .text(data=>data);
}, 5000);
