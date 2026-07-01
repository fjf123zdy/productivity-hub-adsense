---
title: "ETF Tracking Error Explained: Why It Matters More Than Fees"
meta_description: "Tracking error and tracking difference are the silent costs of ETF investing. A 0.50% tracking difference costs 10x more than a 0.05% expense ratio gap. Learn what causes it, how to measure it, and which ETFs track their indices most tightly in 2026."
meta_keywords: "ETF tracking error explained, tracking difference ETF, ETF tracking accuracy, why ETF doesn't match index, ETF hidden costs, VOO tracking error, ASHR tracking difference, ETF total cost of ownership"
date: "2026-06-30"
author: "ETF Bridge Research"
category: "US ETFs"
read_time: "9 min read"
slug: "etf-tracking-error-explained"
---

# ETF Tracking Error Explained: Why It Matters More Than Fees

**By ETF Bridge Research** | June 30, 2026 | 9 min read

---

Most investors obsess over expense ratios — and for good reason. But there's a hidden cost that can dwarf even a "high" fee: **tracking difference** — the gap between what the index returns and what your ETF actually delivers.

Consider this: ASHR (CSI 300 China A-Shares ETF) charges 0.65% in fees. But its actual tracking difference — the real gap between your return and the CSI 300's return — has averaged roughly **0.75–0.85% per year** over the past five years. That extra 10–20 basis points is invisible in the expense ratio. But over two decades, it can cost you thousands of dollars more than the stated fee.

This article explains what tracking error and tracking difference actually mean, what causes them, and how to spot the ETFs that silently leak returns.

---

## Tracking Difference vs. Tracking Error: They're Not the Same

The ETF industry uses two terms interchangeably, but they measure different things:

| Metric | Definition | Formula | What It Tells You |
|---|---|---|---|
| **Tracking Difference** | The simple gap between fund return and index return over a period | Fund Return − Index Return | How much money you actually lost (or gained) vs. the index |
| **Tracking Error** | The volatility of that gap — how consistently the fund tracks | Standard deviation of (Fund Daily Return − Index Daily Return) | How predictable or erratic the tracking is |

> **Tracking difference is what you pay. Tracking error is how reliably you pay it.**

A fund could have low tracking error (consistent gap) but high tracking difference (large gap every year). Think of tracking error as the wobble, and tracking difference as the drift. Both matter — but tracking difference directly hits your wallet.

---

## What Causes Tracking Difference?

Every ETF faces forces that pull its returns away from the index it tracks:

### 1. Fees (The Obvious One)

The expense ratio is the largest and most predictable component of tracking difference. All else equal, an ETF charging 0.50% should trail its index by roughly 0.50% per year.

| ETF | Expense Ratio | Expected Tracking Difference (fees alone) |
|---|---|---|
| VOO | 0.03% | −0.03%/yr |
| SPY | 0.0945% | −0.09%/yr |
| ASHR | 0.65% | −0.65%/yr |

But the expected gap is rarely the actual gap.

### 2. Securities Lending Revenue (The Secret Offset)

When ETFs lend out shares to short sellers, they earn fees. This revenue is returned to the fund, partially offsetting expenses:

| ETF | Fee Drag | Lending Revenue (est.) | Net Expected Drag |
|---|---|---|---|
| VOO | −0.03% | +0.01–0.02% | **−0.01 to −0.02%** |
| IVV | −0.03% | +0.02–0.03% | **~0.00%** |
| SPY | −0.09% | +0.01% | **−0.08%** |
| 510300 (CSI 300) | −0.20% | Negligible | **−0.20%** |

This is why VOO and IVV sometimes track their index **within 0.01%** despite charging 0.03% — securities lending effectively makes them free, or even slightly better than free, net of the stated fee.

### 3. Dividend Withholding Tax (The Cross-Border Leak)

When a US ETF holds international stocks, foreign governments take a cut of dividends before they reach the fund:

