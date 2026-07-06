---
title: "Leveraged & Inverse ETFs 2026: Decay, Risk, and When They Actually Make Sense"
meta_description: "TQQQ says '3x daily Nasdaq-100.' But over months, the return is almost never 3x. Learn how volatility decay, compounding math, and path dependency make leveraged ETFs dangerous to hold — and what they're actually useful for in 2026."
meta_keywords: "leveraged ETF 2026, inverse ETF, TQQQ decay, SQQQ, SOXL, 3x ETF risk, volatility decay explained, leveraged ETF decay formula, should I hold TQQQ, leveraged ETF vs margin, daily reset ETF"
date: "2026-07-06"
author: "ETF Bridge Research"
category: "Advanced"
read_time: "11 min read"
slug: "leveraged-inverse-etf-decay-risk"
---

# Leveraged & Inverse ETFs 2026: Decay, Risk, and When They Actually Make Sense

**By ETF Bridge Research** | July 6, 2026 | 11 min read

---

There is a product that says "3× Daily Nasdaq-100" on the label. TQQQ. It has returned over 10,000% since inception. By any superficial metric, it looks like the greatest ETF ever created.

There is also a product called SQQQ — "−3× Daily Nasdaq-100." It has lost over 99.99% since inception. Multiple reverse splits have compressed its share price back to a tradable level. It is, by the same superficial metric, the worst ETF ever created.

Both statements misunderstand what these products actually do. Leveraged and inverse ETFs are **daily-reset instruments**. They deliver their stated multiple over exactly one trading day. Over any longer period — a week, a month, a year — the return is path-dependent, subject to compounding effects, and frequently far from the simple multiple an investor might expect.

This article explains the math, the risks, the use cases, and why these products belong in a trader's toolkit — not a long-term portfolio.

---

## How Daily Reset Works (And Why It Breaks Over Time)

### The Basic Math

A 3× leveraged ETF aims to deliver **3 times the daily return** of its underlying index, before fees. If the Nasdaq-100 rises 1% on Monday, TQQQ should rise ~3%. If it falls 1% on Tuesday, TQQQ should fall ~3%.

The problem is compounding. Returns compound multiplicatively, not additively:

| Day | Nasdaq-100 | Cumulative | TQQQ (3× daily) | Cumulative |
|---|---|---|---|---|
| Day 1 | +3% | +3.0% | +9% | +9.0% |
| Day 2 | −2.73% | +0.19% | −8.18% | **+0.08%** |
| Day 3 | +1% | +1.19% | +3% | +3.08% |

After three days, the Nasdaq-100 is up ~1.19%. TQQQ is up ~3.08% — roughly 2.6×, not 3×. Over three days in a rising market, the multiple is close but not exact.

Now reverse the scenario: a volatile, sideways market.

| Day | Nasdaq-100 | Cumulative | TQQQ (3× daily) | Cumulative |
|---|---|---|---|---|
| Day 1 | +5% | +5.0% | +15% | +15.0% |
| Day 2 | −4.76% | **0.0%** | −14.29% | **−1.43%** |

The Nasdaq-100 is flat after two days (a +5% move then a −4.76% move gets you back to 0%). TQQQ is down 1.43%. That's **volatility decay** — the return leakage that occurs even when the underlying goes nowhere.

### The Decay Formula

For a leveraged ETF with daily multiple *k* and daily return *r*:

- **LETF return ≈ k × r − ½ × k(k−1) × σ²**

Where σ² is the variance (volatility squared) of daily returns. The second term — **½ × k(k−1) × σ²** — is the decay.

| Multiple (k) | Decay Term | At 20% Annual Volatility |
|---|---|---|
| 2× | ½ × 2 × 1 × σ² = σ² | ~4% annual decay |
| 3× | ½ × 3 × 2 × σ² = 3σ² | **~12% annual decay** |
| −1× | ½ × (−1) × (−2) × σ² = σ² | ~4% annual decay |
| −2× | ½ × (−2) × (−3) × σ² = 3σ² | ~12% annual decay |
| −3× | ½ × (−3) × (−4) × σ² = 6σ² | **~24% annual decay** |

