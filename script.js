fetch(`https://fakestoreapi.com/products`)
.then((data) => {
    return data.json();
}).then((objdata) => {

    console.log(objdata[0].title);
    let tableData = "";
    objdata.map((values) =>{
        tableData += `<tr>
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}"/></td>
              </tr>
            `
    })
document.getElementById('table_body').innerHTML =  tableData;
}).catch((err) =>{
    console.log(err);
})

