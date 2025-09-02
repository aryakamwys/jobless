import os
from fastapi import FastAPI, HTTPException, Header
from pydantic import BaseModel
from packages.jobless_core.llm import gen_proposal
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Jobless API", description="AI-Powered Proposal & Job-Match Copilot")

# CORS configuration for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Next.js dev server
        "http://127.0.0.1:3000",
        "http://localhost:8501",  # Streamlit
        "*"  # Allow all for development (tighten in production)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProposalIn(BaseModel):
    brief: str
    portfolio: str | None = None

@app.get("/health")
def health():
    return {"ok": True, "service": "Jobless API", "version": "1.0.0"}

@app.post("/proposal")
def proposal(inp: ProposalIn, x_api_key: str = Header(None, alias="X-API-Key")):
    if not inp.brief.strip():
        raise HTTPException(status_code=400, detail="brief is required")
    
    if not x_api_key:
        raise HTTPException(status_code=400, detail="X-API-Key header is required")
    
    # Set the API key from header to environment
    os.environ["GEMINI_API_KEY"] = x_api_key
    
    try:
        text = gen_proposal(inp.brief, inp.portfolio or "")
        return {"draft": text, "success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating proposal: {str(e)}")

# Additional endpoint for job matching (placeholder)
@app.post("/match")
def match_jobs():
    return {"message": "Job matching endpoint - coming soon!", "status": "placeholder"}