> Two crucial implications: (1) Decay scales with the **square** of leverage — a 3× ETF decays 3× faster than a 2× ETF, not 1.5×. (2) **Inverse ETFs always suffer decay.** Even a −1× ETF decays at roughly the same rate as a 2× long ETF. The −3× inverse (SQQQ) decays at double the rate of its 3× long sibling.

---

## Real-World Decay: 2025–2026 Data

### TQQQ vs QQQ — The Gap in Practice

| Period | QQQ Return | TQQQ Return | Naive Expected (3× QQQ) | Gap (Decay) |
|---|---|---|---|---|
| **2023 Full Year** | +55.0% | +198% | +165% | **+33% (positive compounding!)** |
| **2022 Full Year** | −32.6% | −79.5% | −97.8% | +18.3% (less bad than 3×) |
| **2024 Full Year** | +27.1% | +71.0% | +81.3% | **−10.3% (decay drag)** |
| **2025 Full Year** | +26.8% | +62.5% | +80.4% | **−17.9%** |
| **2026 YTD (late June)** | +14.2% | +33.1% | +42.6% | **−9.5%** |

*Approximate returns. Sources: ProShares, Invesco QQQ Trust.*

Notice 2023: TQQQ returned **more** than 3× QQQ. In a strong, steady uptrend with low volatility, daily compounding works **in your favor** — each day's gain builds on the previous day's amplified gain. This is the best-case scenario for a leveraged ETF, and it happens roughly once a decade.

Notice 2022: TQQQ lost 79.5% — catastrophic, but actually **less than 3×** the −32.6% QQQ loss. The daily reset mechanism cushions the downside in a persistent downtrend — you can't lose more than 100% in the ETF, but you can lose most of it.

### SOXL: The Volatility Decay Poster Child

The Direxion Daily Semiconductor Bull 3× (SOXL) is the most dramatic example of how volatility destroys leveraged returns:

| Period | SOXX (Semiconductor Index) | SOXL (3×) | Return Ratio |
|---|---|---|---|
| **2022** | −35.3% | −85.8% | 2.43× |
| **2023** | +66.5% | +238% | 3.58× |
| **2024** | +20.1% | +7.8% | 0.39× |
| **2025** | +23.2% | +18.7% | 0.81× |

In 2024, the semiconductor index (SOXX) was up 20% — but SOXL was up only 8%. The 3× ETF **underperformed** the 1× index. Why? Semiconductor stocks are highly volatile. Daily swings of 3–5% are common. The decay term (3σ²) overwhelmed the positive drift.

> **If you held SOXL for all of 2024, you took 3× the risk and got less than half the return of simply holding SOXX.** This is the scenario leveraged ETF marketing materials don't highlight.

---

## Major Leveraged & Inverse ETFs in 2026

| Ticker | Underlying | Multiple | Expense Ratio | AUM | Daily Volume |
|---|---|---|---|---|---|
| **TQQQ** | Nasdaq-100 | 3× Long | 0.88% | ~$25B | ~$15B |
| **SQQQ** | Nasdaq-100 | −3× Inverse | 0.95% | ~$5B | ~$8B |
| **UPRO** | S&P 500 | 3× Long | 0.91% | ~$4B | ~$1.5B |
| **SPXU** | S&P 500 | −3× Inverse | 0.91% | ~$600M | ~$500M |
| **TNA** | Russell 2000 | 3× Long | 1.08% | ~$2B | ~$1B |
| **SOXL** | Semiconductors (ICE Semi Index) | 3× Long | 0.95% | ~$14B | ~$10B |
| **SOXS** | Semiconductors | −3× Inverse | 0.95% | ~$800M | ~$4B |
| **FNGU** | FANG+ Index (10 mega-cap tech) | 3× Long | 0.95% | ~$3B | ~$1B |
| **NVDL** | Nvidia (single stock) | 2× Long | 1.05% | ~$5B | ~$3B |
| **TSLL** | Tesla (single stock) | 2× Long | 1.05% | ~$2B | ~$1.5B |

