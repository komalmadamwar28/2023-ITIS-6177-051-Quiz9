export const handler = async(event) => {
    const queryStringParams = event.queryStringParameters;
    if (!queryStringParams) {
        return {
            statusCode: 400,
            body: "No query string parameters found."
        };
    }
    const name = queryStringParams.name;
    if (!name) {
        return {
            statusCode: 400,
            body: "No 'name' parameter found in query string."
        };
    }
    return {
        statusCode: 200,
        body: `Komal Madamwar says, ${name}!`
    };
};
