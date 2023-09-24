This is a sample fitness application, created using Python(Flask) and React Native.
It lets you register as a user and create workout plans. Subsequently it also enables you to revisit those plans for reference.
# Breakdown of Structure
The codebase has 3 parts - frontend and backend and repository(in form of json files stored within Backend)


## Frontend
This is the React Native based module in which the dependencies are specified in its package.json
### Start your Application

### For Android
npx react-native run-android

### For iOS
npx react-native run-ios

Depending on how you are deploying, you may need to bind it the device's and local machine's 5000 port using
adb reverse tcp:5000 tcp:5000

## Backend
This is pure-play Flask based and python code. Requirements.txt would have all the dependencies specified.
It is recommended that for development and testing purposes, you start a virtual env and activate it 
python -m venv venv
venv\Scripts\activate

### Start your Application
The following command should help you run the backend -
python app.py

## Repository
Both the below files are stacked(/created) within Backend folder and act as Repository for this project.
users.json - contains user data
workoutplans.json - contains workoutdata