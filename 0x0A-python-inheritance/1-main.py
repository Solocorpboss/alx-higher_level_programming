#!/usr/bin/python3
import importlib.util

spec = importlib.util.spec_from_file_location("my_list", "./1-my_list.py")
my_list_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(my_list_module)

MyList = my_list_module.MyList

my_list = MyList([1, 2, 3, 4, 5])
my_list.print_sorted()

print(my_list)
my_list.print_sorted()
print(my_list)
