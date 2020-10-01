import urllib.request,json
from .models import Blog

def get_quotes():
    with urllib.request.urlopen('http://quotes.stormconsultancy.co.uk/random.json') as url:
        response=url.read()
        quote=json.loads(response)
        return quote
    
        