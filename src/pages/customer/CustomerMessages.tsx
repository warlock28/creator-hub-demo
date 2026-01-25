import { useState } from "react";
import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Send,
  Paperclip,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Image,
  AlertCircle,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "me" | "creator";
  timestamp: string;
  read: boolean;
  attachment?: {
    type: "file" | "image";
    name: string;
    url: string;
  };
}

interface Conversation {
  id: string;
  creator: {
    name: string;
    avatar: string;
  };
  booking: {
    id: string;
    service: string;
    status: "pending" | "active" | "completed";
    deadline: string;
  };
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  messages: Message[];
}

export default function CustomerMessages() {
  const [selectedConversation, setSelectedConversation] = useState<string>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // Mobile view state: "list" shows conversation list, "chat" shows active chat
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  // Handle conversation selection with mobile view toggle
  const handleSelectConversation = (id: string) => {
    setSelectedConversation(id);
    setMobileView("chat"); // Switch to chat view on mobile
  };

  // Handle back button on mobile
  const handleBackToList = () => {
    setMobileView("list");
  };

  const conversations: Conversation[] = [
    {
      id: "1",
      creator: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      },
      booking: {
        id: "BK-001",
        service: "Instagram Reel - Tech Review",
        status: "active",
        deadline: "Dec 30, 2025",
      },
      lastMessage: "I'll send the first draft by tomorrow evening!",
      lastMessageTime: "5 min ago",
      unread: 2,
      messages: [
        {
          id: "1",
          text: "Hi! Thanks for booking. I've received the product. Could you share some key points you'd like me to highlight?",
          sender: "creator",
          timestamp: "10:30 AM",
          read: true,
        },
        {
          id: "2",
          text: "Great! Please focus on the camera features, battery life, and design. Also, can you include a comparison with the previous model?",
          sender: "me",
          timestamp: "10:35 AM",
          read: true,
        },
        {
          id: "3",
          text: "Perfect! I'll include all those points. I'm planning to shoot tomorrow. Any specific hashtags or mentions you'd like?",
          sender: "creator",
          timestamp: "10:40 AM",
          read: true,
        },
        {
          id: "4",
          text: "Yes, please use #TechInnovation and tag our official handle @techbrand",
          sender: "me",
          timestamp: "10:45 AM",
          read: true,
        },
        {
          id: "5",
          text: "Noted! I'll send the first draft by tomorrow evening!",
          sender: "creator",
          timestamp: "Just now",
          read: false,
        },
      ],
    },
    {
      id: "2",
      creator: {
        name: "Rahul Verma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      },
      booking: {
        id: "BK-002",
        service: "YouTube Video Review",
        status: "active",
        deadline: "Jan 2, 2026",
      },
      lastMessage: "Here's the video draft for your review",
      lastMessageTime: "2 hours ago",
      unread: 1,
      messages: [
        {
          id: "1",
          text: "Hi! I've started working on your YouTube video. Can you send me the product specs sheet?",
          sender: "creator",
          timestamp: "Yesterday, 3:00 PM",
          read: true,
        },
        {
          id: "2",
          text: "Sure, here's the document.",
          sender: "me",
          timestamp: "Yesterday, 3:15 PM",
          read: true,
          attachment: {
            type: "file",
            name: "Product_Specs.pdf",
            url: "#",
          },
        },
        {
          id: "3",
          text: "Thanks! Here's the video draft for your review",
          sender: "creator",
          timestamp: "2 hours ago",
          read: false,
          attachment: {
            type: "file",
            name: "Video_Draft_v1.mp4",
            url: "#",
          },
        },
      ],
    },
    {
      id: "3",
      creator: {
        name: "Ananya Desai",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      },
      booking: {
        id: "BK-003",
        service: "Blog Post - Product Launch",
        status: "completed",
        deadline: "Dec 20, 2025",
      },
      lastMessage: "Thank you! It was great working with you.",
      lastMessageTime: "3 days ago",
      unread: 0,
      messages: [
        {
          id: "1",
          text: "The blog post is ready! I've included all the SEO keywords you mentioned.",
          sender: "creator",
          timestamp: "3 days ago",
          read: true,
        },
        {
          id: "2",
          text: "Perfect! This looks amazing. Approving the work now.",
          sender: "me",
          timestamp: "3 days ago",
          read: true,
        },
        {
          id: "3",
          text: "Thank you! It was great working with you.",
          sender: "creator",
          timestamp: "3 days ago",
          read: true,
        },
      ],
    },
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.booking.service.toLowerCase().includes(searchQuery.toLowerCase())
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
    <CustomerLayout>
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
            Communicate with creators about your campaigns
          </p>
        </motion.div>

        {/* Messages Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-0 overflow-hidden">
            <div className="grid md:grid-cols-5 lg:grid-cols-3 h-[calc(100vh-220px)] md:h-[calc(100vh-280px)] min-h-[500px] md:min-h-[600px]">
              {/* Conversation List - Hidden on mobile when viewing chat */}
              <div className={`border-r border-border md:col-span-2 lg:col-span-1 flex flex-col ${mobileView === "chat" ? "hidden md:flex" : "flex"
                }`}>
                {/* Search */}
                <div className="p-3 md:p-4 border-b border-border">
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
                <ScrollArea className="flex-1">
                  <div className="p-2">
                    {filteredConversations.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                        <MessageCircle className="h-12 w-12 text-muted-foreground/50 mb-3" />
                        <p className="text-sm text-muted-foreground">No conversations found</p>
                      </div>
                    ) : (
                      filteredConversations.map((conv) => (
                        <button
                          key={conv.id}
                          onClick={() => handleSelectConversation(conv.id)}
                          className={`w-full p-3 md:p-4 rounded-xl text-left transition-colors mb-2 ${selectedConversation === conv.id
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-secondary/50"
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative flex-shrink-0">
                              <img
                                src={conv.creator.avatar}
                                alt={conv.creator.name}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover"
                              />
                              {conv.unread > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center font-medium">
                                  {conv.unread}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1 gap-2">
                                <h4 className="font-semibold text-sm truncate">
                                  {conv.creator.name}
                                </h4>
                                <span className="text-[10px] text-muted-foreground flex-shrink-0">
                                  {conv.lastMessageTime}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground mb-1 truncate">
                                {conv.booking.service}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {conv.lastMessage}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge
                                  variant={
                                    conv.booking.status === "active" ? "default" :
                                      conv.booking.status === "completed" ? "success" : "warning"
                                  }
                                  className="text-[10px] py-0"
                                >
                                  {conv.booking.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area - Hidden on mobile when viewing list */}
              <div className={`md:col-span-3 lg:col-span-2 flex flex-col ${mobileView === "list" ? "hidden md:flex" : "flex"
                }`}>
                {currentConversation ? (
                  <>
                    {/* Booking Context Header */}
                    <div className="p-3 md:p-4 border-b border-border bg-secondary/20">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        {/* Mobile Back Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="md:hidden h-8 w-8 flex-shrink-0"
                          onClick={handleBackToList}
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <img
                          src={currentConversation.creator.avatar}
                          alt={currentConversation.creator.name}
                          className="w-9 h-9 md:w-10 md:h-10 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base truncate">
                            {currentConversation.creator.name}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {currentConversation.booking.service}
                          </p>
                        </div>
                        <Badge
                          variant={
                            currentConversation.booking.status === "active" ? "default" :
                              currentConversation.booking.status === "completed" ? "success" : "warning"
                          }
                          className="flex-shrink-0 text-xs"
                        >
                          <span className="hidden sm:inline-flex items-center">
                            {currentConversation.booking.status === "active" && <Clock className="h-3 w-3 mr-1" />}
                            {currentConversation.booking.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {currentConversation.booking.status === "pending" && <AlertCircle className="h-3 w-3 mr-1" />}
                            {currentConversation.booking.status.charAt(0).toUpperCase() + currentConversation.booking.status.slice(1)}
                          </span>
                          <span className="sm:hidden">
                            {currentConversation.booking.status === "active" && <Clock className="h-3 w-3" />}
                            {currentConversation.booking.status === "completed" && <CheckCircle2 className="h-3 w-3" />}
                            {currentConversation.booking.status === "pending" && <AlertCircle className="h-3 w-3" />}
                          </span>
                        </Badge>
                      </div>

                      {/* Campaign Info Bar - Responsive */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span className="hidden sm:inline">Deadline: </span>
                          <span>{currentConversation.booking.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <FileText className="h-3 w-3" />
                          <span className="hidden sm:inline">Booking: </span>
                          <span>{currentConversation.booking.id}</span>
                        </div>
                      </div>

                      {/* Action Controls - Responsive */}
                      {currentConversation.booking.status === "active" && (
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                          <Button size="sm" variant="outline" className="text-xs h-8">
                            <Download className="h-3 w-3 mr-1" />
                            <span className="hidden sm:inline">Download Files</span>
                            <span className="sm:hidden">Files</span>
                          </Button>
                          <Button size="sm" className="text-xs h-8">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            <span className="hidden sm:inline">Approve Work</span>
                            <span className="sm:hidden">Approve</span>
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-3 md:p-4">
                      <div className="space-y-3 md:space-y-4">
                        {currentConversation.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"
                              }`}
                          >
                            <div
                              className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] ${message.sender === "me"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary"
                                } rounded-2xl px-3 py-2 md:px-4 md:py-3`}
                            >
                              <p className="text-sm leading-relaxed">{message.text}</p>

                              {/* Attachment */}
                              {message.attachment && (
                                <div className={`mt-2 md:mt-3 p-2 md:p-3 rounded-xl ${message.sender === "me" ? "bg-primary-foreground/10" : "bg-background"
                                  } flex items-center gap-2 md:gap-3`}>
                                  {message.attachment.type === "file" ? (
                                    <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                                  ) : (
                                    <Image className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-medium truncate ${message.sender === "me" ? "text-primary-foreground" : ""
                                      }`}>
                                      {message.attachment.name}
                                    </p>
                                    <p className={`text-[10px] ${message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                                      }`}>
                                      Click to download
                                    </p>
                                  </div>
                                  <Download className={`h-4 w-4 flex-shrink-0 ${message.sender === "me" ? "text-primary-foreground" : ""
                                    }`} />
                                </div>
                              )}

                              <div className="flex items-center justify-between mt-1 md:mt-2 gap-2">
                                <p
                                  className={`text-[10px] ${message.sender === "me"
                                    ? "text-primary-foreground/70"
                                    : "text-muted-foreground"
                                    }`}
                                >
                                  {message.timestamp}
                                </p>
                                {message.sender === "me" && (
                                  <span className={`text-[10px] ${message.read ? "text-primary-foreground/70" : "text-primary-foreground"
                                    }`}>
                                    {message.read ? "Read" : "Sent"}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="p-2 md:p-4 border-t border-border bg-secondary/20">
                      <div className="flex items-end gap-1 md:gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 flex-shrink-0">
                          <Paperclip className="h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                        <Textarea
                          placeholder="Type your message..."
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="flex-1 min-h-[40px] md:min-h-[44px] max-h-[100px] md:max-h-[120px] resize-none text-sm"
                          rows={1}
                        />
                        <Button
                          onClick={handleSendMessage}
                          size="icon"
                          className="h-9 w-9 md:h-10 md:w-10 flex-shrink-0"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1 md:mt-2 text-center md:text-left hidden sm:block">
                        Press Enter to send, Shift+Enter for new line
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full p-6">
                    <div className="text-center">
                      <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-base md:text-lg mb-2">
                        Select a conversation
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                        Choose a booking conversation to start messaging
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </CustomerLayout>
  );
}