> Single-stock leveraged ETFs (NVDL, TSLL) are an entirely different risk category. The underlying is already highly volatile; doubling it daily concentrates both return and decay risk beyond what any index leveraged ETF experiences.

---

## When Leveraged ETFs Make Sense

For 95% of investors, 95% of the time, the answer is: they don't. But there are legitimate use cases:

### 1. Short-Term Tactical Trades (1–5 Days)

If you have a strong near-term conviction — post-earnings momentum, a Fed-decision bounce, a trend-day continuation — a 2× or 3× ETF amplifies the move without the complexity of options or margin.

| Scenario | Tool | Rationale |
|---|---|---|
| Nasdaq-100 breaks out above resistance on high volume | TQQQ (3×) | Ride the momentum for 2–5 days. The decay over 5 days is negligible (~0.1–0.3%). |
| Market selloff after FOMC — you expect a 1–2 day bounce | UPRO (3×) | Capture a 3–5% bounce amplified to 9–15%. Exit regardless of outcome. |
| Post-Nvidia earnings AI sector momentum | SOXL (3×) | Sector-specific momentum play. Set a stop-loss and a time limit. |

### 2. Hedging Without Options

An inverse ETF can serve as a portfolio hedge without the complexity of puts:

| Portfolio | Hedge | Amount | Rationale |
|---|---|---|---|
| $100K in VOO | SPXU (−3× S&P 500) | $5K (5%) | If S&P falls 10%, hedge gains ~30% = +$1.5K, partially offsetting the $10K VOO loss |
| Concentrated tech position ($50K QQQ) | SQQQ (−3×) | $3K (6%) | Tech drawdown protection |

> This is imperfect hedging. The decay on inverse ETFs means you can't just buy and hold SPXU as a permanent hedge — the drag will bleed the hedge position over time, even if the market goes nowhere. Rebalance or use only during periods of expected volatility.

### 3. The 200-Day SMA Strategy (Hedgefundie / Bogleheads Variant)

A strategy discussed extensively on Bogleheads and Reddit's r/LETFs:

- Hold UPRO (3× S&P 500) when the S&P 500 is above its 200-day simple moving average
- Move to cash or bonds when below the 200-day SMA

