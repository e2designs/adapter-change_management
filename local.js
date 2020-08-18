// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowAdapter class from local Node.js module main.js
 * and assign it to constant ServiceNowAdapter.
 */
const ServiceNowAdapter = require(path.join(__dirname, '/main.js'));

const options = {
    url: 'https://dev95661.service-now.com/',
    auth: {
        username: 'admin',
        password: 't3C&loW6dI4FOY&OKCzTu4056',
    },
    serviceNowTable: 'change_request'
};

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowAdapter class
 *              and tests the object's get and post methods. Used for local Node debugging
 */
function mainOnObject() {
    // Instantiate an object from class ServiceNowConnector.
    let id = 1234;
    const connector = new ServiceNowAdapter(id, options);
    let data = null;
    let error = null;
    // Test the object's get and post methods.
    // You must write the arguments for get and post.
    connector.getRecord((data, error) => {
        if (error) {
            console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
        } else {
            console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`);
        }

    });
    connector.postRecord((data, error) => {
        if (error) {
            console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
        } else {
            console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`);
        }
    });

}

// Call mainOnObject to run it.
mainOnObject();
