'use strict'

//Copyright AJ Oneal and Joshua Mudge.
//Licensed under the MPLv2 license: https://spdx.org/licenses/MPL-2.0

function printTables(tables) {

  var longest = [];
  var hh = 0
  var tt = 0;
  var k = 0;
  var kk;
  var ll;
  var j;

  tables.forEach(function (table, i) {
    //console.log(table.header);

    table.rows.forEach(function (row, j) {

      longest[j] = row.length;
      kk = row[k];
      var ll = longest[j];
      var lgth = 0;

      for( var k=0; k < ll; k++){

        kk = row[k];
        var kkl = kk.length;

        if( kkl > lgth){
          var lgth = kkl;
          tt = kkl;
        }

      }

      if ( tt > hh ) {
        hh = tt;
      }

    //  console.log(hh);

    });

    //Code for getting terminal width.

    var size = process.stdout.columns;
    //console.log(size);

    //Truncation, experimental code. Probably breaks stuff.
    //Evan's idea, as most are.
 var subpre = size / 40;
    var sub = kk.substring(0,subpre) + "...";
    console.log(sub);

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

//console.log(row[1]);
//console.log(i)
// console.log(row);
//var arr = [ "d", "sdh", "This is the best book evaaaaar!!! It learned me everything I need to know!" ]
