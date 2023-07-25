import React from 'react'

const EmailValidator = (email) => {

   // FUNCTION - test for spam and harmful mails

  const domain = email.split('@')[1]
  

  const potentiallyHarmfulDomains = [
    // Common Disposable Email Domains
    'mailinator.com',
    'mailinator.net',
    'guerrillamail.com',
    'tempmail.com',
    'yopmail.com',
    '10minutemail.com',
  
    // Known Spam Domains
    'spamdomain.com',
    'bademail.com',
    'spammydomain.com',
    'phishingdomain.com',
  
    // Role-Based Email Domains
    'admin@domain.com',
    'support@domain.com',
    'noreply@domain.com',
  
    // Suspicious Keywords in Domains
    'hackersite.com',
    'fraudulentdomain.com',
    'scamcentral.com',
  
    // Typosquatting Domains
    // These are just examples; typosquatting domains can vary widely.
    'gnail.com', // Intentional misspelling of "gmail.com"
  
    // others

    'example.com',
    'givmail.com',
    'scpulse.com',
    'existiert.com'
  ];
  

  // console.log(domain);

  return potentiallyHarmfulDomains.filter(harmful => harmful == domain).length > 0

}

export default EmailValidator