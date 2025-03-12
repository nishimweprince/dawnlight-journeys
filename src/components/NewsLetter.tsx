import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const NewsletterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!firstName || !surname || !email || !country) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send the data to an API
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    // Reset form
    setFirstName('');
    setSurname('');
    setEmail('');
    setCountry('');
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#f4f1ea] p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-4xl md:text-5xl text-[#222222] mb-6">
            Need some<br /> inspiration?
          </h3>
        </div>
        
        <div>
          <p className="text-[#222222] mb-6">
            Be inspired by the latest news from Dawnlight journey. Subscribe to our newsletter.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name" 
                className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
              />
              <input 
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)} 
                placeholder="Surname" 
                className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
              />
            </div>
            
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email Address" 
              className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
            />
            
            <select 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-[#e2dfd7] p-3 text-[#222222] w-full appearance-none"
            >
              <option value="" disabled>Country of residence</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="south-africa">South Africa</option>
              <option value="namibia">Namibia</option>
              <option value="botswana">Botswana</option>
              <option value="zimbabwe">Zimbabwe</option>
              <option value="zambia">Zambia</option>
              <option value="rwanda">Rwanda</option>
              <option value="other">Other</option>
            </select>
            
            <button 
              type="submit"
              className="flex items-center mt-6 group"
            >
              <div className="w-10 h-10 rounded-full border border-[#FF5C28] flex items-center justify-center group-hover:bg-[#FF5C28] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5C28] group-hover:text-white transition-colors duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <span className="ml-2 text-[#222222] uppercase tracking-wider text-sm font-medium">
                SUBMIT
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;