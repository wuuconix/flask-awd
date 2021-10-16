
from flask import *
app=Flask(__name__)

page_not_found_counter = 1000

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(error):
    global page_not_found_counter
    page_not_found_counter += 1
    return render_template_string(render_template("404.html",uri=error.description, counter=page_not_found_counter)), 404

@app.route("/<uri>")
def not_here(uri):
    abort(404,uri)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
