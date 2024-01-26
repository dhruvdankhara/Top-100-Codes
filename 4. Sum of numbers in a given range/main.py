m = 5
n = 10
sum = 0
# for i in range(m, n+1 , +1):
#     sum += i 
# print(sum)

def rec(sum,num1,num2):
    if num1 > num2:
        return sum
    return num1 + rec(sum,num1 + 1, num2)
print(rec(sum,m,n))
