'use client'

import type React from 'react'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useOrders } from '@/contexts/orders-context'
import styles from './contact-section.module.css'

export default function ContactSection() {
  const { t } = useLanguage()
  const { addOrder } = useOrders()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedOrderId, setSubmittedOrderId] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Determine priority based on message content
      const priority =
        formData.message.toLowerCase().includes('urgent') ||
        formData.message.toLowerCase().includes('asap')
          ? 'high'
          : formData.message.toLowerCase().includes('commercial') ||
              formData.message.toLowerCase().includes('industrial')
            ? 'high'
            : 'medium'

      // Estimate value based on message content
      let estimatedValue = 50000 // Default
      if (formData.message.toLowerCase().includes('commercial'))
        estimatedValue = 200000
      if (formData.message.toLowerCase().includes('industrial'))
        estimatedValue = 500000
      if (formData.message.toLowerCase().includes('residential'))
        estimatedValue = 100000

      // Add order to Firebase
      const orderId = await addOrder({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        priority,
        estimatedValue,
      })

      setSubmittedOrderId(orderId)
      setIsSubmitted(true)
      setIsSubmitting(false)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 5000)
    } catch (error: any) {
      console.error('Error submitting order:', error)
      setError(error.message || 'Failed to submit order. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <CheckCircle size={64} />
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been submitted successfully to Firebase.</p>
            <div className={styles.orderDetails}>
              <p>
                <strong>Order ID:</strong> {submittedOrderId}
              </p>
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              {formData.phone && (
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
              )}
            </div>
            {/* <p className={styles.followUp}>
              Your order is now stored in Firebase Firestore. Check the admin
              dashboard to see real-time updates!
            </p> */}
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', phone: '', message: '' })
              }}
              className={styles.newMessageButton}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('contactUs')}</h1>
          {/* <p className={styles.subtitle}>
            Get in touch with us for all your concrete needs. Powered by
            Firebase!
          </p> */}
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Phone className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>{t('contactNumber')}</h3>
                <p>+91 80033 49997</p>
                <p>+91 75687 46566</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <Mail className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>{t('email')}</h3>
                <p>admin@asinfraconcrete.com</p>
                <p>sales@asinfraconcrete.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <MapPin className={styles.icon} />
              </div>
              <div className={styles.infoContent}>
                <h3>Address</h3>
                <p>Building No./Flat No.: 9/DR/01 Name Of Premises/Building: Goner Road/Street: Ring Road Locality/Sub Locality: Sanganer City/Town/Village: Jaipur District: Jaipur State: Rajasthan PIN Code: 303905</p>
                <p>Jaipur, Rajasthan 303905</p>
                <p>India</p>
              </div>
            </div>
            {/* 
            <div className={styles.firebaseCard}>
              <div className={styles.firebaseIcon}>🔥</div>
              <div className={styles.firebaseContent}>
                <h3>Powered by Firebase</h3>
                <p>Real-time database</p>
                <p>Secure authentication</p>
                <p>Cloud storage</p>
              </div>
            </div> */}
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell us about your concrete requirements..."
                  disabled={isSubmitting}
                />
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className={styles.spinner} />
                    Saving to Firebase...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Find Us Here</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.801604527801!2d75.88949054441984!3d26.783164941052693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc900343eec23%3A0x59b8864b60d33a0!2sHeritage%20ReadyMix%20Jaipur!5e1!3m2!1sen!2sin!4v1770441806463!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
