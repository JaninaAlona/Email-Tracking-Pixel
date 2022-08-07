# Tracking-Pixel

## Set up script:
Create a new project on Google Apps Scripts and create a new Project:
<https://script.google.com>

In Project Settings edit script properties and assign the following attribute and value pairs:
read = 0
secret = <your-password>

Open HTML file in browser and press Ctrl + A and Ctrl + C to mark everything and copy. Paste copied tracking pixel with Ctrl + V in email you want to send. When someone opens the email you get an notification with timestamp and a counter how often the email was opened.

## View notifications:
Open <https://script.google.com/<my-script-link>/exec?secret=<your-password>> in order to view the email logs.
