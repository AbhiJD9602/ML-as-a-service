import pickle
import flask
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import linear_model
from flask import request


# declare constants
HOST = '0.0.0.0'
PORT = 8081


app = flask.Flask(__name__)


@app.route('/api/train', methods=['POST'])
def train():
    # get parameters from request
    parameters = request.get_json()
    path = parameters['path']

    # loading my data and splitting it into training and testing pandas
    df = pd.read_csv("wine_dataset.csv", delimiter=",")
    X_train, X_test, y_train, y_test = train_test_split(df.drop('quality', axis=1), df['quality'], test_size=0.25,
                                                        random_state=1)

    # creating a model and training it
    regr = linear_model.RidgeCV(alphas=np.arange(0.1, 10.0, .5))
    regr.fit(X_train, y_train)

    # exporting my model
    pickle.dump(regr, open("model.pkl", "wb"))

    # loading my model
    model = pickle.load(open("model.pkl", "rb"))
    return flask.jsonify({'accuracy': round(model.score(X_test, y_test) * 100, 2)})


# defining a route for only post requests
@app.route('/api/predict', methods=['POST'])
def index():
    # loading my model
    model = pickle.load(open("model.pkl", "rb"))

    # getting an array of features from the post request's body
    feature_array = request.get_json()

    #creating a response object
    #storing the model's prediction in the object
    response = {}
    X = [[float(feature_array['fixedAcidity']), float(feature_array['volatileAcidity']),
          float(feature_array['citricAcid']), float(feature_array['residualSugar']),
          float(feature_array['chlorides']), float(feature_array['freeSulfurDioxide']),
          float(feature_array['totalSulfurDioxide']), float(feature_array['density']), float(feature_array['pH']),
          float(feature_array['sulphates']), float(feature_array['alcohol'])]]
    response['predictions'] = model.predict(X).tolist()

    return flask.jsonify([{'name': 'Prediction', 'value': round(response['predictions'][0],2)}])

if __name__ == '__main__':
    # run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
            port=PORT)
