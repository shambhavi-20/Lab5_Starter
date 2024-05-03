# Lab 5 - Starter
Shambhavi Mittal

1.  Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, it is not the ideal way to test the "message" feature of a messaging application because it is the core feature for the app app and not testing how that feature interacts with other features. Also just testing the message feature involves many steps including checking if the text is typed, the length of the text,  spelling errors, the message can be sent to the user, images are supported, etc. So, it cannot be tested just using a unit test. 

2.  Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, testing the “max message length” feature of a messaging application using the unit test feature would be helpful because only one core functionality needs to be checked. The test only needs to worry about the maximum length of the text which makes it easier to be checked with a unit test. 