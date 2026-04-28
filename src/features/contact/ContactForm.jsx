import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../../components/openclaw/GlassCard';


const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
console.log(import.meta.env.VITE_CONTACTFORM);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
    }),

    
onSubmit: async (values, { resetForm, setSubmitting }) => {
  try {
    const { data } = await axios.post(
    `${import.meta.env.VITE_CONTACTFORM}/api/contact`,
      values,
    );

    console.log('Success:', data);
    setIsSubmitted(true); 
    resetForm();

    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    console.error(error);
    alert('Failed to send message');
  } finally {
    setSubmitting(false);
  }
}
  });

  return (
    <section id="contact" className="lg:py-24 py-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="font-heading text-4xl md:text-7xl leading-none text-gray-900 dark:text-white">
            LET'S <span className="text-purple-600">TALK</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email</p>
                <p className="font-medium">vipulvishwakrama161@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <GlassCard className="p-8 md:p-10">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-slate-500">I'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    name="name"
                    {...formik.getFieldProps('name')}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 outline-none transition-all ${
                      formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-transparent focus:border-purple-500'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    name="email"
                    {...formik.getFieldProps('email')}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 outline-none transition-all ${
                      formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-transparent focus:border-purple-500'
                    }`}
                    placeholder="vipul@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                  <textarea
                    name="message"
                    {...formik.getFieldProps('message')}
                    rows="4"
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 outline-none transition-all ${
                      formik.touched.message && formik.errors.message ? 'border-red-400' : 'border-transparent focus:border-purple-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-slate-900 dark:bg-purple-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 transition-all"
              >
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactForm;