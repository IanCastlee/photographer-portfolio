import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import { Button } from '../atoms/Button';

export const ContactForm = ({ defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService || 'Commercial Photography',
    budget: '$3,000 - $7,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking commission send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-neutral-100 dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 text-center flex flex-col items-center justify-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Inquiry Received
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
          Thank you, <span className="font-semibold text-neutral-900 dark:text-white">{formData.name}</span>. We will review your production requirements and respond within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              service: 'Commercial Photography',
              budget: '$3,000 - $7,000',
              message: ''
            });
          }}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-neutral-100/90 dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800/80 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          id="name"
          placeholder="e.g. Julian Vance"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          label="Email Address"
          id="email"
          type="email"
          placeholder="julian@company.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs uppercase font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
            Selected Service
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 text-sm transition-all"
          >
            <option value="Commercial Photography">Commercial Photography</option>
            <option value="Editorial & Fashion">Editorial & Fashion</option>
            <option value="Artistic Retouching">Artistic Retouching</option>
            <option value="Architecture & Spaces">Architecture & Spaces</option>
            <option value="Custom Project">Custom Project Commission</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-xs uppercase font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
            Estimated Budget
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 text-sm transition-all"
          >
            <option value="$1,500 - $3,000">$1,500 - $3,000</option>
            <option value="$3,000 - $7,000">$3,000 - $7,000</option>
            <option value="$7,000 - $15,000">$7,000 - $15,000</option>
            <option value="$15,000+">$15,000+ (Full Production)</option>
          </select>
        </div>
      </div>

      <TextArea
        label="Project Details & Timeline"
        id="message"
        rows={4}
        placeholder="Brief description of your project, mood boards, expected shoot dates, and deliverables..."
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={loading}
        icon={Send}
      >
        {loading ? 'Sending Proposal...' : 'Send Commission Request'}
      </Button>
    </form>
  );
};

export default ContactForm;
