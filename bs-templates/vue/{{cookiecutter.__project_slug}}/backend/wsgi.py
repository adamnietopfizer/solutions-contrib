from flask import Flask
from .fetch_api import fetch_api
from webaiku.extension import WEBAIKU
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)
WEBAIKU(app, "{{ cookiecutter.__project_slug }}", int(os.getenv("VITE_API_PORT")))
WEBAIKU.extend(app, [fetch_api])

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.getenv("VITE_API_PORT")), debug=True)
