import os
import csv
import sys

# function to read csv
def read_csv_file(file_path):
    with open(file_path, 'r') as csv_file:
        reader = csv.reader(csv_file)
        data = []
        for row in reader:
            data.append(row)
    return data

# storage file for participant response list
storage_path = 'data_proc/data_record/response_list.csv'
# data storage folder path
data_path = 'data_proc\survey_raw_data'


# data directories
data_dirs = os.listdir(data_path)

for file_idx in range(len(data_dirs)):

    file_path = os.path.join(data_path,data_dirs[file_idx]) 
    file_name = data_dirs[file_idx]
    
    data = read_csv_file(file_path)

    # read data
    for row in data:

        strategy = row[0]
        people_id = row[1]
        response = row[2]

        bird_count = 0
        resp_list = []
        bird_type = []
        bird_time = []

        next_col = 3
        if(row[next_col] != ''):
            
            while(next_col < len(row)):
                
                col_data = row[next_col]
                data_parts = col_data.split('_')

                if(data_parts[0] == ''):
                    break
                elif(data_parts[0] != 't'):
                    bird_type.append(col_data)
                else:
                    bird_time.append(data_parts[1])    

                next_col += 1

        resp_list = [strategy,people_id,response,bird_type,bird_time]

        with open(storage_path, 'a', newline='') as store_file:
            writer = csv.writer(store_file)
            writer.writerow(resp_list)