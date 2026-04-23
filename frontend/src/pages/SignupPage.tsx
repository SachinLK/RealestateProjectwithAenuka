import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Buyer' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (res.ok) {
        // Need to fetch user details or just use data from token response
        // For simplicity, let's say the backend returns the token
        login({ id: 'temp-id', name: formData.name, email: formData.email, role: formData.role }, data.token);
        navigate('/');
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-sm shadow-xl"
      >
        <h1 className="text-3xl font-serif mb-6 text-center">Create an Account</h1>
        {error && <p className="text-red-500 text-xs text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-dark/60 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-gold-dark bg-transparent transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-dark/60 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-gold-dark bg-transparent transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-dark/60 mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-gold-dark bg-transparent transition-colors"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-brand-dark/60 mb-2">I am a</label>
            <select
              className="w-full border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-gold-dark bg-transparent transition-colors"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="Buyer">Buyer</option>
              <option value="Lister">Lister</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-brand-gold-dark text-white py-3 text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold-dark/90 transition-all mt-8"
          >
            Sign Up
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-brand-dark/60">
          Already have an account? <Link to="/login" className="text-brand-gold-dark underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}
