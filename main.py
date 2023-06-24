import yfinance as yf
from datetime import date
from datetime import timedelta
import numpy # to format the array


#define the ticker symbol
tickerSymbol = input("Enter NYSE:  ")
startDate = input("Enter Date(YYYY-MM-DD):  ")
endDate = date.today() - timedelta(days = 1)

#get data on this ticker
tickerData = yf.Ticker(tickerSymbol)

#get the historical prices for this ticker
tickerDf = tickerData.history(period='1d', start=startDate, end=endDate)

# makes an array of all of the data that was requested
allData = tickerDf.to_numpy()
allData = [[item for item in row if not str(item).endswith('.0')] for row in allData]


# Print each row in allData
'''for row in allData:
  for item in row:
    print(item)
'''
# prints out the result
first_value = allData[0][0]
last_value = allData[-1][-1]

result = last_value - first_value

#prints if the stock has gone up or down since the startDate and by how much
if(result > 0):
  print(tickerSymbol+" has gone up " + str(result) + " since " + startDate)
elif(result < 0):
  print(tickerSymbol+" has gone down " + str(result) + " since " + startDate)
else:
  print("price is the same")
