/* 9. Write The Price Of The Books That You Have. 
Display The Prices If The Prices Is Lower Than 200 */ 

var allBooksPrices = [158, 180, 200, 190, 450, 195, 130, 175, 250, 120];
for (var i = 0; i < allBooksPrices.length; i++) {
    var BooksPrice = allBooksPrices[i]
    if (BooksPrice > 199){
        continue;
    }
    console.log(BooksPrice);
}
