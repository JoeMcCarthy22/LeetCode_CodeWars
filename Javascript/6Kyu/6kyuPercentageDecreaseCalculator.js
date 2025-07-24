/*
parameters are the car prices, saving per month and percentloss by month which inc by 0.5 every 2 months
return how many months it will take him to buy new car, and how much money left over in an array

*/


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
        let totalSavings = 0;
        let month = 0;
        let newCarValue = startPriceNew
        let oldCarValue = startPriceOld
        let totalAssets = (totalSavings + oldCarValue);
  
        while (totalAssets < newCarValue){
          
          month++
          
          totalSavings += savingperMonth;
          
           if (month % 2 === 0){
            percentLossByMonth += 0.5
          };
          
          newCarValue = newCarValue - (newCarValue * percentLossByMonth / 100);
          oldCarValue = oldCarValue - (oldCarValue * percentLossByMonth / 100);
          
          totalAssets = totalSavings + oldCarValue
          
          
        }
  
        return [month, Math.round(totalAssets - newCarValue)]
  
  
  
  
}