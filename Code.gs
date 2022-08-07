function doGet(request) {
 var scriptProperties = PropertiesService.getScriptProperties();
 if(request.parameter.secret != scriptProperties.getProperty("secret")) {
   var timestamp = new Date();
   var multipleReadings = parseInt(scriptProperties.getProperty("read"));
   var updatedReadings = ++multipleReadings;
   scriptProperties.setProperty('read', updatedReadings.toString());
   scriptProperties.setProperty('DATE'+ updatedReadings, "Email was viewed on " + timestamp + " for " + updatedReadings + " times");
   return ContentService.createTextOutput("error image not found");
 }
 var outputArray = [];
 for (prop in scriptProperties.getKeys()) {
   outputArray.push(scriptProperties.getProperty(scriptProperties.getKeys()[prop]));
 }
 return ContentService.createTextOutput(JSON.stringify(outputArray)).setMimeType(ContentService.MimeType.JSON);
}

