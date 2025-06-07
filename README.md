# Stop Translating Me (Reddit)

A minimalist Chrome extension that prevents Reddit from auto-translating posts by enforcing the `tl=original` parameter in URLs.

## 🔧 What It Does

Reddit sometimes appends `tl=xx` to URLs (e.g., `tl=en`, `tl=pt`) to force machine translations. This extension automatically checks if the `tl` parameter exists and, if it's not set to `original`, updates it and reloads the page.

Example:

```
https://www.reddit.com/r/example/comments/abc123/post_title/?tl=pt
```

becomes

```
https://www.reddit.com/r/example/comments/abc123/post_title/?tl=original
```

## ⚙️ Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder `stop-translating-me` inside this repository.
5. Visit any Reddit post with a translated URL to test it.

## 💻 Browser Compatibility

- ✅ Chrome  
- ✅ Brave, Vivaldi, Opera (Chromium-based)  
- ✅ Edge (Chromium-based)  
- ⚠️ Firefox (requires manifest v2 or light adjustment for v3)

## 🧩 Technical Notes

- Runs on `www.reddit.com/*` pages  
- Activates on page load (`document_start`)  
- Uses `location.replace()` to avoid adding history entries

## 📄 License

MIT – do whatever you want with it.

---

> Lightweight, focused, and fast – because no one asked to be auto-translated.
