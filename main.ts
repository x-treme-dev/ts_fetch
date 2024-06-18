fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

   /**
    * Объект пришел в виде:
    * Array (10)
    * 0 {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: Object, …}
    *  1 {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: Object, …}
    * 2 {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: Object, …}
    *    
    *  В этом коде внешний цикл for...in обходит все ключи объекта «data»
    *  Метод Object.hasOwnProperty() проверяет, является ли свойство собственным 
    *  (а не унаследованным) для объекта
    * 
    */

var table__body = document.querySelector('.table__body');

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
          var obj = data[key];
          let lat = +obj.address.geo.lat;
          let lng = +obj.address.geo.lng;
           table__body!.innerHTML += `<tr class="table__row">` +
          `<td class="table__td">` + obj.name +`</td>` +
          `<td class="table__td">`+ `https://www.google.com/maps/@` + 
            lat.toFixed(2) + ','+ lng.toFixed(2) +
           `</td>` + `</tr>`;
      }
  }

  });
