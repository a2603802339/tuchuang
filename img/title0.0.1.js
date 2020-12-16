 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function() {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = 'ヽ(●-`Д´-)ノ客观慢走！';
         clearTimeout(titleTime);
     } else {
         $('[rel="icon"]').attr('href', "/img/favicon.ico");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎光临！' + OriginTitle;
         titleTime = setTimeout(function() {
             document.title = OriginTitle;
         }, 2000);
     }
 });