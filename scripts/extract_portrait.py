import base64
import os
import re

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(root, "index.html")
with open(html_path, encoding="utf-8") as f:
    s = f.read()
pat = re.compile(r'src="(data:image/([^;]+);base64,([^"]+))"')
m = pat.search(s)
if not m:
    raise SystemExit("no data uri found")
fmt = m.group(2)
b64 = m.group(3)
raw = base64.b64decode(b64)
ext = "jpg" if "jpeg" in fmt or "jpg" in fmt else "png"
out_dir = os.path.join(root, "public")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, f"joseph-portrait.{ext}")
with open(out, "wb") as f:
    f.write(raw)
print(out, len(raw), fmt)
