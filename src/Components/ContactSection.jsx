import { Github, Instagram, Linkedin, Mail,MapPin,Phone,Send } from "lucide-react"
import {useToast} from "../hooks/use-toast"

import { useState } from "react"


export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting , setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // alert("form submitted");

        setIsSubmitting(true)
        console.log("Submitting form...");

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you.",

            })
            setIsSubmitting(false)
        },1500)

    }

    
    return (
        <section
        id="contact"
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                   Got an idea, question, or opportunity? I'd love to hear from you. Let’s connect and create something great together!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                    href="mailto:nitinsaini0610@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        nitinsaini0610@gmail.com
                                    </a>
                                </div>

                            </div>



                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                    href="tel" 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 7988250976
                                    </a>
                                </div>



                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Rewari,Haryana
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/nitin-saini-b36531331">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/nitin0606_">
                                    <Instagram />
                                </a>
                                <a href="https://github.com/NitinSaini0606">
                                    <Github />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name"
                            className="block text-sm font-medium mb-5"
                            >
                                Your Name
                            </label>
                            <input 
                            type="text"
                            name="name"
                            id="name"
                            className="w-full px-4 py-3 mb-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Nitin Saini..."
                            />
                            

                            <label htmlFor="name"
                            className="block text-sm font-medium mb-5"
                            >
                                Your Email
                            </label>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-4 py-3 mb-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="   XYZ@gmail.com"
                            />

                            <label htmlFor="name"
                            className="block text-sm font-medium mb-5"
                            >
                                Your Message 
                            </label>
                            <textarea 
                            type="message"
                            name="message"
                            id="message"
                            className="w-full px-4 py-3 rounded-2xl border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello I'd like to talk about..."
                            />
                            
                            <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="cosmic-button w-full flex items-center justify-center gap-2 mt-5"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}