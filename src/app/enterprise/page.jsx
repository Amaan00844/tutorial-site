"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, Send, FileText, Database, AlertCircle, CheckCircle, Loader, Book, MessageSquare, X, Sparkles, ArrowRight, BarChart3 } from 'lucide-react';

const EnterpriseRAG = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [documents, setDocuments] = useState([]);
  const [systemStatus, setSystemStatus] = useState({
    vectorDB: 'ready',
    llm: 'ready',
    documents: 0
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const messagesEndRef = useRef(null);

  const sampleDocs = [
    { id: 1, title: 'Employee Handbook 2024', category: 'HR', pages: 45 },
    { id: 2, title: 'Technical Architecture Guide', category: 'Engineering', pages: 78 },
    { id: 3, title: 'Data Privacy Policy', category: 'Legal', pages: 23 },
    { id: 4, title: 'Benefits & Compensation', category: 'HR', pages: 34 },
    { id: 5, title: 'API Documentation v2.3', category: 'Engineering', pages: 156 }
  ];

  useEffect(() => {
    setDocuments(sampleDocs);
    setSystemStatus(prev => ({ ...prev, documents: sampleDocs.length }));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateRAGResponse = async (query) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const responses = {
      'vacation': {
        answer: 'According to our HR policies, full-time employees are entitled to 20 days of paid vacation per year. New employees accrue vacation time at a rate of 1.67 days per month during their first year. Vacation requests should be submitted at least two weeks in advance through the HR portal.',
        sources: [
          { doc: 'Employee Handbook 2024', page: 12, relevance: 0.95 },
          { doc: 'Benefits & Compensation', page: 8, relevance: 0.87 }
        ]
      },
      'api': {
        answer: 'Our API uses RESTful architecture with OAuth 2.0 authentication. All endpoints require a valid access token in the Authorization header. Rate limiting is set at 1000 requests per hour for standard accounts. For detailed endpoint documentation, refer to the API Documentation.',
        sources: [
          { doc: 'API Documentation v2.3', page: 5, relevance: 0.98 },
          { doc: 'Technical Architecture Guide', page: 34, relevance: 0.82 }
        ]
      },
      'privacy': {
        answer: 'We are fully GDPR and CCPA compliant. All employee data is encrypted at rest and in transit using AES-256 encryption. Data retention periods vary by data type, with personal information retained for 7 years after employment termination unless legally required otherwise.',
        sources: [
          { doc: 'Data Privacy Policy', page: 3, relevance: 0.96 },
          { doc: 'Technical Architecture Guide', page: 67, relevance: 0.79 }
        ]
      },
      default: {
        answer: 'Based on the available documentation, I found relevant information in our knowledge base. The system retrieved and analyzed multiple documents to provide this answer. For more specific details, please refine your question or consult the source documents directly.',
        sources: [
          { doc: 'Employee Handbook 2024', page: 1, relevance: 0.72 }
        ]
      }
    };

    let response = responses.default;
    for (const [key, value] of Object.entries(responses)) {
      if (query.toLowerCase().includes(key)) {
        response = value;
        break;
      }
    }

    setIsLoading(false);
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const response = await simulateRAGResponse(inputValue);

    const assistantMessage = {
      id: Date.now() + 1,
      type: 'assistant',
      content: response.answer,
      sources: response.sources
    };

    setMessages(prev => [...prev, assistantMessage]);
  };

  const clearChat = () => {
    setMessages([]);
  };

  const suggestions = [
    'What is the vacation policy?',
    'How do I access the API?',
    'Data privacy guidelines'
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-slideInUp { animation: slideInUp 0.6s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .glass-effect {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Header */}
      <div className="glass-effect border-b border-purple-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 animate-slideInUp">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur-lg opacity-75 animate-pulse"></div>
                <div className="relative p-3 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl hover:scale-110 transition-transform duration-300">
                  <Book className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Knowledge Base</h1>
                <p className="text-sm text-slate-400">Intelligent RAG Q&A System</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 text-emerald-300 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>All Systems Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="glass-effect border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'chat', label: 'Chat Interface', icon: MessageSquare },
              { id: 'documents', label: 'Document Library', icon: FileText },
              { id: 'status', label: 'System Status', icon: Database }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium text-sm transition-all duration-300 flex items-center gap-2 relative group ${
                  activeTab === tab.id
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6 py-6 w-full">
          {activeTab === 'chat' && (
            <div className="flex flex-col h-full glass-effect rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl hover:border-purple-500/40 transition-colors duration-300">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gradient-to-b from-slate-900/50 to-purple-900/20">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center animate-slideInUp">
                    <div className="relative mb-6 animate-float">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50"></div>
                      <div className="relative p-6 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30">
                        <Sparkles className="w-12 h-12 text-cyan-300 animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-3">
                      Ask me anything
                    </h3>
                    <p className="text-slate-400 max-w-md mb-8">
                      Explore your knowledge base with AI-powered search and retrieval powered by semantic understanding
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                      {suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => setInputValue(suggestion)}
                          className="group p-4 bg-gradient-to-br from-purple-900/40 to-cyan-900/20 hover:from-purple-800/60 hover:to-cyan-800/40 rounded-xl text-sm text-slate-200 transition-all duration-300 border border-purple-500/20 hover:border-cyan-500/40 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-left">{suggestion}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, idx) => (
                      <div
                        key={msg.id}
                        className={`flex animate-slideInUp ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div
                          className={`max-w-2xl group ${
                            msg.type === 'user'
                              ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-3xl rounded-tr-sm shadow-lg hover:shadow-purple-500/50'
                              : 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 text-slate-100 rounded-3xl rounded-tl-sm border border-slate-700/50 hover:border-cyan-500/30'
                          } px-6 py-4 transition-all duration-300 hover:scale-105 transform`}
                        >
                          <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          {msg.sources && (
                            <div className="mt-4 pt-4 border-t border-slate-600/30">
                              <p className="text-xs font-semibold mb-3 text-cyan-300 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                Sources Retrieved
                              </p>
                              <div className="space-y-2">
                                {msg.sources.map((source, idx) => (
                                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-3 p-2 rounded-lg bg-slate-700/20 hover:bg-slate-600/30 transition-colors">
                                    <FileText className="w-3 h-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-semibold text-slate-200">{source.doc}</p>
                                      <div className="flex gap-3 text-xs text-slate-400 mt-1">
                                        <span>Page {source.page}</span>
                                        <span className="text-cyan-400 font-medium">{Math.round(source.relevance * 100)}% match</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start animate-slideInUp">
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl rounded-tl-sm px-6 py-4 flex items-center gap-3 border border-slate-700/50">
                          <Loader className="w-4 h-4 text-cyan-400 animate-spin" />
                          <span className="text-slate-300">Searching knowledge base...</span>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Form */}
              <div className="border-t border-slate-700/50 p-6 bg-gradient-to-t from-slate-900/40 to-slate-800/20 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <div className="flex-1 relative group">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask a question about company policies..."
                      className="w-full px-5 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/30 text-slate-100 placeholder-slate-500 transition-all duration-300 hover:border-slate-500/70 disabled:opacity-50"
                      disabled={isLoading}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-focus-within:from-purple-600/5 group-focus-within:to-cyan-600/5 pointer-events-none transition-all duration-300"></div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                  {messages.length > 0 && (
                    <button
                      type="button"
                      onClick={clearChat}
                      className="px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 rounded-xl transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 hover:scale-105 transform active:scale-95"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </form>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="glass-effect rounded-2xl shadow-2xl p-8 h-full overflow-y-auto border border-purple-500/20 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">Indexed Documents</h2>
                <p className="text-slate-400">{documents.length} documents in knowledge base</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, idx) => (
                  <div
                    key={doc.id}
                    onMouseEnter={() => setHoveredCard(doc.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-slideInUp"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all duration-300 pointer-events-none"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all group-hover:scale-110">
                        <FileText className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors truncate">{doc.title}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full border border-purple-500/30 group-hover:bg-purple-500/40 transition-colors">
                            {doc.category}
                          </span>
                          <span className="text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">{doc.pages}p</span>
                        </div>
                        <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                          {doc.pages} pages indexed
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="glass-effect rounded-2xl shadow-2xl p-8 h-full overflow-y-auto border border-purple-500/20 hover:border-cyan-500/30 transition-colors duration-300">
              <h2 className="text-3xl font-bold gradient-text mb-8">System Status</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Database,
                    title: 'Vector Database',
                    status: 'Online',
                    desc: `ChromaDB instance running with ${systemStatus.documents} document collections`
                  },
                  {
                    icon: AlertCircle,
                    title: 'LLM Service',
                    status: 'Ready',
                    desc: 'Connected to language model with RAG pipeline active'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 animate-slideInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-cyan-600/0 group-hover:from-emerald-600/5 group-hover:to-cyan-600/10 rounded-xl pointer-events-none transition-all"></div>
                    <div className="relative flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-600/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 text-emerald-300 rounded-lg text-sm font-semibold flex items-center gap-2 border border-emerald-500/30 group-hover:from-emerald-600/40 transition-all">
                        <CheckCircle className="w-4 h-4" />
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  </div>
                ))}

                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 mt-8 animate-slideInUp" style={{ animationDelay: '200ms' }}>
                  <h3 className="font-bold text-slate-100 mb-4 group-hover:text-cyan-300 transition-colors">Architecture Overview</h3>
                  <div className="space-y-3">
                    {[
                      { phase: 'Phase 1', desc: 'Document ingestion with text splitting and embedding generation' },
                      { phase: 'Phase 2', desc: 'RAG chain with semantic search and context retrieval' },
                      { phase: 'Phase 3', desc: 'React frontend with FastAPI backend integration' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/20 group-hover:bg-slate-600/30 transition-colors">
                        <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-semibold text-cyan-300">{item.phase}</p>
                          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseRAG;