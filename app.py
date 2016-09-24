from flask import Flask, render_template, request, url_for

# Initialize the Flask application
app = Flask(__name__)


# Define a route for the default URL, which loads the form
@app.route('/')
def form():
    return render_template('index.html')

# Run the app :)
if __name__ == '__main__':
  app.run(
        host="0.0.0.0",
        port=int("5000")
  )