| Scenario | Dividend Yield | Withholding Tax | Annual Drag |
|---|---|---|---|
| US ETF holding US stocks | 1.3% | 0% | 0% |
| US ETF holding Chinese A-shares (ASHR) | 2.0% | 10% | **−0.20%/yr** |
| US ETF holding HK stocks | 3.0% | 0% | 0% |
| Irish UCITS ETF holding US stocks | 1.3% | 15% (US-Ireland treaty) | **−0.20%/yr** |

This drag hits the fund's NAV directly but never appears in the expense ratio. For a US investor buying ASHR, the stated 0.65% expense ratio understates the true total cost by roughly **0.20–0.25% annually**.

### 4. Cash Drag (The Idle Money Problem)

ETFs never hold exactly 100% of their assets in stocks. A small cash buffer — for redemptions, pending dividends, or collateral — earns near-zero interest and creates drag:

| ETF | Typical Cash Buffer | Drag (at 0% cash return vs. 7% equity return) |
|---|---|---|
| VOO | ~0.2% | −0.01%/yr (negligible) |
| SPY (pre-Dec 2025, UIT) | ~0.5–1.0% between dividends | −0.03–0.05%/yr (meaningful) |
| SPY (post-Dec 2025, open-end) | ~0.2% | −0.01%/yr |

SPY's old UIT structure was a classic case of structural cash drag — dividends sat in a non-interest-bearing account for weeks. The December 2025 conversion to open-end eliminated most of this leakage.

### 5. Sampling Error (When the Fund Doesn't Own Everything)

Full-replication ETFs own every stock in the index. Sampling ETFs own a representative subset. The more stocks omitted, the larger the potential gap:

| Replication Method | Typical Tracking Difference Range | Example |
|---|---|---|
| **Full replication** | 0.00–0.05% beyond fees | VOO (503/503 stocks) |
| **Sampling** | 0.05–0.30% beyond fees | Some emerging market ETFs |
| **Synthetic (swap-based)** | −0.10% to +0.10% (swap cost varies) | Some European ETFs |

Most major US equity ETFs use full replication. Sampling is more common in international and fixed-income ETFs where buying every bond or every small-cap stock is impractical or expensive.

### 6. Trading Costs and Rebalancing

Every time an ETF rebalances — to match an index reconstitution, handle redemptions, or adjust weights — it incurs brokerage commissions, bid-ask spreads, and market impact costs:

| ETF Type | Annual Turnover | Estimated Trading Cost Drag |
|---|---|---|
| Cap-Weight Index (VOO) | 2–4% | −0.01–0.02%/yr |
| Equal-Weight (RSP) | 20–25% (quarterly rebalance) | −0.10–0.15%/yr |
| High-turnover active ETF | 50–100%+ | −0.30–0.80%/yr |

Equal-weight ETFs like RSP incur additional drag from quarterly rebalancing that is not captured in the 0.20% expense ratio. This is part of why RSP's performance gap vs. VOO over the long term is wider than the fee difference alone would predict.

---

## Real-World Tracking Difference: Three ETFs Compared

Let's look at actual tracking differences for three major ETFs over multiple time horizons (approximate, as of mid-2026):

| Period | VOO (0.03% ER) | SPY (0.09% ER) | ASHR (0.65% ER) |
|---|---|---|---|
| **1 Year** | −0.04% | −0.10% | −0.78% |
| **3 Year (annualized)** | −0.04% | −0.12% | −0.82% |
| **5 Year (annualized)** | −0.04% | −0.13% | −0.85% |

*Sources: Fund provider annual reports, Morningstar. Approximate figures.*

### What This Tells Us

- **VOO's tracking difference (−0.04%) is almost exactly its expense ratio (−0.03%)** plus a rounding error. Securities lending covers roughly two-thirds of the stated fee. This is as close to perfect tracking as exists.
- **SPY's tracking difference (−0.10 to −0.13%) exceeds its expense ratio (−0.09%)** by about 1–4 basis points. This excess was larger pre-December 2025 (UIT cash drag) and should narrow going forward.
- **ASHR's tracking difference (−0.78 to −0.85%) exceeds its expense ratio (−0.65%) by 13–20 basis points.** The excess comes from dividend withholding tax on A-shares, FX conversion costs, and the operational friction of cross-border custody.

