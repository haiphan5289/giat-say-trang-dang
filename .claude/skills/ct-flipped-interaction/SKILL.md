---
name: ct-flipped-interaction
description: Ask clarifying questions before implementing any feature for the Giặt Sấy Trang Đáng landing page. Use when the user provides a vague or incomplete feature request and you need to gather full requirements — scope, content, UX expectations, animation behavior, and business rules — before writing any code.
model: sonnet
effort: medium
---

# Flipped Interaction — Ask Before Implementing

> **Anti-Hallucination:** Only reference components, CSS utilities, and file paths that actually exist in the project. Verified list in the Stack Context section below.

## Overview

This skill implements the **Flipped Interaction Pattern** for the **Giặt Sấy Trang Đáng** Next.js landing page. Instead of immediately proposing solutions, the AI asks systematic clarifying questions first to fully understand the requirements before writing any code.

## When to Use This Skill

**Use this skill when:**
- The feature request is vague (e.g. "add a booking section", "improve the header")
- Content, copy, or Vietnamese text hasn't been specified
- Integration with existing sections or scroll behavior is unclear
- Animation requirements or visual expectations aren't described
- Business rules (phone number, address, service pricing) need confirmation
- You want to avoid rework from incorrect assumptions

## Input Format

```
FEATURE_REQUEST: [Feature description]
CONTEXT: [Context and reason for this feature]
PRIORITY: [High / Medium / Low]
```

## Priority Field Behavior

- **High**: Fastest path using existing components. Minimal new code. Target immediate visible result.
- **Medium**: Balance speed vs. completeness. Cover content accuracy and responsive behavior.
- **Low**: Optimal implementation. Explore animation depth, SEO, performance, and future-proofing.

## Flipped Interaction Rules

**🚨 CRITICAL: Follow these rules strictly**

1. **Ask clarifying questions FIRST** — do not propose any implementation
2. **DO NOT assume** Vietnamese copy, phone numbers, addresses, or prices
3. **DO NOT provide code** until content and UX expectations are confirmed
4. **DO NOT start implementation** until confirmed understanding is 100%
5. **Always consider Vietnamese business context** — laundry services in Gò Vấp, TP.HCM

## Information Categories to Gather

### 1. Feature Scope & Content
- What exactly should this section/component display?
- What is the Vietnamese copy (title, description, labels)?
- What are the specific business details (price, service name, phone, address)?

### 2. Visual & Animation Behavior
- Should new content use `.reveal` (fade-up) or `.reveal-fall` (fall from above)?
- Are there hover interactions (TiltCard, group-hover transitions)?
- Is there a `ClothesDecor` floating image needed in this section?

### 3. Layout & Responsive
- Desktop-first or mobile-first concern?
- Grid layout — how many columns on desktop vs. mobile?
- Any full-width vs. constrained content areas?

### 4. Integration with Existing Sections
- Does this affect the page nav (`Header` anchor links)?
- Does it need a new `id` for scroll-to navigation?
- Does it replace an existing section or insert between two sections?

### 5. Business & SEO Context
- Does the content affect metadata (title, description, OpenGraph)?
- Are there specific keywords for Vietnamese SEO?
- Is this for a time-sensitive campaign or permanent content?

## Questioning Strategy

- Ask **one essential question at a time** to avoid overwhelming the user
- After each answer, determine if more clarification is needed or if implementation can begin
- Adjust question depth based on PRIORITY: High → 1–2 focused questions; Low → thorough exploration
- **Never assume Vietnamese text** — always ask for exact wording

## Stack Context for Implementation

Once requirements are confirmed, all implementations must follow:

| Concept | Implementation |
|---|---|
| Shared CTA button | `CTAButton` — variants: `primary`, `white`, `ghost` |
| Section heading block | `SectionHeader` — props: `label`, `title`, `description` |
| Interactive hover card | `TiltCard` wrapper |
| Decorative clothes image | `ClothesDecor` — `delay` prop (1–8), `className` for position |
| Scroll reveal (fade-up) | `.reveal` + optional `.reveal-delay-{1..8}` |
| Scroll reveal (fall-in) | `.reveal-fall` + optional `.reveal-delay-{1..8}` |
| Section badge | `.section-label` |
| Images | `<Image>` from `next/image` with `fill` + `sizes` |
| External links | Must have `rel="noopener noreferrer"` |
| Phone CTA | `CTAButton href="tel:0938432178"` |
| Zalo CTA | `CTAButton href="https://zalo.me/0938432178" variant="ghost" target="_blank"` |

❗️ **Important:** Do not provide any code or layout proposal until the user confirms all requirements are understood.

---

## Example Interaction

### Sample Input

```
FEATURE_REQUEST: Thêm section đặt lịch online
CONTEXT: Khách muốn đặt lịch giao nhận không cần gọi điện
PRIORITY: Medium
```

---

### AI Behavior (Medium Priority → 3–4 questions)

**Question 1 — Scope:**

> Trước khi implement, mình cần hiểu rõ scope của form đặt lịch.
>
> Form này sẽ:
> - Chỉ thu thập **tên + số điện thoại + ngày giờ**, rồi gửi về Zalo/SMS? Hay
> - Tích hợp với một **hệ thống booking backend** thực sự (API endpoint)?
>
> Điều này quyết định mình cần form đơn giản hay cần API integration.

---

**User answers:** "Chỉ cần submit form → gửi thông báo Zalo cho shop là đủ."

---

**Question 2 — Fields & Validation:**

> Form cần những trường nào?
> - Họ tên, số điện thoại, địa chỉ giao nhận?
> - Loại dịch vụ (giặt thường / giặt hấp / giặt nệm)?
> - Ngày giờ mong muốn?
>
> Và khi submit thành công, hiển thị thông báo gì bằng tiếng Việt?

---

**Question 3 — Position & Anchor:**

> Section này đặt ở vị trí nào trên trang?
> - Trước section "Vị Trí & Liên Hệ" (`#vi-tri`), hay sau?
>
> Và `id` anchor cho section này là gì? (ví dụ: `#dat-lich`)

---

### Confirmed Understanding (AI summarizes before implementing)

> Để xác nhận lại những gì mình sẽ implement:
>
> - Form với 4 trường: tên, SĐT, loại dịch vụ, ngày giờ
> - Submit → mở Zalo với tin nhắn đặt sẵn (`https://zalo.me/0938432178?text=...`)
> - Đặt trước `#vi-tri`, anchor `id="dat-lich"`
> - Dùng `SectionHeader`, `CTAButton variant="primary"`, có `ClothesDecor` góc phải
> - `.reveal` trên form container, `.reveal-delay-*` stagger trên từng field
>
> Bạn xác nhận mình có thể bắt đầu implement chưa?

---

### Priority Impact Summary

| Priority | Questions Asked | Scope |
|---|---|---|
| **High** | 1–2 questions on critical content + placement | Fastest path using existing components |
| **Medium** | 3–4 questions covering content, layout, integration | Balanced implementation with responsive behavior |
| **Low** | 4–5 thorough questions including SEO, animation depth, edge cases | Optimal UX, proper accessibility, Vietnamese SEO |
