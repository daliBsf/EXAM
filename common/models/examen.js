'use strict';

module.exports = function (Examen) {
   



    Examen.createExamen = function (body, cb) { 
        //var Questions=app.models().question;
        var examen = body.examen;
        var questions = body.question;
        console.log(questions);
        Examen.create(examen, function (errr, instance) { 
            if (errr == null) { 
                var Question = Examen.app.models.Question;
                for(var i=0;i<questions.length;i++)
                    { questions[i].examenId=instance.id;
                    }
                Question.create(questions, function (err, instances) { 
                    if (err == null)
                        console.log("yeeees");
                    else
                        console.log("error creation quest");

                });



            }
            else 
                console.log("error creation test");

        });
        //var Questions=app.models().Questions; 
        cb(null);





    }
    Examen.remoteMethod('createExamen', { 
        http: {
            path: '/createExamen',
            verb: ['post']
        },
        accepts: [{
            arg: 'body',
            type: 'object',
            http: {
                source: 'body'
            }
        }]
    });








};
