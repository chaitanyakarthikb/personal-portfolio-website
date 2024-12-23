import React from 'react'
import { useRef } from 'react'
const ContactMe = () => {
    const formRef = useRef();
    function resetForm(e){
        e.preventDefault();
        formRef.current.reset();

    }
  return (
    <section id='contact' className='contact--section'>


        <form ref={formRef} className='contact--form' action="https://getform.io/f/bxoogdqa" method="POST">
            
            <input type="text" name="name" placeholder='Enter your Name' id="" />
            <input type="email" name="email" placeholder='Enter your Email' id="" />
            <textarea name="message" rows={10} cols={50} id="" placeholder='Enter your Message'></textarea>

            <button className='btn btn-outline-primary' type='submit' onClick={resetForm}>Submit</button>

        </form>

    </section>
  )
}

export default ContactMe