import React, { useState } from 'react';

function Contact() {
  const whatsappNumber = '18763736837';
  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // whatsApp message formatting
    const fullMessage = `Hi Zeta Jewellery,%0A%0AName: ${name}%0AEmail: ${email}%0A${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    // open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="you@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Tell us your order..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn w-100" style={{backgroundColor:'#a8a1ad', color:'#ffffff'}}>
              <b>Send</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
