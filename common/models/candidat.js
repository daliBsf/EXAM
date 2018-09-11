'use strict';

module.exports = function(Candidat) {
    
    
    
     Candidat.getRole = function (body, cb) { 
       
        cb(null,"Candidat");

};
    
    
    Candidat.remoteMethod('getRole', { 
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
        returns:{arg:'role',type:'string' } 
    });
}
