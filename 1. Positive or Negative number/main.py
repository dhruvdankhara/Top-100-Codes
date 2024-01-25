try:
    n = int(input("enter a number : "))

    if(n == 0):
        print("number is zero")
    elif(n > 0):
        print(f"{n} is positive number")
    else:
        print(f"{n} is negative number")

except:
    print("plz, enter a number.")