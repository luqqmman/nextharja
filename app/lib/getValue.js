export default function getValue(document){
    const transformedDocument = {};
    for (const [key, value] of Object.entries(document)) {
        if (value.stringValue !== undefined) {
            transformedDocument[key] = value.stringValue;
        } else if (value.timestampValue !== undefined) {
            transformedDocument[key] = {
                seconds: Math.floor(new Date(value.timestampValue).getTime() / 1000),
                nanoseconds: new Date(value.timestampValue).getMilliseconds() * 1000000
            };
        } else if (value.integerValue !== undefined) {
            transformedDocument[key] = parseInt(value.integerValue, 10);
        } else if (value.doubleValue !== undefined) {
            transformedDocument[key] = parseFloat(value.doubleValue);
        } else if (value.booleanValue !== undefined) {
            transformedDocument[key] = value.booleanValue;
        } // Add more type handling as needed
    }
    return transformedDocument;
}