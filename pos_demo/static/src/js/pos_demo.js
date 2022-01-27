console.log('Point of Sale JavaScript loaded! This is a greeting!');
// fetch('http://127.0.0.1:5000/products').then(data=> data.json()).then(response => console.log(response));

const bill_to_print = {
	"client": {
		"ID": "00.000.000",
		"bussinessName": "Name Lastname",
		"additionalInfo": "Addtional Info"
	},

	"invoiceComment": "This a comment",

	"products": [{
			"tax": 1,
			"price": 1000,
			"quantity": 1000,
			"code": 101,
			"description": "Teclado",
			"discount": {
				"PerAmount": false,
				"size": 1000
			}
		},
		{
			"tax":1,
			"price": 9998,
			"quantity": 2000,
			"code": 1922,
			"description": "Monitor",
			"surcharge": {
				"PerAmount": true,
				"size": 100
			}
		}
	],

	"discount": {
		"PerAmount": false,
		"size": 1000
	},

	"surcharge": {
		"PerAmount": false,
		"size": 100
	},
	
	"partialPay":[ 
		
		{
			"ID":1,
			"amount": 10	
		},
		{
			"ID":2,
			"amount": 110	
		}
		
	],
	
	"totalPay": 1,
	
	"barCode": 123456789012
};

    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bill_to_print),
    };

     const url_to_service = 'http://127.0.0.1:12376/orders/post_invoice/'

    fetch(url_to_service, options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
        }

        return data.json();

          }).then(bill_to_print => {
            console.log(bill_to_print);
            // {
            // };
          }).catch(e => {
            console.log(e);
          });