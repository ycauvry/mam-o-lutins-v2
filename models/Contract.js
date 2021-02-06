const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'child',
    },
    assistant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assistant'
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    schedules: {
        week1: {
            monday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            tuesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            wednesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            thursday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            friday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            }
        },
        week2: {
            monday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            tuesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            wednesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            thursday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            friday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            }
        },
        week3: {
            monday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            tuesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            wednesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            thursday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            friday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            }
        },
        week4: {
            monday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            tuesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            wednesday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            thursday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            },
            friday: {
                start: {
                    type: String,
                    default: null
                },
                end: {
                    type: String,
                    default: null
                }
            }
        },
    },
    type: {
        type: String,
        required: true
    },
    planning: {
        type: String
    },
    holidays_week: {
        type: Number,
        default: 5
    },
    status: {
        type: String,
        default: 'active'
    }
})

module.exports = Contract = mongoose.model('contract', ContractSchema);