| Strategy | CAGR (2010–2025) | Max Drawdown | Sharpe |
|---|---|---|---|
| **Buy & hold SPY** | ~13.0% | −33.7% (2020) | 0.85 |
| **UPRO with 200-SMA filter** | ~28.1% | −48.2% (2022 avoided? No — 2022's decline crossed the 200-day) | 1.05 |
| **Buy & hold UPRO** | ~34.5% | −63.8% (2022) | 0.74 |

*Backtest data: approximate, from Portfolio Visualizer and Composer.trade. The strategy reduces drawdowns but whipsaws in choppy markets.*

This is **not a recommendation** — it's an illustration of the only regime in which leveraged ETFs can be held for more than days: with a systematic exit rule triggered by a trend-following signal.

### 4. Capital Efficiency (The Case for 2× Over Margin)

A 2× S&P 500 ETF (SSO, expense ratio 0.89%) borrows at institutional rates (roughly SOFR + spread) to achieve leverage. For a retail investor, margin rates at most brokerages are 8–12% in 2026. The implicit financing cost embedded in SSO is roughly 4.8–5.2%.

| Method | Cost of Leverage (2026) | Max Leverage | Margin Call Risk |
|---|---|---|---|
| **SSO (2× ETF)** | ~5% (embedded) | Exactly 2× | None |
| **Portfolio margin** | 8–10% (broker-dependent) | Up to ~6× | Yes |
| **LEAPS (deep ITM calls)** | ~5–7% (implied in premium) | Variable, typically 2–4× | None |

For modest leverage (1.5–2×), a 2× ETF is often cheaper and simpler than margin — no margin calls, no interest calculations, no monitoring. The cost is the decay + expense ratio.

---

## The Rules for Using Leveraged ETFs

| Rule | Why |
|---|---|
| **Never hold overnight without a plan** | Each additional day compounds decay. If you're not actively trading, you're bleeding. |
| **Use a stop-loss** | A 33% decline in the underlying = ~99% decline in a 3× ETF. Recovery is mathematically near-impossible. |
| **Inverse ETFs are even worse for holding** | A −3× ETF decays 2× faster than a 3× long ETF. SQQQ "buy and hold" is a guaranteed path to near-total loss. |
| **In trending (not volatile) markets, leverage compounds favorably** | 2023 TQQQ returned +198% vs. 3× QQQ's +165%. The trend compounded in your favor. In sideways/choppy markets, the opposite. |
| **Single-stock leveraged ETFs (NVDL, TSLL) are gambling, not investing** | The underlying stock can move 5–10% in a day. A 2× ETF amplifies that to 10–20%. The decay is enormous. |
| **Check the fund's AUM and daily volume** | Small leveraged ETFs with wide spreads add transaction costs that swamp any leverage benefit. |
| **Never "average down"** | Adding to a losing leveraged position compounds losses. A 3× ETF that's down 80% requires a 400% gain to break even — which won't happen because daily reset prevents that recovery path. |

---

## Key Takeaways

1. **Leveraged ETFs are daily-reset instruments.** The stated multiple (2×, 3×, −1×, −3×) applies to one day. Over any longer period, compounding and volatility decay make the actual return unpredictable.

2. **Volatility decay is real and mathematical.** A 3× long ETF loses ~12%/year to decay at 20% volatility. A −3× ETF loses ~24%/year. The higher the volatility of the underlying, the faster the decay.

3. **Trending markets compound favorably; sideways markets destroy value.** TQQQ returned +198% in 2023 (more than 3× QQQ). SOXL returned +8% in 2024 (less than SOXX's +20%). The difference was volatility, not direction.

4. **Leveraged ETFs are trading tools — days, not months.** For holding periods beyond a week, the probability of significant decay becomes material.

5. **The only viable long-term strategy requires a systematic exit rule** (e.g., 200-day SMA). Even then, the drawdowns can exceed 50% and the strategy can underperform for years.

6. **Use them for what they're designed for: short-term amplification of a high-conviction view.** Anything else, and you're paying decay for no reason.

---

> **Continue reading:** Now that you understand what leveraged ETFs are *not* (long-term investments), learn [how to build a portfolio that actually works over decades](/blog/core-satellite-etf-portfolio) — or explore [why most thematic ETFs underperform](/blog/equal-weight-vs-cap-weight-etf) despite compelling stories.

---

## Sources

- ProShares — TQQQ, SQQQ, UPRO fund pages and prospectuses
- Direxion — SOXL, SOXS fund pages and daily holdings
- Portfolio Visualizer — leveraged ETF backtests (2010–2025)
- Bogleheads.org — "Leveraged and Inverse ETFs" wiki and Hedgefundie's Excellent Adventure thread
- SEC Investor Bulletin — "Leveraged and Inverse ETFs: Specialized Products with Extra Risks"
- Composer.trade — leveraged ETF strategy backtests
- CFRA Research — "Leveraged ETF Flows and Performance" (Q1 2026)
- ETF.com — leveraged ETF education center and decay analysis

---

> **Disclaimer:** ETF Bridge is an educational resource. This article does not constitute investment advice. Leveraged and inverse ETFs involve substantial risk, including the potential for complete loss of principal. The decay mathematics, historical return data, and strategy backtests are presented for educational purposes only — past performance does not guarantee future results. These products are not suitable for investors who do not fully understand daily-reset mechanics, compounding mathematics, and volatility decay. Consult a qualified financial advisor before using any leveraged or inverse ETF. Investing involves risk, including the potential loss of more than the initial investment through leverage.
