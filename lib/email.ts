export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_quy4kuv',
  CONTACT_TEMPLATE_ID: 'template_egrc6we',
  NEWSLETTER_TEMPLATE_ID: 'template_egrc6we',
  USER_ID: 'EzkvBn0Po6-kI8YfA',
  ACCESS_TOKEN: 'SdA40h1OpDZQ2wKTj5tfA'
};

export const sendContactEmail = async (data: ContactFormData) => {
  const emailData = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
    user_id: EMAILJS_CONFIG.USER_ID,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'info@dawnlightjourneysrwanda.com',
      submitted_date: new Date().toLocaleString(),
    }
  };

  if (EMAILJS_CONFIG.ACCESS_TOKEN && EMAILJS_CONFIG.ACCESS_TOKEN !== 'your_private_key') {
    (emailData as any).accessToken = EMAILJS_CONFIG.ACCESS_TOKEN;
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS API error: ${response.status} - ${errorText}`);
  }

  return response.text();
};

export const sendNewsletterEmail = async (data: NewsletterFormData) => {
  const emailData = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID,
    user_id: EMAILJS_CONFIG.USER_ID,
    template_params: {
      subscriber_email: data.email,
      to_email: 'info@dawnlightjourneysrwanda.com',
      submitted_date: new Date().toLocaleString(),
    }
  };

  if (EMAILJS_CONFIG.ACCESS_TOKEN && EMAILJS_CONFIG.ACCESS_TOKEN !== 'your_private_key') {
    (emailData as any).accessToken = EMAILJS_CONFIG.ACCESS_TOKEN;
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS API error: ${response.status} - ${errorText}`);
  }

  return response.text();
};