# Jobless - AI-Powered Proposal Generator

> **AI-driven proposal generation tool that helps freelancers and agencies create professional project proposals instantly using Google Gemini AI.**

![Uploading image.png…]()


## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Google Gemini API Key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jobless.git
cd jobless

# Install Python dependencies
pip install -r requirements.txt

# Install Next.js dependencies
cd apps/web
npm install
```

### Environment Setup

```bash
# Set your Gemini API key
export GEMINI_API_KEY="your-api-key-here"

# For development, create .env file
echo "GEMINI_API_KEY=your-api-key-here" > .env
```

### Run the Application

**Option 1: Streamlit MVP (Quick Demo)**
```bash
streamlit run apps/streamlit_app.py
```

**Option 2: Next.js Frontend + FastAPI Backend (Production)**
```bash
# Terminal 1: Start FastAPI backend
uvicorn apps.api.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2: Start Next.js frontend
cd apps/web && npm run dev
```

---

## ⚡ Cara Kerja

1. **User memasukkan brief proyek** dari klien
2. **Opsional:** Menambahkan ringkasan portofolio
3. **AI (Gemini)** memproses dan generate proposal dengan format:
   - 📋 **Ringkasan proyek**
   - 🎯 **Scope pekerjaan**
   - ⚠️ **Asumsi yang dibuat**
   - ⏰ **Timeline** (dalam minggu)
   - 💰 **Estimasi Biaya**
   - ⚠️ **Risiko potensial**
   - ❓ **Q&A section**

---

## 🗺️ Roadmap Development

### Phase 1 (Current): ✅ MVP Streamlit
- ✅ Basic proposal generation
- ✅ Google Gemini integration
- ✅ Simple UI dengan Streamlit
- ✅ Next.js + shadcn/ui frontend
- ✅ FastAPI backend with CORS

### Phase 2 (Next): 🔄 Enhanced Features
- 🔄 Job matching berdasarkan skills
- 🔄 RAG system untuk knowledge base
- 🔄 Database integration (PostgreSQL + pgvector)
- 🔄 Client management system
- 🔄 Advanced proposal templates
- 🔄 Multi-language support

### Phase 3 (Future): 📋 Enterprise Features
- 📋 Team collaboration
- 📋 Analytics & reporting
- 📋 CRM integration
- 📋 Advanced AI models
- 📋 Custom branding

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **AI** | Google Gemini | Generative AI for proposals |
| **Frontend** | Next.js + shadcn/ui | Modern React framework |
| **Backend API** | FastAPI | High-performance Python API |
| **ML/Vector** | NumPy + pgvector | Vector operations (planned) |
| **Database** | PostgreSQL | Data persistence (planned) |
| **Deployment** | Streamlit Cloud + Vercel | Cloud hosting |

---

## 📁 Project Structure

```
jobless/
├── apps/
│   ├── streamlit_app.py      # MVP UI (Streamlit)
│   ├── web/                  # Next.js frontend
│   │   ├── src/app/
│   │   │   ├── page.tsx      # Landing page
│   │   │   └── generate/     # Proposal generator
│   │   └── components/ui/    # shadcn/ui components
│   └── api/
│       └── main.py           # FastAPI backend
├── packages/
│   └── jobless_core/
│       ├── llm.py           # Gemini AI wrapper
│       └── rag.py           # RAG utilities
├── requirements.txt          # Python dependencies
└── README.md                # This file
```

---

## 🌐 API Endpoints

### Health Check
```http
GET /health
```

### Generate Proposal
```http
POST /proposal
Content-Type: application/json
X-API-Key: your-gemini-api-key

{
  "brief": "Project description from client",
  "portfolio": "Optional portfolio summary"
}
```

**Response:**
```json
{
  "draft": "Generated proposal text with structured format"
}
```

---

## 🚀 Deployment

### Streamlit Cloud
1. Push repository to GitHub
2. Connect to [Streamlit Cloud](https://share.streamlit.io)
3. Set main file: `apps/streamlit_app.py`
4. Add secret: `GEMINI_API_KEY`

### Vercel (Next.js)
1. Connect GitHub repository to Vercel
2. Set root directory: `apps/web`
3. Deploy automatically

### Railway (FastAPI)
1. Connect repository to Railway
2. Set start command: `uvicorn apps.api.main:app --host 0.0.0.0 --port $PORT`
3. Add environment variable: `GEMINI_API_KEY`

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---


## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powerful language generation
- [Streamlit](https://streamlit.io/) for rapid prototyping
- [Next.js](https://nextjs.org/) & [shadcn/ui](https://ui.shadcn.com/) for modern frontend
- [FastAPI](https://fastapi.tiangolo.com/) for high-performance backend

---

## 📧 Contact

**Made by Arya**
- Email: aryakaml24@gmail.com

---

<div align="center">
  <p>⭐ Star this repository if it helped you!</p>
</div>
