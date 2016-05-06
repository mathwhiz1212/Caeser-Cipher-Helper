function printTables(tables) {
  var longest = [];
var j = 0;
var lgth = 0;
var tt;
var k;

  tables.forEach(function (table, i) {
    //console.log(table.header);
    table.rows.forEach(function (row, j) {
    longest[j] = row.length;
    var ll;
    var ll = longest[j];
  //  console.log(ll);


    
    
  for( var k=0; k < ll; k++){
    var kk;
    var kk = row[k];
    console.log(k)
  //  console.log(row[k]);
      if( kk.length > lgth){
          var lgth = kk.length;
          var tt = row[k];
          //console.log(tt);
      }
  }
//  }
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
      , [ "Joshua", "Mudge", "15", "Kid. Genius." ]
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