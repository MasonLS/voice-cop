var express = require('express');
var server = express();

var Slack = require('node-slackr');
var imgur = require('imgur');

var payload = {text: "Wassup", channel: "1607-juniors", user: "person"}

var slack = new Slack('https://hooks.slack.com/services/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', {
	channel: "#1607-juniors",
	username: "Voice Cop",
});

server.listen(3000, function(){
	console.log('listening on 3000');
});

server.post(function(req, res, next){
	imgur.uploadBase64(req.body).then(function(json){
	slack.icon_url = json.data.link;
	slack.notify("Hello, everyone. I am being too loud. Feel free to shush me and make me feel like the child I am.");
	}).catch(next);
});