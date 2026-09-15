# Observatoire TMT & Finance

Site public de [tmtstrategist.com](https://tmtstrategist.com) — EXXING International.

Refonte hors Manus : HTML/CSS/JS statique, hébergeable sur **GitHub Pages** ou tout CDN.

## Local

Ouvrir `index.html` ou :

```bash
python3 -m http.server 8080
```

## GitHub Pages

Settings → Pages → Source : GitHub Actions (workflow fourni).

Domaine : `tmtstrategist.com` (`CNAME`). Pointer le DNS A/CNAME vers GitHub Pages, plus vers `cname.manus.space`.

## Hors périmètre (v1)

Auth Manus, Stripe, cron, SQLite, scrapers. À réintroduire plus tard en API séparée si besoin.
