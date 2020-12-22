const moment = require('moment');

export default class ApiFormatter {

    concatFields = (data, methodInfos) => {
        if (methodInfos.dataPropertyPath) {
            return methodInfos.methodData.map(field => data[methodInfos.dataPropertyPath][field]).join(' ')
        }
        return methodInfos.methodData.map(field => data[field]).join(' ')
    }

    pickField = (data, methodInfos) => {
        if (methodInfos.dataPropertyPath) {
            return data[methodInfos.dataPropertyPath][methodInfos.methodData];
        }
        return data[methodInfos.methodData]
    }

    standardDate = (data, methodInfos) => {
        return moment(data[methodInfos.methodData]).format('DD/MM/YYYY')
    }

    calcAge = (data, methodInfos) => {
        return `${moment(moment.now()).diff(moment(data[methodInfos.methodData]), 'month')} mois`;
    }

}
