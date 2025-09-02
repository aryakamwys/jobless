from typing import List, Tuple
import numpy as np

def cosine(a, b) -> float:
    a = np.asarray(a, dtype=float)
    b = np.asarray(b, dtype=float)
    denom = (np.linalg.norm(a) * np.linalg.norm(b)) + 1e-9
    return float(np.dot(a, b) / denom)

def rank_docs(query_emb, docs: List[Tuple[str, list]], top_k: int = 5):
    scored = [(doc_id, cosine(query_emb, emb)) for doc_id, emb in docs]
    return sorted(scored, key=lambda x: x[1], reverse=True)[:top_k]
