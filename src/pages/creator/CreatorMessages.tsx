import { useState } from "react";
import { motion } from "framer-motion";
import { CreatorLayout } from "@/components/layout/CreatorLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Calendar,
  ArrowLeft,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "me" | "customer";
  timestamp: string;
}

interface Conversation {
  id: string;
  customer: string;
  customerAvatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  bookingId: string;
  bookingTitle: string;
  messages: Message[];
}

export default function CreatorMessages() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');

  const conversations: Conversation[] = [
    {
      id: "1",
      customer: "TechBrand India",
      customerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop",
      lastMessage: "Thanks! Looking forward to the final deliverables",
      timestamp: "5 min ago",
      unread: 2,
      bookingId: "BK-001",
      bookingTitle: "Instagram Reel - Smartphone Review",
      messages: [
        {
          id: "1",
          text: "Hi Priya! We're excited to work with you on this campaign.",
          sender: "customer",
          timestamp: "10:30 AM",
        },
        {
          id: "2",
          text: "Hello! Thank you for choosing me. I'm excited too! When would you like me to start?",
          sender: "me",
          timestamp: "10:32 AM",
        },
        {
          id: "3",
          text: "We can start right away. I'll send over the product today. Can you deliver by Friday?",
          sender: "customer",
          timestamp: "10:35 AM",
        },
        {
          id: "4",
          text: "Perfect! Yes, Friday works great. I'll create 2-3 concept options for you to choose from.",
          sender: "me",
          timestamp: "10:37 AM",
        },
        {
          id: "5",
          text: "That sounds excellent. Looking forward to seeing your creative approach!",
          sender: "customer",
          timestamp: "10:40 AM",
        },
        {
          id: "6",
          text: "Thanks! Looking forward to the final deliverables",
          sender: "customer",
          timestamp: "Just now",
        },
      ],
    },
    {
      id: "2",
      customer: "GadgetWorld",
      customerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop",
      lastMessage: "Perfect! When can we start?",
      timestamp: "1 hour ago",
      unread: 1,
      bookingId: "BK-002",
      bookingTitle: "YouTube Video - Earbuds Review",
      messages: [
        {
          id: "1",
          text: "Hi! We loved your previous tech reviews.",
          sender: "customer",
          timestamp: "Yesterday",
        },
        {
          id: "2",
          text: "Thank you! I'd love to collaborate with GadgetWorld.",
          sender: "me",
          timestamp: "Yesterday",
        },
        {
          id: "3",
          text: "Perfect! When can we start?",
          sender: "customer",
          timestamp: "1 hour ago",
        },
      ],
    },
    {
      id: "3",
      customer: "StartupX",
      customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      lastMessage: "The draft looks amazing!",
      timestamp: "3 hours ago",
      unread: 0,
      bookingId: "BK-003",
      bookingTitle: "Blog Post - Productivity Apps",
      messages: [
        {
          id: "1",
          text: "Here's the first draft for your review",
          sender: "me",
          timestamp: "Yesterday",
        },
        {
          id: "2",
          text: "The draft looks amazing!",
          sender: "customer",
          timestamp: "3 hours ago",
        },
      ],
    },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
      // Handle send logic
    }
  };

  return (
    <CreatorLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Messages
          </h1>
          <p className="text-muted-foreground">
            Communicate with customers about your campaigns
          </p>
        </motion.div>

        {/* Messages Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-0 overflow-hidden">
            <div className="grid lg:grid-cols-3 h-[calc(100vh-200px)] md:h-[calc(100vh-280px)] min-h-[400px] md:min-h-[600px]">
              {/* Conversations List - Hidden on mobile when viewing chat */}
              <div className={`border-r border-border lg:col-span-1 ${mobileView === 'chat' ? 'hidden lg:block' : 'block'}`}>
                {/* Search */}
                <div className="p-3 sm:p-4 border-b border-border">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Conversation List */}
                <ScrollArea className="h-[calc(100%-57px)] sm:h-[calc(100%-73px)]">
                  <div className="p-2">
                    {filteredConversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => {
                          setSelectedConversation(conv.id);
                          setMobileView('chat');
                        }}
                        className={`w-full p-3 sm:p-4 rounded-xl text-left transition-colors mb-2 ${selectedConversation === conv.id
                          ? "bg-primary/10"
                          : "hover:bg-secondary/50"
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <img
                              src={conv.customerAvatar}
                              alt={conv.customer}
                              className="w-12 h-12 rounded-xl object-cover"
                            />
                            {conv.unread > 0 && (
                              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center font-medium">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-sm truncate">
                                {conv.customer}
                              </h4>
                              <span className="text-[10px] text-muted-foreground">
                                {conv.timestamp}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1 truncate">
                              {conv.bookingTitle}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {conv.lastMessage}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area - Hidden on mobile when viewing list */}
              <div className={`lg:col-span-2 flex flex-col ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`}>
                {currentConversation ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-3 sm:p-4 border-b border-border flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Back button for mobile */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="lg:hidden h-9 w-9"
                          onClick={() => setMobileView('list')}
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <img
                          src={currentConversation.customerAvatar}
                          alt={currentConversation.customer}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">
                            {currentConversation.customer}
                          </h3>
                          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span className="truncate max-w-[200px]">{currentConversation.bookingTitle}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {currentConversation.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"
                              }`}
                          >
                            <div
                              className={`max-w-[70%] ${message.sender === "me"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary"
                                } rounded-2xl px-4 py-3`}
                            >
                              <p className="text-sm">{message.text}</p>
                              <p
                                className={`text-[10px] mt-1 ${message.sender === "me"
                                  ? "text-primary-foreground/70"
                                  : "text-muted-foreground"
                                  }`}
                              >
                                {message.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="p-3 sm:p-4 border-t border-border">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 shrink-0">
                          <Paperclip className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Input
                          placeholder="Type your message..."
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="flex-1 h-9 sm:h-10"
                        />
                        <Button onClick={handleSendMessage} className="h-9 w-9 sm:h-10 sm:w-10 p-0 shrink-0">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="h-20 w-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                        <Search className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        Select a conversation
                      </h3>
                      <p className="text-muted-foreground">
                        Choose a conversation to start messaging
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </CreatorLayout>
  );
}
