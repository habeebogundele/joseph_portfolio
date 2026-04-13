import pathlib

root = pathlib.Path(__file__).resolve().parent.parent
text = (root / "extracted.css").read_text(encoding="utf-8")
text = text.replace("'Montserrat', sans-serif", "var(--font-montserrat), sans-serif")
text = text.replace("'Cormorant Garamond', serif", "var(--font-cormorant), serif")
out = root / "src" / "app" / "globals.css"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(text, encoding="utf-8")
print("wrote", out)
