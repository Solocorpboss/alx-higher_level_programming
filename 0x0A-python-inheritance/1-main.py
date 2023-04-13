#!/usr/bin/python3
from my_list import MyList

my_list_module = imp.load_source("my_list", "./1-my_list.py")
MyList = my_list_module.MyList

my_list = MyList([1, 2, 3, 4, 5])
my_list.print_sorted()

print(my_list)
my_list.print_sorted()
print(my_list)
