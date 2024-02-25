import mysql.connector
import csv
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='admin'
)
cursor = conn.cursor()
cursor.execute("Create database mealmapper")
cursor.execute("use mealmapper")
cursor.execute('''CREATE TABLE IF NOT EXISTS coordinates (
                    city varchar(100),
                    lat decimal(10, 8),  -- Decimal precision and scale for latitude
                    lng decimal(11, 8)   -- Decimal precision and scale for longitude
                )''')
conn.commit()
print("Database created successfully.")
def insert_data(cursor, row):
    cursor.execute('''INSERT INTO coordinates (city, lat, lng)
                      VALUES (%s, %s, %s)''', row)
def read_csv_and_insert_into_db(csv_file):
    with open('LatLng.csv', 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)  
        for row in csv_reader:
            insert_data(cursor, row)
    conn.commit()
csv_file = 'LatLng.csv'
read_csv_and_insert_into_db(csv_file)
def retrieve_coordinates_from_database():
    cursor.execute("SELECT city, lat, lng FROM coordinates")
    rows = cursor.fetchall()
    return rows
data = retrieve_coordinates_from_database()
cityname=[]
count=0
for row in data:
    city, latitude, longitude = row
    #print(row)
    #print(f"City: {row[0]}, Latitude: {row[1]}, Longitude: {row[2]}")
    
    if count==2:
        break
    else:
        
        cityname+=[{city},{latitude},{longitude}]
        
        count+=1

conn.close()



import requests
def get_directions(origin, destination, access_token):
    url = f"https://api.mapbox.com/directions/v5/mapbox/driving/{origin};{destination}?access_token={access_token}"
    response = requests.get(url)
    data = response.json()

    if 'routes' in data and len(data['routes']) > 0:
        route = data['routes'][0]
        distance = route['distance'] / 1000  
        duration = route['duration'] / 60
        return distance, duration
    else:
        return None, None


access_token = 'pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQxYm1hZDkxN2o0MmxvZThxOXN6bm15In0.yZDQTtojsIj9PNPaumSkrg'

# print(cityname)
city1lat=float(cityname[1].pop())

city1lng=float(cityname[2].pop())

city2lat=float(cityname[4].pop())

city2lng=float(cityname[5].pop())

city1 = str(city1lat)+","+str(city1lng)
city2 = str(city2lat)+","+str(city2lng)
print(city1)
print(city2)

distance, duration = get_directions(city1, city2, access_token)
print(distance)
print(duration)

if distance and duration:
    print("Distance between user1 and user2:", round(distance,2), "km")
    if duration>=60:
            duration=duration/60 
            print("Estimated travel time:", round(duration,2), "hours")
    else:
        print("Estimated travel time:", round(duration,2), "hours")
else:
    print("Failed to retrieve directions.")

# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import requests

# app = Flask(_name_)
# # CORS(app)

# @app.route('/get_directions', methods=['POST'])
# def get_directions():
#     data = request.json
#     origin = data['origin']
#     destination = data['destination']
#     access_token = data['access_token']

#     # Make request to Mapbox API
#     url = f"https://api.mapbox.com/directions/v5/mapbox/driving/{origin};{destination}?access_token={access_token}"
#     response = requests.get(url)
#     data = response.json()

#     if 'routes' in data and len(data['routes']) > 0:
#         route = data['routes'][0]
#         distance = route['distance'] / 1000  
#         duration = route['duration'] / 60
#         return jsonify({'distance': distance, 'duration': duration}), 200
#     else:
#         return jsonify({'error': 'Failed to retrieve directions'}), 400

# if _name_ == '_main_':
#     app.run(debug=True)