/* console.log('Point of Sale JavaScript loaded! This is a greeting!');*/
// fetch('http://127.0.0.1:5000/products').then(data=> data.json()).then(response => console.log(response))
// fetch('http://157.245.245.176:12376/').then(data=> data.json()).then(response => console.log(response))

const item = {
      name: 'test_name',
      description: 'test_description',
      price: 1.7,
    };

    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    };

     const url_to_service = 'http://192.168.0.116:12376/orders/items/'

    fetch(url_to_service, options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
        }

        return data.json();

          }).then(item => {
            console.log(item);
            // {
            // };
          }).catch(e => {
            console.log(e);
          });