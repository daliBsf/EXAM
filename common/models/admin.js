'use strict';

module.exports = function (Admin) {
    Admin.getRole = function (body, cb) { 

        cb(null, "Admin");

    };
    Admin.remoteMethod('getRole', { 
        http: {
            path: '/getRole',
            verb: ['get']
        },
        accepts: [{
            arg: 'body',
            type: 'object',
            http: {
                source: 'body'
            }
        }],
        returns: {
            arg: 'role',
            type: 'string'
        }

    });

};
