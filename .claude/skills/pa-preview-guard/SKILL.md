---
name: pa-preview-guard
description: Tự động phát hiện, sửa, và ngăn chặn TẤT CẢ lỗi TypeScript/build trong Next.js project sau khi generate code — type errors, missing imports, wrong props, Next.js client/server rules.
model: sonnet
effort: high
---

# Build Doctor — Next.js / TypeScript

**Post-generation auto-fixer** — Tự động phát hiện và sửa TẤT CẢ TypeScript và Next.js build errors sau khi generate code. Không cần fix từng case thủ công nữa.

## Vấn đề giải quyết

Sau khi generate code (add section, new component, update props), thường gặp các lỗi:
- ❌ Type mismatch — prop type không khớp (`"primary" | "white" | "ghost"`)
- ❌ Missing required prop — `CTAButton`, `SectionHeader`, `Image` thiếu prop bắt buộc
- ❌ Missing import — component hoặc icon dùng nhưng không import
- ❌ Object possibly undefined — array/object access không có null check
- ❌ Unused variable — import rồi không dùng
- ❌ Next.js rule violation — `useState`/hooks trong Server Component
- ❌ `<Image>` prop error — thiếu `alt`, `fill` + `sizes`, `src` wrong type

## Giải pháp

Skill này chạy **sau mỗi lần generate code** để:
1. **Scan** tất cả TypeScript errors từ `npx tsc --noEmit`
2. **Classify** errors theo pattern
3. **Auto-fix** từng loại error với strategy phù hợp
4. **Re-validate** cho đến khi build clean
5. **Report** kết quả

## Files

| File | Purpose |
|---|---|
| [spec/PROMPT.md](spec/PROMPT.md) | Step-by-step execution workflow |
| [spec/ERROR_PATTERNS.md](spec/ERROR_PATTERNS.md) | Error classification & TypeScript patterns |
| [spec/FIX_STRATEGIES.md](spec/FIX_STRATEGIES.md) | Per-error-type auto-fix logic |
| [spec/GUARDRAILS.md](spec/GUARDRAILS.md) | Safety rules |
| [spec/EXAMPLES.md](spec/EXAMPLES.md) | Worked examples |

## Quick Start

```
# Mode 1: Auto-scan và fix tất cả errors
MODE: auto

# Mode 2: Fix specific error types only
MODE: targeted
ERROR_TYPES: type_mismatch,missing_import

# Mode 3: Dry-run (report only, không fix)
MODE: dry-run
```

## Output

```
✅ Build Doctor Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Errors scanned: 8
🔧 Errors fixed: 7
❌ Errors remaining: 1 (manual intervention needed)

Fixed breakdown:
  ✅ Type mismatches: 3 files
  ✅ Missing imports: 2 files
  ✅ Missing props: 2 files

Manual fixes needed:
  ❌ HeroBanner.tsx:45 - Complex generic type refactor needed
```
