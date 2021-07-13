import { send, init } from 'emailjs-com'
const userName = init('user_h88MUUL2z7LyThRYixx88')

export default function sendEmail (e) {
  send('service_d3eb9m9', 'template_mvxqgvp', e.target, userName)
    .then((result) => {
      console.log('result: ', result.text)
    }, (error) => {
      console.log('error: ', error.text)
    })
}
