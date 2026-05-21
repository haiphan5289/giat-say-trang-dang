# Domain Setup — giatsay24hgovap.com

## Overview

| Item | Value |
|------|-------|
| Domain | `giatsay24hgovap.com` |
| Registrar | Matbao (matbao.net) |
| Hosting | Vercel (Hobby plan) |
| GitHub Repo | https://github.com/haiphan5289/giat-say-trang-dang |
| Vercel Project | `giat-say-trang-dang` |
| Vercel URL | `giat-say-trang-dang.vercel.app` |

## DNS Records (Matbao)

Configured at: Matbao → Quản lý tên miền → giatsay24hgovap.com → Bản ghi DNS

| Host | Loại | Giá trị | TTL |
|------|------|---------|-----|
| `@` | A | `76.76.21.21` | 3600 |
| `www` | CNAME | `cname.vercel-dns.com` | 3600 |
| `@` | NS | `ns1.matbao.com`, `ns2.matbao.com` | 3600 |

## Vercel Domain Config

Configured at: Vercel → giat-say-trang-dang → Domains

| Domain | Type | Status |
|--------|------|--------|
| `giatsay24hgovap.com` | Redirect 307 → www | Active |
| `www.giatsay24hgovap.com` | Production | Active |
| `giat-say-trang-dang.vercel.app` | Production | Valid Configuration |

## Vercel Build Settings

Configured at: Vercel → Settings → Build and Deployment

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `web` |
| Build Command | `npm run build` |
| Install Command | `npm install` |
| Output Directory | Next.js default (auto) |

## Deployment Flow

```
Local dev branch → git push origin dev:main → Vercel auto-deploy → giatsay24hgovap.com
```

Vercel tự động deploy khi có commit mới vào branch `main` trên GitHub.

## Domain Renewal

- Hạn: 19/05/2027
- Gia hạn tại: Matbao → Quản lý tên miền → Gia hạn nhanh
