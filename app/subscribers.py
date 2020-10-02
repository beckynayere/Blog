from .models import Subscriber

def get_subscribers():
    subscribers = Subscriber.query.all()
    
    emails = []
    
    for subscriber in subscribers:
        subscriber_email = subscriber.email
        emails.append(subscriber_email)

    return emails
