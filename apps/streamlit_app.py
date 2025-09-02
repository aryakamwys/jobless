import os
import sys
import streamlit as st


project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from packages.cariai_core.llm import gen_proposal

st.set_page_config(page_title="CariAI – Proposal Copilot", page_icon="📝", layout="wide")

st.title("CariAI – Proposal & Job-Match Copilot (MVP)")
st.caption("Streamlit MVP. Backend logic in `packages/cariai_core/` so you can migrate to FastAPI later.")

with st.sidebar:
    st.subheader("Konfigurasi")
    
    api_key = st.text_input("GEMINI_API_KEY", type="password", 
                           value=os.getenv("GEMINI_API_KEY", ""),
                           help="Masukkan API key Google Gemini Anda")
    if api_key:
        os.environ["GEMINI_API_KEY"] = api_key
    
    st.write("Set **GEMINI_API_KEY** di Secrets jika di-deploy.")
    model = st.text_input("Model ID (opsional)", os.getenv("GEMINI_MODEL_ID", "gemini-1.5-flash"))
    if model:
        os.environ["GEMINI_MODEL_ID"] = model

st.header("Generate Proposal")
brief = st.text_area("Tempel brief proyek klien", height=220, placeholder="Contoh: Kami butuh website company profile dengan multi bahasa...")
portfolio = st.text_area("Ringkasan portofolio (opsional)", height=140, placeholder="Contoh: Saya pernah membuat landing page untuk fintech...")

col1, col2 = st.columns([1,1])
with col1:
    if st.button("Generate", type="primary", use_container_width=True):
        if not brief.strip():
            st.error("Brief tidak boleh kosong")
        elif not os.getenv("GEMINI_API_KEY"):
            st.error("Silakan masukkan GEMINI_API_KEY di sidebar terlebih dahulu")
        else:
            try:
                with st.spinner("Generating proposal..."):
                    draft = gen_proposal(brief, portfolio or "")
                    st.session_state["draft"] = draft
                    st.success("Proposal berhasil dibuat!")
            except Exception as e:
                st.error(f"Error: {str(e)}")
                st.exception(e)

with col2:
    if st.button("Bersihkan", use_container_width=True):
        st.session_state.pop("draft", None)

st.divider()
st.subheader("Draft Proposal")
st.write(st.session_state.get("draft", "_Belum ada draft. Isi brief dan klik Generate._"))

st.divider()
st.caption("Catatan: Untuk pencocokan pekerjaan dan RAG, tambahkan modul embedding/pgvector di backend FastAPI nanti.")
