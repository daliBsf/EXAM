'use strict';

module.exports = function(server) {
	// Install a `/` route that returns server status
	var router = server.loopback.Router();
	//router.get('/', server.loopback.status());
	server.use(router);
	server.post('/resultat', function(req, res) {
		var candidatId = req.body.candidatId;
		var examId = req.body.examenId;
		var CandidatExam = server.models.CandidatExamen;
		CandidatExam.findOne(
			{
				where: {
					examenId: examId,
					candidatId: candidatId
				}
			},
			function(err, ce) {
				if (err == null) {
					var Examen = server.models.Examen;
					var Question = server.models.Question;
					console.log(examId);
					Question.find(
						{
							where: {
								examenId: examId
							}
						},
						function(errr, questions) {
							if (errr == null) {
								var score = 0;
								console.log(questions.length);
								for (var i = 0; i < questions.length; i++) {
									if (ce.responses[i] == questions[i].reponse) {
										console.log('questionScore ' + questions[i].score);
										score += questions[i].score;
									}
								}

								console.log(score);
								res.send({ score: score });
								res.end();
							} else console.log(errr);
						}
					);
					/*Examen.findOne({
                    where: {
                        'id': examId
                    },
                    include: 'questions'
                }, function (errr, examen) { 

                    if (errr == null) {
                        var score = 0;
                        // console.log(examen);
                        //console.log(examen.questions.List);
                        var obj = examen.questions;
                        console.log(obj);

                        for (var i = 0; i < examen.nbQuest; i++) {
                            //console.log(ce.responses[i]);
                            // console.log(examen.questions);
                            //console.log("score: "+examen.questions[i].score);
                            /*if (ce.reponses[i]==examen.questions[i].reponse)
                                            { 
                                                score+=examen.questions[i].score;
                                                                                       
                                            }
                                        
                                  

                        }
                        //console.log(score);


                    } else console.log(errr);


                });*/
				}
			}
		);
	});
};
