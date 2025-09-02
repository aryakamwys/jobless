import os
import google.generativeai as genai

MODEL_ID = os.getenv("GEMINI_MODEL_ID", "gemini-1.5-flash")

def _get_model():
    key = os.getenv("GEMINI_API_KEY")
    if not key:
        raise RuntimeError("GEMINI_API_KEY is not set")
    genai.configure(api_key=key)
    return genai.GenerativeModel(MODEL_ID)

SYSTEM_STYLE = (
    "You are a senior proposal writer. Output in Indonesian. "
    "Selalu cantumkan: Ringkasan, Scope, Asumsi, Timeline (minggu), Estimasi Biaya, Risiko, Q&A."
)

def gen_proposal(project_text: str, portfolio_snippets: str = "") -> str:
    model = _get_model()
    prompt = f"""{SYSTEM_STYLE}
    Brief Klien:
    ```
    {project_text}
    ```
    Referensi Portofolio:
    ```
    {portfolio_snippets}
    ```
    Tulis proposal ringkas, spesifik, dan profesional.
    """
    resp = model.generate_content(prompt)
    return (getattr(resp, "text", "") or "").strip()
