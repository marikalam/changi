# We need to import request to access the details of the POST request
# and render_template, to render our templates (form and response)
# we'll use url_for to get some URLs for the app on the templates
from flask import Flask, render_template, request, url_for

# Initialize the Flask application
app = Flask(__name__)

# Define a route for the default URL, which loads the form
@app.route('/')
def form():
    return render_template('form_submit.html')

# Define a route for the action of the form, for example '/hello/'
# We are also defining which type of requests this route is 
# accepting: POST requests in this case
@app.route('/hello/', methods=['POST'])
def hello():
    name=request.form['yourname']
    email=request.form['youremail']

    flightnumber=request.form['yourflightnumber']

    return render_template('form_action.html', name=name, email=email, flightnumber=flightnumber)

@app.route('/checkbox/', methods=['GET'])
def checkbox():
    return render_template('checkbox_action.html')
    


@app.route('/straightToFlight/', methods=['GET'])
def toFlight():
    return render_template('to_flight.html')

@app.route('/foodlist/', methods=['GET'])
def getFoodList():
    return render_template('food_list.html')

@app.route('/foodlistpicked/', methods=['GET'])
def getFoodListPicked():
    return render_template('food_list_picked.html')


# Run the app :)
if __name__ == '__main__':
  app.run( 
        host="0.0.0.0",
        port=int("5000")
  )