Hosted on 
https://deft-gingersnap-220922.netlify.app/



Using External Libraries
Working with forms

Task:
Create a Contact Us form that allows users to send you a message to make inquiries. The form should have the following fields:
Name (required)
Email (required and should be validated)
Subject (optional)
Message (required)
Product Requirements 
The name, email, and message fields are required. If fields are empty, display errors under each field
The email field should be validated as an email. If the email entered is invalid, display an appropriate error under the email field.
On successful submission, display a message at the top of your form indicating that the submission was successful.
On successful submission, the form fields should be reset.
If there is an error during the submission, display an error message at the top of the form informing the user that the submission wasn’t successful.
Technical Requirements
The form should be built using React
You can use component libraries (MUI, ChakraUI, React-bootstrap) to build your form if you desire.
You can choose to implement your form using third-party libraries like Formik if you desire.
You can use Axios or fetch() for this assignment to post the form data to the API
Optional Requirements
On clicking on submit, add a loading indicator in the button to show that the form is submitting

Resources
Here is the API endpoint to send the user’s data to:
https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries

The data to post to the API endpoint should be in this format:
{
    "id": 3,
    "name": "Tun Oje",
    "email": "test2@test.com",
    "subject": "test2 subject",
    "message": "test2 message"
}

where
id - is the unique id for the data being posted. Use a third-party library like nanoid to generate this random id
name - is the name of the user
email - is the email of the user
subject - is the subject of the inquiry 
message - is the content of the inquiry

Please note:
Your work should not be in the main branch but in a separate branch with your chosen name.
On completing the implementation, create a pull request (PR) pointing your working branch to the main branch.
Get your mentor’s GitHub username and add him/her/them as your reviewer.
What to submit in Citrone
Submit the PR link
Host your work on Netlify/Github Pages and submit the hosted link
Useful Resources 
https://blog.logrocket.com/how-to-use-axios-post-requests/
https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples


