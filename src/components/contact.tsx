import { useState } from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

// Friendly illustration (waving hand)
const WavingHand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="24" fill="#fbbf24" />
    <path d="M18 22c0-2 2-4 4-4s4 2 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 26v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 30c2 2 6 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 18c0-2-2-4-4-4s-4 2-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_6tmlxeu', // service id
        'template_immsrij', // template id
        {
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
          to_email: 'rakeshsh915@gmail.com',
        },
        'LyT6arhtdT2WpU86O' // public key
      );
      toast({
        title: "Message sent!",
        description: "Email sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 dark:bg-slate-800/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to build something amazing? Let's connect and create your next project.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, type: 'spring' }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="h-full"
            >
              <Card className="glass-card min-h-[400px] h-full p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/60 flex flex-col items-center text-center shadow-xl transition-all duration-300">
                <WavingHand className="w-16 h-16 mb-4 animate-float" />
                <CardContent className="p-0 w-full">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Get In Touch</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message or connect with me on social media!</p>
                  <div className="space-y-5 w-full">
                    <a href="mailto:rakesh88577@gmail.com" className="flex items-center gap-3 text-lg text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium group">
                      <Mail className="w-6 h-6" />
                      <span className="underline underline-offset-2">rakesh88577@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/rakesh-sharma-517589231/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-blue-800 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium group">
                      <FaLinkedin className="w-6 h-6" />
                      <span className="underline underline-offset-2">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Rakesh919" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors font-medium group">
                      <FaGithub className="w-6 h-6" />
                      <span className="underline underline-offset-2">GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/rakeshsharma.30" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors font-medium group">
                      <FaInstagram className="w-6 h-6" />
                      <span className="underline underline-offset-2">Instagram</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, type: 'spring' }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="h-full"
            >
              <Card className="glass-card min-h-[400px] h-full p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/60 shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Message</Label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        {/* Animated background gradients */}
        <div className="pointer-events-none absolute -z-10 inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>
    </section>
  );
}
