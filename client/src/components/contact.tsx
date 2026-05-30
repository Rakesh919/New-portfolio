import { useState } from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

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
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to build something amazing? Let's discuss your next backend project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="glass-card p-6 rounded-xl border-slate-700/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-slate-300 font-medium">Email</p>
                        <a href="mailto:rakesh88577@gmail.com" className="text-white hover:text-primary transition-colors">
                          rakesh88577@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaLinkedin className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-muted-foreground font-medium">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/rakesh-sharma-517589231/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                          /in/rakesh-sharma-517589231
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaGithub className="text-primary text-xl mr-4" />
                      <div>
                        <p className="text-muted-foreground font-medium">GitHub</p>
                        <a href="https://github.com/Rakesh919" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                          /Rakesh919
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="glass-card p-8 rounded-xl border-slate-700/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="block text-slate-300 mb-2 font-medium">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-slate-300 mb-2 font-medium">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-slate-300 mb-2 font-medium">Message</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
