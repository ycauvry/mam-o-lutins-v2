export default class ApiFormatter {

    concatFields = (fields, fieldsToInclude) => {
        const fieldsToConcat = fieldsToInclude.map(field => {
            return fields[field];
        })

        return fieldsToConcat.join(' ');
    }

    calcAge = () => {
        return true
    }

    pickFields = () => {
        return true
    }

}