> **The key lesson:** For a simple, domestic, full-replication ETF like VOO, expense ratio ≈ total cost. For anything cross-border, synthetic, or sampling-based, factor in an additional 0.10–0.30% of hidden drag.

---

## Where to Find Tracking Data

### 1. The Fund's Annual Report or Fact Sheet

Most ETF providers publish a "Tracking Difference" table alongside performance data. Look for:

```
         Fund Return    Index Return    Difference
1 Year      +25.5%        +25.6%         −0.1%
3 Year      +12.1%        +12.2%         −0.1%
5 Year      +13.4%        +13.5%         −0.1%
```

The "Difference" column is your total cost — expense ratio plus all hidden drag. If the difference consistently exceeds the expense ratio by more than 0.05%, something structural is consuming returns.

### 2. Morningstar and ETF.com

Both publish tracking error statistics. Morningstar's "Tracking Error" metric is typically the standard-deviation version (the wobble). ETF.com often reports both tracking error and tracking difference.

### 3. Do Your Own Math

Compare the fund's annual returns to the index's published returns over the same periods. The gap is your total cost. If the index returned 14.0% annualized over five years and your ETF returned 13.2%, something is costing you 0.8%/year — well beyond the stated fee.

---

## The Total Cost Framework

When evaluating an ETF, add up every layer of cost:

| Cost Layer | VOO (US → US) | ASHR (US → China) | 2800.HK (HK → HK) |
|---|---|---|---|
| **Expense Ratio** | 0.03% | 0.65% | 0.07% |
| **Tracking difference beyond ER** | ~0.01% | ~0.15–0.20% | ~0.02% |
| **Dividend withholding tax** | 0% (US resident) | 10% on ~2% yield = ~0.20% | 0% (no HK div tax) |
| **Bid-ask spread (annualized)** | ~0.01% | ~0.05% | ~0.03% |
| **Estimated Total Cost** | **~0.05%/yr** | **~1.05%/yr** | **~0.12%/yr** |

A US investor holding ASHR pays roughly **20× more in total costs** than a US investor holding VOO. The expense ratio is only part of the story — cross-border structural costs, dividend tax, and wider spreads account for the rest.

---

## Key Takeaways

1. **Expense ratio ≠ total cost.** Especially for cross-border, emerging market, and high-turnover ETFs.

2. **Tracking difference** — the simple gap between fund return and index return — is what actually matters. It's your all-in cost.

3. **Tracking error** — the volatility of that gap — matters for predictability but not directly for returns.

4. **Securities lending can offset fees.** VOO and IVV effectively cost almost nothing after lending revenue.

5. **Cross-border ETFs leak 0.15–0.30% beyond their stated fees.** Dividend withholding, FX costs, and custody friction add up.

6. **Always compare the fund's published tracking difference to its expense ratio.** If the gap is wider than the fee, dig into the annual report and understand why.

---

> **Continue reading:** Now that you understand hidden costs, see how fees compare across [US and Chinese ETFs](/blog/us-vs-china-etf-fees) — or learn the basics with [how to read an ETF fact sheet](/blog/how-to-read-etf-fact-sheet).

---

## Sources

- Vanguard — VOO annual report and tracking difference disclosures
- State Street — SPY tracking data and December 2025 conversion documentation
- DWS / Xtrackers — ASHR annual report
- Morningstar — ETF tracking error methodology and fund data
- ETF.com — tracking difference vs. tracking error explainer

---

> **Disclaimer:** ETF Bridge is an educational resource. This article does not constitute investment advice. Past performance and tracking data are approximate and current as of late June 2026. Tracking differences can change over time. Always verify the latest data with the official fund provider and consult a qualified financial advisor. Investing involves risk, including the potential loss of principal.
