import yfinance as yf
from datetime import date
from datetime import timedelta
import numpy # to format the array
import BingPython as ai
import asyncio
startDate = ""

#define the ticker symbol
owned = input("Are you searching about a stock that you own (y or n)? ")
tickerSymbol = input("Enter NYSE: ")
riskTolerance = input("What is your risk tolerance (-%): ")
goal = input("What is your goal return(%): ")

if(owned == "y"):
  startDate = input("Enter date from which you bought the stock(YYYY-MM-DD): ")

  endDate = date.today() - timedelta(days = 1)

  #get data on this ticker
  tickerData = yf.Ticker(tickerSymbol)

  #get the historical prices for this ticker
  tickerDf = tickerData.history(period='1d', start=startDate, end=endDate)

  # makes an array of all of the data that was requested
  allData = tickerDf.to_numpy()
  allData = [[item for item in row if not str(item).endswith('.0')] for row in allData]

  # prints out the result
  first_value = allData[0][0]
  last_value = allData[-1][-1]

  result = last_value - first_value

  stockData = ""

  #prints if the stock has gone up or down since the startDate and by how much
  if(result > 0):
    stockData = (tickerSymbol+" has gone up " + str(result) + " since " + startDate)
  elif(result < 0):
    stockData = (tickerSymbol+" has gone down " + str(result) + " since " + startDate)
  else:
    stockData = ("price is the same")

elif(owned == "n"):
  startdate = date.today() - timedelta(days = 365)
  duration = input("Do you want the stock to be a longterm or shorterm investment? ")

if __name__ == "__main__":
    cookie = {}
    if(owned == "y"):
      command = ai.BingPython.sendcom_sydney(ai.BingPython.CreateSession(cookie), "I understand that you are Bing and not a financial advisor. However, please give me your opinion to help me make the final decision. I have had " + tickerSymbol + " stock since " + startDate + " since then, " + stockData + ". My risk tolerance is " + riskTolerance + ". My goal is to gain " + goal + "Based on this and the rest of your knowledge of the market would it be smart to sell my stock now?, and what is the predicted stock price?")
      print("fetching results...")
      print(asyncio.get_event_loop().run_until_complete(command))

    elif(owned == "n"):
      command = ai.BingPython.sendcom_sydney(ai.BingPython.CreateSession(cookie), "I understand that you are Bing and not a financial advisor. However, please give me your opinion to help me make the final decision. I am looking for this investment to be " + duration + ". My risk tolerance is " + riskTolerance + ". My goal is to gain " + goal + "Based on this and the rest of your knowledge of the market would it be smart to buy stock in " + tickerSymbol + " now, and what is the predicted stock price?")
      print("fetching results...")
      print(asyncio.get_event_loop().run_until_complete(command))
