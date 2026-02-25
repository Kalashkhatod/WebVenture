class Solution(object):
    def fizzBuzz(self, n):
        self.n = n
        return self.fizbuz()
    def fizbuz(self):
        array = []
        for i in range(1,self.n+1):
            if i % 3 == 0 and i % 5 == 0:
                array.append("FizzBuzz")

            elif i % 3 == 0:
                array.append("Fizz")
            
            elif i % 5 == 0:
                array.append("Buzz")

            else: 
                array.append(str(i))
        return array

obj = Solution()

print_array = obj.fizzBuzz(8)

print(print_array)