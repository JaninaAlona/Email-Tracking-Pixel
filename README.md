# Tracking-Pixel

## Set up the script:
Create a new project on Google Apps Scripts and create a new Project:
<https://script.google.com>

In Project Settings edit script properties and assign the following property (left) and value (right) pairs:

read = 0

secret = *your-password*

Click on Deploy | New Deployment and save Google generated project script link.

## Send tracking pixel:
Edit HTML file by replacing the image tag's src attribute with your project script link.
Open HTML file in browser and press Ctrl + A and Ctrl + C to mark everything and copy. Paste copied tracking pixel with Ctrl + V in email you want to send. When someone opens the email you get an notification with timestamp and a counter how often the email was opened.

## View notifications:
Open <https://script.google.com/*my-script-link*/exec?secret=*your-password*> in order to view the email logs.
Append `?secret=*your-password*` to the google provided script link. If you omit this you get an error message.


## Demonstration:
Open <https://script.google.com/macros/s/AKfycbzLtyl8XBlXPHcXn3xc3ssi1uFW4FsHI8JUK0vbnogorm6pd2CuTzACG8vOl2C2gfosvA/exec?secret=LauraLovegood> in order to view my tracking pixel logs.

