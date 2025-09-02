# CariAI – Streamlit MVP + Python Core + FastAPI Skeleton

This starter lets you **ship quickly with Streamlit**, while preparing for a **React (Next.js + shadcn/ui) frontend** later via a proper Python API (FastAPI).

## Structure
```
cariai-starter/
├─ apps/
│  ├─ streamlit_app.py          # MVP UI (deploy-first)
│  └─ api/
│     └─ main.py                # FastAPI skeleton for future React/shadcn
├─ packages/
│  └─ cariai_core/
│     ├─ __init__.py
│     ├─ llm.py                 # Gemini wrapper
│     └─ rag.py                 # tiny RAG helpers (baseline)
├─ requirements.txt             # for both Streamlit & FastAPI
├─ .env.example
└─ .gitignore
```

> **Honest take:** Do **not** use Streamlit as a backend for React. Streamlit is great for MVP UX, not for serving APIs. Use FastAPI for your React/shadcn app later.

---

## 1) Local run (Streamlit)

```bash
# Python 3.11+ recommended
python -m venv .venv && source .venv/bin/activate   # macOS
pip install -r requirements.txt

export GEMINI_API_KEY="YOUR-KEY"
streamlit run apps/streamlit_app.py
```

If you use `fish` shell:
```fish
set -x GEMINI_API_KEY "YOUR-KEY"
```

---

## 2) Deploy Streamlit (Community Cloud)

1. Push this repo to GitHub.
2. Go to https://share.streamlit.io (Streamlit Community Cloud).
3. Create new app → point to your repo.
4. Set **Main file path** to `apps/streamlit_app.py`.
5. Add secret `GEMINI_API_KEY` in App → **Settings → Secrets**.
6. Deploy. Done.

> Alt: Hugging Face Spaces (Streamlit template) also works.

---

## 3) Prepare for React + shadcn (Next.js) later

- Keep your business logic in `packages/cariai_core/`.
- Expose HTTP endpoints in `apps/api/main.py` (FastAPI).
- Deploy FastAPI to Railway/Render/Fly; deploy Next.js (shadcn/ui) to Vercel.
- Configure CORS and use a server-only API key. Never ship keys in the browser.

**Create Next.js app (when you're ready):**
```bash
npx create-next-app@latest web
cd web
# Tailwind is auto-included by default in new Next.js
npx shadcn@latest init
npx shadcn@latest add textarea button card input label
```

**Example fetch (client component):**
```ts
const resp = await fetch("https://YOUR-API/proposal", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ brief, portfolio }),
});
const data = await resp.json();
```

---

## 4) FastAPI (for React consumption)

Local:
```bash
uvicorn apps.api.main:app --reload
# POST http://127.0.0.1:8000/proposal
```

Later deploy to Railway/Render; keep Streamlit online for demo if you like.

---

## 5) Notes
- Models: start with `gemini-1.5-flash` (fast) and promote as needed.
- Rate limit & validate input; trim long prompts.
- For RAG: start simple (in-memory, this repo). Move to pgvector once Postgres is ready.
# jobless
