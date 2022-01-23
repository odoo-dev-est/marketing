/* console.log('Point of Sale JavaScript loaded! This is a greeting!');*/
fetch('http://127.0.0.1:5000/products').then(data=> data.json()).then(response => console.log(response))
