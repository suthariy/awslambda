console.log('Loading function');

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));

    //Check for the event type
    if (event.eventType === 'SyncTrigger') {

        //Modify value for a key
        if('Level' in event.datasetRecords){
            event.datasetRecords.Level.op = 'replace';
        }

        //Remove a key
        if('Lives' in event.datasetRecords){
            event.datasetRecords.Lives.op = 'replace';
        }

        //Add a key
        var date = new Date();
        event.datasetRecords.Date={'newValue': date, 'op' : 'replace'};

    }
    console.log(JSON.stringify(event, null, 2));
    context.done(null, event);
};