from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

users_file = 'users.json'
workout_plans_file = 'workoutplans.json'

if not os.path.exists(users_file):
    with open(users_file, 'w') as f:
        json.dump({'users': []}, f)

if not os.path.exists(workout_plans_file):
    with open(workout_plans_file, 'w') as f:
        json.dump({'workout plans': []}, f)

def get_users():
    with open(users_file, 'r') as f:
        data = json.load(f)
        return data['users']

def save_users(users):
    with open(users_file, 'w') as f:
        json.dump({'users': users}, f)

def get_workout_plans():
    with open(workout_plans_file, 'r') as f:
        data = json.load(f)
        return data['workout plans']

def save_workout_plans(workout_plans):
    with open(workout_plans_file, 'w') as f:
        json.dump({'workout plans': workout_plans}, f)


@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        users_data = get_users()
        return jsonify(users_data)
    elif request.method == 'POST':
        data = request.json
        users_data = get_users()
        data['id'] = len(users_data) + 1
        users_data.append(data)
        save_users(users_data)
        return jsonify(data)


@app.route('/workout-plans', methods=['GET', 'POST'])
def workout_plans():
    if request.method == 'GET':
        workout_plans_data = get_workout_plans()
        return jsonify(workout_plans_data)
    elif request.method == 'POST':
        data = request.json
        workout_plans_data = get_workout_plans()
        data['id'] = len(workout_plans_data) + 1
        workout_plans_data.append(data)
        save_workout_plans(workout_plans_data)
        return jsonify(data)


# API to get workout plans for a particular user
@app.route('/workout-plans/<username>', methods=['GET'])
def get_workout_plans_for_user(username):
    workout_plans_data = get_workout_plans()
    #print(workout_plans_data)
    # Filter workout plans for the given username
    #for plan in workout_plans_data:
    #    print(plan['username'])
    #    if plan['username'] == username :
    #        user_workout_plans= plan
    #        print("Found a workout plan")
    #        break

    user_workout_plans = [plan for plan in workout_plans_data if plan['username'] == username]
    return jsonify(user_workout_plans)


@app.route('/signin', methods=['POST'])
def signin():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if username and password match in users.json
    users_data = get_users()
    for user in users_data:
        if user['name'] == username and user['password'] == password:
            return 'Valid'

    return 'Invalid'


if __name__ == '__main__':
    app.run(debug=True)
