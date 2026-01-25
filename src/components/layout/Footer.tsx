import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Award,
  Zap,
  Heart,
  Globe,
  ChevronDown,
  Search,
  BookOpen,
  DollarSign,
  Star,
  Users,
  Sparkles,
  LayoutDashboard,
  Library,
  HelpCircle,
  Target,
  Building2,
  Briefcase,
  PenTool,
  Newspaper,
  MessageCircle,
  FileText,
  Lock,
  Cookie,
  RefreshCcw
} from "lucide-react";
import { BrandLogo } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const footerLinks = {
  platform: [
    { label: "Discover Creators", href: "/discover", icon: Search },
    { label: "How It Works", href: "/how-it-works", icon: BookOpen },
    { label: "Pricing", href: "/pricing", icon: DollarSign },
    { label: "Success Stories", href: "/stories", icon: Star },
    { label: "User Dashboard", href: "/customer/dashboard", icon: Users },
  ],
  creators: [
    { label: "Join as Creator", href: "/for-creators", icon: Sparkles },
    { label: "Creator Dashboard", href: "/creator/dashboard", icon: LayoutDashboard },
    { label: "Resources", href: "/resources", icon: Library },
    { label: "FAQs", href: "/faqs", icon: HelpCircle },
    { label: "Creator Guide", href: "/guide", icon: Target },
  ],
  company: [
    { label: "About Us", href: "/about", icon: Building2 },
    { label: "Careers", href: "/careers", icon: Briefcase },
    { label: "Blog", href: "/blog", icon: PenTool },
    { label: "Press Kit", href: "/press", icon: Newspaper },
    { label: "Contact", href: "/contact", icon: MessageCircle },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms", icon: FileText },
    { label: "Privacy Policy", href: "/privacy", icon: Lock },
    { label: "Cookie Policy", href: "/cookies", icon: Cookie },
    { label: "Refund Policy", href: "/refunds", icon: RefreshCcw },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const contactInfo = [
  { icon: Phone, label: "+91 123 456 7890", href: "tel:+911234567890" },
  { icon: Mail, label: "support@adpromoo.com", href: "mailto:support@adpromoo.com" },
  { icon: MapPin, label: "Delhi, India", href: "#" },
];

const trustBadges = [
  { icon: Shield, label: "SSL Secured", description: "256-bit encryption" },
  { icon: Award, label: "ISO Certified", description: "Quality assured" },
  { icon: Zap, label: "Fast Support", description: "24/7 assistance" },
];

const paymentMethods = [
  { name: "Visa", gradient: "from-blue-600 to-blue-800" },
  { name: "Mastercard", gradient: "from-red-600 to-orange-600" },
  { name: "UPI", gradient: "from-green-600 to-emerald-600" },
  { name: "Paytm", gradient: "from-blue-500 to-cyan-500" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Newsletter Section */}


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-6 inline-flex" aria-label="AdPromoo home">
              <BrandLogo />
            </Link>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-sm">
              India's first creator-direct marketplace connecting brands with verified influencers.
              No middlemen, transparent pricing, secure payments.
            </p>

            {/* Contact Info - UPDATED STYLE */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-violet-600 transition-colors group"
                >
                  <contact.icon className="h-4 w-4 text-gray-400 group-hover:text-violet-500 transition-colors flex-shrink-0" />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>

            {/* Social Links - UPDATED STYLE */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg border border-gray-200 hover:border-violet-300 bg-white hover:bg-violet-50 flex items-center justify-center text-gray-600 hover:text-violet-600 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - 2x2 grid on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                Platform
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                    >
                      <link.icon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-violet-500 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                For Creators
              </h4>
              <ul className="space-y-3">
                {footerLinks.creators.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                    >
                      <link.icon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-violet-500 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                    >
                      <link.icon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-violet-500 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                    >
                      <link.icon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-violet-500 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Selector */}
              <div className="mt-6">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all text-sm group">
                  <Globe className="h-4 w-4 text-gray-400 group-hover:text-violet-500 transition-colors" />
                  <span className="text-gray-700 group-hover:text-violet-700 transition-colors">{selectedLanguage}</span>
                  <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-violet-500 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}


        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} <span className="font-semibold text-gray-900">AdPromoo</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1 flex items-center justify-center lg:justify-start gap-2">
                Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India 🇮🇳
              </p>
            </div>


            {/* App Download Buttons */}

          </div>
        </div>
      </div>
    </footer>
  );
}
