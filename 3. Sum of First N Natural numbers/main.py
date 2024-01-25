# n = 6
# sum = 0
# for i in range(n + 1):
#     sum += i
# print(f"sum of first {n} numbers is {sum}.")


# Using Recursion
n = 6
def sumOfN(num):
    if num == 1:
        return 1
    return num + sumOfN(num - 1)
print(f"sum of first {n} numbers is {sumOfN(n)}.")
