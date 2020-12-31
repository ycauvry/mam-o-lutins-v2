export const ListingDef = {
    assistant: {
        title: 'Gestion des assistantes',
        tableHead: {
            lastname: 'Nom',
            firstname: 'Prénom'
        },
        tableBody: {
            lastname: 'lastname',
            firstname: 'firstname'
        },
        editPath: '/gestion-assistantes/',
        addBtnLabel: 'Ajouter une assistante'
    },
    contract: {
        title: 'Gestion des contrats',
        tableHead: {
            lastname: 'Nom',
            assistant: 'Assistante',
            start: 'Début de contrat',
            end: 'Fin de contrat',
            holidays: 'Vacances'
        },
        tableBody: {
            lastname: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'child'
            },
            assistant: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'assistant'
            },
            start: {
                method: 'standardDate',
                methodData: 'start'
            },
            end: {
                method: 'standardDate',
                methodData: 'end'
            },
            holidays: {
                method: 'holidays'
            }
        },
        editPath: '/gestion-contrats/',
        addBtnLabel: 'Ajouter un contrat'
    },
    child: {
        title: 'Gestion des enfants',
        tableHead: {
            child: 'Enfant',
            age: 'Âge',
            contact: 'Contact',
            phone_number: 'Téléphone'
        },
        tableBody: {
            child: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname']
            },
            age: {
                method: 'calcAge',
                methodData: 'birthday'
            },
            contact: {
                method: 'concatFields',
                methodData: ['firstname', 'lastname'],
                dataPropertyPath: 'contact'
            },
            phone_number: {
                method: 'pickField',
                methodData: 'phone_number',
                dataPropertyPath: 'contact'
            }
        },
        editPath: '/gestion-enfants/',
        addBtnLabel: 'Ajouter un enfant'
    }
}
