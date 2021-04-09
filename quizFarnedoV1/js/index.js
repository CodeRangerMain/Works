$(document).ready(function () {
   $("#ThemeableButton1").button();
   $("#ThemeableButton2").button();
   $("#wb_Image10").tooltip(
      {
         hide: true,
         show: true,
         content: "<span style=\"color:#000000;font-family:'TT Norms Regular';font-size:15px;\">Посетителям нравится и их вовлекает</span>",
         items: '#wb_Image10',
         position: { my: "center bottom-10", at: "center top", collision: "flipfit" },
         classes: { 'ui-tooltip': 'ToolTip1' }
      });
   $("#wb_Image12").tooltip(
      {
         hide: true,
         show: true,
         content: "<span style=\"color:#000000;font-family:'TT Norms Regular';font-size:15px;\">Предложение с точным попаданием в цель</span>",
         items: '#wb_Image12',
         position: { my: "center bottom-10", at: "center top", collision: "flipfit" },
         classes: { 'ui-tooltip': 'ToolTip2' }
      });
   $("#wb_Image15").tooltip(
      {
         hide: true,
         show: true,
         content: "<span style=\"color:#000000;font-family:'TT Norms Regular';font-size:15px;\">На выходе у вас заявка мечты</span>",
         items: '#wb_Image15',
         position: { my: "center bottom-10", at: "center top", collision: "flipfit" },
         classes: { 'ui-tooltip': 'ToolTip3' }
      });
   $("#wb_Image17").tooltip(
      {
         hide: true,
         show: true,
         content: "<span style=\"color:#000000;font-family:'TT Norms Regular';font-size:15px;\">На сайте от посетителя требуется только одно простое действие - пройти тест</span>",
         items: '#wb_Image17',
         position: { my: "center bottom-10", at: "center top", collision: "flipfit" },
         classes: { 'ui-tooltip': 'ToolTip4' }
      });
});
