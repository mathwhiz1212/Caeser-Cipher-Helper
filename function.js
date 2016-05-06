function printTables(tables) {
  var longest = [];

  tables.forEach(function (table, i) {
    //console.log(table.header);
    table.rows.forEach(function (row, j) {
    longest[j] = row.length;
    var k = 0;
  //  console.log(k);
    var kk;
    var kk = row[k];
    var tt = 0;
    var ll;
    var ll = longest[j];
  //  var j = 0;
    var lgth = 0;
  //console.log(ll);
   
  
//console.log(row[1]);
  
  //console.log(ll);
        //console.log(i)
  //for( var k=0; k < ll; k++){
    
    
    
    for( var k=0; k < ll; k++){
      var kk = row[k];
      
      var kkl = kk.length;
      
      if( kkl > lgth){
          var lgth = kkl;
          console.log(lgth);
          var tt = kkl;
          
        //  console.log(tt);
      }
    }
    
    //console.log(k);
//console.log(row);
  //console.log(row[k]);
    
  //}
 //}
      // console.log(row);
      
      //var arr = ['first item', 'second item is longer than the third one', 
                 //'third longish item'];

      //for(var i=0; i < longest.length; i++){
          // if(longest[j].length > lgth){
          //     var lgth = longest[j].length;
          //     longestt = longest[j];
          // }      
    //  } 

      
      //4 items in each array
      
   });
  });
}

printTables(require('./data.json').tables);

/*
{
  "tables": [
    { "header": [ "First", "Last", "Age", "Bio" ]
    , "rows": [
        [ "AJ", "ONeal", "29", "Awesome. JavaScript." ]
      , [ "Joshua", "Mudge", "99", "Genius." ]
      ]
    }
  , { "header": [ "Title", "Author", "Rating", "Comment" ]
    , "rows": [
        [ "Copying & Pasting", "O'RLY", "10", "This is the best book evaaaaar!!! It learned me everything I need to know!" ]
      , [ "Beauty & The Beast", "Disney", "7.5", "Great love story." ]
      ]
    }
  ]
}
*/
