function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getROI(campaignId) {
  var apiKey = 'YOUR_ADCAMPAIGN_API_KEY';
  var url = 'https://api.adcampaign.com/roi?campaignId=' + campaignId + '&apiKey=' + apiKey;
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return '<p>Cost: ' + json.cost + '</p><p>Revenue: ' + json.revenue + '</p><p>ROI: ' + json.roi + '%</p>';
}
