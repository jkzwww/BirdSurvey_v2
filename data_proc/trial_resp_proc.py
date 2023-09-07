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
# remove old responses
os.remove(storage_path)
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
        inquiry_ans = ''

        next_col = 3
        if(row[next_col] != ''):
            
            while(next_col < len(row)):
                
                col_data = row[next_col]
                data_parts = col_data.split('_')

                if(col_data == ''):
                    break
                elif(data_parts[0] == 'ans'):
                    inquiry_ans = data_parts[1]
                elif(data_parts[0] == 't'):
                    bird_time.append(data_parts[1])                        
                else:
                    bird_type.append(col_data)

                next_col += 1

        resp_list = [strategy,people_id,response,bird_type,bird_time,inquiry_ans]

        with open(storage_path, 'a', newline='') as store_file:
            writer = csv.writer(store_file)
            writer.writerow(resp_list)