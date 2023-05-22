from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Mi aplicación de flask funciona correctamente 😀"

@app.route("/html")
def renderButton():
    return "<button>Dame click</button>"

@app.route("/json")
def setJson():
    return {
        'success': True,
        'message': 'El formato json se ha enviado correctamente'
    }, 200

@app.route("/jobs")
def findAllJobs():
    return [
      {
        "id": 1,
        "title": "Frontend developer",
        "company": {
          "name": "Google",
          "logo": "/google.png",
        },
        "location": {
          "city": "Australia",
          "logo": "/australia.png",
        },
        "salary": "£50,000 - £60,000",
        "type": "Full time",
      },
      {
        "id": 2,
        "title": "Backend developer",
        "company": {
          "name": "Facebook",
          "logo": "/facebook.png",
        },
        "location": {
          "city": "USA",
          "logo": "/usa.png",
        },
        "salary": "$80,000 - $120,000",
        "type": "Full time",
      },
      {
        "id": 3,
        "title": "Fullstack developer",
        "company": {
          "name": "Amazon",
          "logo": "/amazon.png",
        },
        "location": {
          "city": "USA",
          "logo": "/usa.png",
        },
        "salary": "$100,000 - $150,000",
        "type": "Full time",
      },
    ]

app.run(debug=True)
