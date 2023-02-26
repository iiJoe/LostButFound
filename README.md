# LostButFound
A project developed for a one day hackathon [iNTUition](https://intuition.ieeentu.com/) ([Devpost](https://devpost.com/software/lostbutfound)). The project aims to leverage AI to identify and classify lost items found by other students in NTU in order to facilitate finding lost items.

## Inspiration
Losing belongings is a common problem that many students face. Finding it back may be pretty difficult.
We decided to take the initiative to build a solution to address the issue of lost items on campus.

## What it does
Our project uses Tensorflow Object Detection in a web app to classify images of lost items found by people and enables others to search through the database for their lost items.

## How we built it
Our team used Tensorflow Object Detection in Python to identify items and categorised them. We written a Flask server to host an API endpoint for clients to use the results derived from the trained model.

In addition, we also built a React web application for the public to use to find lost items or report any missing cases. A user would upload an image, which would be passed into the model and stored into  Google Firebase.

## Challenges we ran into

One of the hardest challenges was in building the prototype for Tensorflow Object Detection. Within the given time constraints, the model is currently not rigorous in classifying objects. However, we think it's a good starting point that can be improved with more training data in the future.

## Accomplishments that we're proud of
We have developed a working web app using NodeJS that lets people upload images of lost items and their contact details. Our team has created a AI model to identify between phones, cards, bottles and wallets using Tensorflow Object Detection and run a Flask server to run the Python code.
The information is uploaded Google Firestore for users to browse through using our web application, to easily find their items classified by AI.

## What we learned
We learnt the proper of way capturing images and labeling to ensure optimal results. We have learnt that making slight changes could affect the model greatly.

We integrated our python machine learning model together with a flask server, which would be queried with an image url and would return the classification output

## What's next for LostButFound

- Improve the Object Detection model: The current prototype for Tensorflow Object Detection is not rigorous in classifying objects. We would need to train the model with more images across a larger variety of categories.

- Enhance the user interface: The current version of our web application has minimal functionality needed for this hackathon. We can improve the user interface to make it more user-friendly and visually appealing.

- Test the app with real NTU student users: To improve the quality of our application, we need NTU students to test it and gather feedback to see how we can improve the application further.

# Contributions
This project would not have been possible without:
1. [Rhys](https://github.com/Rhys-Wong)
2. [Cheng](https://github.com/Worsl)
3. [Jeremy](https://github.com/iiJoe)
4. [Ee Chern](https://github.com/Pistato)