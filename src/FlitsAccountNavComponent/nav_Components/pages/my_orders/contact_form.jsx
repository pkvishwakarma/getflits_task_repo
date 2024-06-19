import React, { useState } from 'react';
import './contact_form.css';
import InputFieldReusable from '../../../formReusableComponents/inputField_reusable';
import ContactInputFieldComponent from '../../../formReusableComponents/contactInputFieldComponent';

export default function ContactForm({ show, handleClose }) {
  const [error, setError] = useState(false);
  if (!show) {
    return null;
  }


  return (
    <div className="modal-overlay">
      <fieldset className="modal">
        <legend className='contactUsSvgLegend'>
          <div className='contactUsSvgContainer'>
            <svg version="1.1" width="51" height="512" x="0" y="0" viewBox="0 0 420.96 420.96"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M354.48,144c0-79.529-64.471-144-144-144s-144,64.471-144,144c-20.56,2.56-40,16-40,47.2v75.2c0,35.2,24.64,48,48,48h23.2    c4.418,0,8-3.582,8-8V151.52c0-4.418-3.582-8-8-8h-15.2c0-70.692,57.308-128,128-128s128,57.308,128,128h-15.2    c-4.418,0-8,3.582-8,8v154.64c0,4.418,3.582,8,8,8h15.2c-2.24,54.96-28.64,67.84-81.36,70.16v-5.36c0-8.837-7.163-16-16-16H190.8    c-8.837,0-16,7.163-16,16v26c0,8.837,7.163,16,16,16h50.48c8.837,0,16-7.163,16-16v-4.64c50.72-2.32,94.56-12.8,97.2-86.64    c20.56-2.56,40-16,40-47.2v-75.2C394.48,159.92,375.12,146.56,354.48,144z M89.68,158.96v139.2h-15.6c-11.84,0-32-4.16-32-32    v-75.2c0-27.6,19.92-32,32-32H89.68z M241.28,392.88v12.16H190.8v-26h50.48V392.88z M378.48,266.4c0,27.6-19.92,32-32,32h-15.2    V159.52h15.6c11.84,0,32,4.16,32,32L378.48,266.4z" fill="#ffffff" dataoriginal="#000000"></path></g></g></g></svg>
          </div>
        </legend>
        <div>
          <button className="close-button" onClick={handleClose}>×</button>
          <div className='contactUsFormTitle'>
            <h2 className='contactUsHeaderTag'>Contact Us</h2>
            <p className='ContactUsParaTag'>Your satisfaction is our top priority</p>
          </div>
          <form>
            <div className='contactInputFieldParentContainer'>
              <InputFieldReusable fieldInfo={{ type: 'text', name: 'first_name', title: 'First Name', className: 'fNameInputField' }} />
              <InputFieldReusable fieldInfo={{ type: 'text', name: 'last_name', title: 'Last Name', className: 'lNameInputField' }} />
            </div>
            <div className='contactInputFieldParentContainer'>
              <InputFieldReusable fieldInfo={{ type: 'email', name: 'email', title: 'Email*', required: true, className:'emailInputField' }} />
              <div className='contactInputContainer'>
                <ContactInputFieldComponent contact_template={{
                  title: 'Contact Number',
                  type: ['text', 'tel'],
                  name: ['country_callingcode', 'contact_number', 'country_dropdown'],
                  placeholder: 'Contact Number',
                  value: ["+91", ""],
                  className: ['contactFormContact_parent', 'contactFormCountry-selector', 'contactFormCountryDropdown'],
                }} setError={setError} />
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="reason">Reason To Contact <span>*</span></label>
              <select id="reason" name="reason" required>
                <option value="">Select a Reason</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message here" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="attachmentLink">Attachment Link</label>
              <input type="url" id="attachmentLink" name="attachmentLink" placeholder="Paste the attachment link here" />
            </div>
            <button type="submit" className="submit-button">Submit</button> */}
          </form>
        </div>
      </fieldset>
    </div>
  );
};