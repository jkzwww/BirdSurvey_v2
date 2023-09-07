import os
import csv
import ast

# function to read csv
def read_csv_file(file_path):
    with open(file_path, 'r') as csv_file:
        reader = csv.reader(csv_file)
        data = []
        for row in reader:
            data.append(row)
    return data

# storage file for bird data
storage_path = 'data_proc/data_record/bird_sighting_list.csv'

# data storage folder path
data_path = 'data_proc/data_record/response_list.csv'
data = read_csv_file(data_path)

bird_keys = ["magpie","lorikeet","cockatoo","miner","galah","wattlebird","honeyeater","currawong"]
time_keys = ["week","month","half","year"]
birds_dict = {
    "magpie" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "lorikeet" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "cockatoo" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "miner" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "galah" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "wattlebird" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "honeyeater" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    },
    "currawong" : {
        "count":0,
        "week":0,
        "month":0,
        "half":0,
        "year":0
    }
     
}


# read data
for row in data:

    bird_type_str = row[3]
    bird_time_str = row[4]
    
    bird_type_arr = ast.literal_eval(bird_type_str)
    bird_time_arr = ast.literal_eval(bird_time_str)

    if (len(bird_type_arr) > 0):
       
       for i in range(len(bird_type_arr)):
           
            bird_idx = int(bird_type_arr[i])
            bird_name = bird_keys[bird_idx]
            birds_dict[bird_name]["count"] += 1

            time_idx = int(bird_time_arr[i])
            bird_time = time_keys[time_idx]
            birds_dict[bird_name][bird_time] += 1


# show results
print("~~~~~~~~~~~~~~~~Total Bird Counts~~~~~~~~~~~~~~~~")
for i in range(len(bird_keys)):
    print(f"{bird_keys[i]} : {birds_dict[bird_keys[i]]['count']}")

print("~~~~~~~~~~~~~~~~Week Bird Count~~~~~~~~~~~~~~~~")
for i in range(len(bird_keys)):
    print(f"{bird_keys[i]} : {birds_dict[bird_keys[i]]['week']}")

print("~~~~~~~~~~~~~~~~Month Bird Count~~~~~~~~~~~~~~~~")
for i in range(len(bird_keys)):
    print(f"{bird_keys[i]} : {birds_dict[bird_keys[i]]['month']}")

print("~~~~~~~~~~~~~~~~Half Year Bird Count~~~~~~~~~~~~~~~~")
for i in range(len(bird_keys)):
    print(f"{bird_keys[i]} : {birds_dict[bird_keys[i]]['half']}")

print("~~~~~~~~~~~~~~~~Past Years Bird Count~~~~~~~~~~~~~~~~")
for i in range(len(bird_keys)):
    print(f"{bird_keys[i]} : {birds_dict[bird_keys[i]]['year']}")
