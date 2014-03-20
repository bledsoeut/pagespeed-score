  function getScores(e) {
    var API_URL = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?';
    var API_KEY = 'AIzaSyBvrI3Fq_zSgByx02AoGEZROEmFSqYxtD4';

    var spreadsheet = SpreadsheetApp.getActive();

 
    var urlsrange = spreadsheet.getRange("B1:B1000");
   
    var urls_array = urlsrange.getValues();
  
    for (var i = 0; i < urls_array.length; i++) {
      var url = urls_array[i][0];
    
   {
        var api = API_URL + 'key=' + API_KEY + '&url=' + url;
              
        var result = UrlFetchApp.fetch(api);
        var data = Utilities.jsonParse(result.getContentText());
      
        var cl = spreadsheet.setActiveCell("C" + (2+i));
        cl.setValue(data.score);
        
  
      }
    }
    
   }
