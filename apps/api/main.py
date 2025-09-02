import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from packages.cariai_core.llm import gen_proposal
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="jobless API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProposalIn(BaseModel):
    brief: str
    portfolio: str | None = None

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/proposal")
def proposal(inp: ProposalIn):
    if not inp.brief.strip():
        raise HTTPException(status_code=400, detail="brief is required")
    try:
        text = gen_proposal(inp.brief, inp.portfolio or "")
        return {"draft": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
