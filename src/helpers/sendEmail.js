import { init, sendForm } from 'emailjs-com';
const user_name = init('user_h88MUUL2z7LyThRYixx88');

export default function sendEmail(e) {
    sendForm('service_d3eb9m9', 'template_mvxqgvp', '.dropdown', user_name)
    .then((result) => {
      console.log('result: ', result.text, result.status);
    }, (error) => {
      console.log('error: ',error.text);
    });
  }