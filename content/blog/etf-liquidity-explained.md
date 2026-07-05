---
title: "ETF Liquidity Explained: Why Volume and AUM Don't Mean What You Think"
meta_description: "Does a low-volume ETF mean you can't trade it? No — ETF liquidity comes from the underlying holdings, not screen volume. Learn how creation/redemption, bid-ask spreads, and market makers actually determine tradability."
meta_keywords: "ETF liquidity explained, ETF trading volume vs AUM, ETF bid-ask spread, ETF creation redemption, how ETF liquidity works, ETF trading best practices, limit order ETF, ETF market maker"
date: "2026-07-02"
author: "ETF Bridge Research"
category: "US ETFs"
read_time: "9 min read"
slug: "etf-liquidity-explained"
---

# ETF Liquidity Explained: Why Volume and AUM Don't Mean What You Think

**By ETF Bridge Research** | June 30, 2026 | 9 min read

---

If you've ever hesitated to buy an ETF because the daily volume looked low — "2,000 shares? That's nothing!" — you've fallen for the single most common misconception in ETF investing.

**An ETF's on-screen trading volume tells you almost nothing about how easy it is to trade.** A fund with 2,000 shares of daily volume can absorb a $10 million order as smoothly as one trading 50 million shares — provided the underlying stocks are liquid. And a fund with enormous screen volume can still have dangerously wide spreads if its holdings are illiquid.

This article explains how ETF liquidity actually works — the creation/redemption mechanism, the role of market makers, what bid-ask spreads really measure, and how to trade ETFs without overpaying.

---

## The Big Misconception: ETFs Don't Trade Like Stocks

When you buy Apple stock, you're buying a fixed supply. There are roughly 15 billion AAPL shares outstanding, and your purchase is one of them. If demand spikes, the price rises — supply can't adjust in real time.

ETFs work differently. When demand for an ETF spikes, **new shares are created on the spot**. When selling pressure mounts, **shares are destroyed**. This is the **creation/redemption mechanism**, and it's the single most important thing to understand about ETF liquidity:

```
Investors want more ETF shares
    → Authorized Participant buys underlying stocks
    → Delivers the basket to the ETF issuer
    → Receives newly created ETF shares
    → Sells them to you on the exchange

Investors want to sell ETF shares
    → Authorized Participant buys ETF shares on exchange
    → Redeems them with the ETF issuer
    → Receives the underlying stocks
    → Sells the stocks in the market
```

Because supply is elastic, the true limit on ETF liquidity is **not how many shares of the ETF traded yesterday**, but **how liquid the underlying stocks are**.

---

## Two Layers of Liquidity

| Layer | What It Is | What It Tells You |
|---|---|---|
| **Secondary Market** | Trading of existing ETF shares on exchanges between buyers and sellers | The "visible" layer — volume, screen depth, bid/ask quotes |
| **Primary Market** | Creation and redemption of ETF shares by Authorized Participants (APs) | The "hidden" layer — the actual source of unlimited liquidity |

Screen volume tells you about Layer 1. But Layer 2 is what makes large trades possible.

> **A real example:** ZIU (a TSX 60 ETF in Canada) trades just 2,700 shares per day — compared to 3 million+ shares for XIU, another TSX 60 ETF. Yet ZIU's bid-ask spread is only $0.04 vs. XIU's $0.01. Why? Both hold the exact same underlying Canadian large-cap stocks — some of the most liquid equities in the world. Market makers can create new ZIU shares instantly because they can hedge with the underlying stocks. The 1,000× volume difference is irrelevant.

---

## What Actually Determines ETF Liquidity

Three factors matter. Volume and AUM — the ones investors fixate on — are not on the list.

### 1. Liquidity of the Underlying Holdings (The Real Driver)

| ETF Type | Underlying Liquidity | Implied ETF Liquidity |
|---|---|---|
| S&P 500 (VOO, SPY) | Extremely high — S&P 500 stocks + futures | **Effectively unlimited** |
| US Treasury bonds | Extremely high — most liquid bond market | **Effectively unlimited** |
| Emerging market small-caps | Low — wide spreads, thin volumes | **Limited — even for large ETFs** |
| Frontier market equities | Very low — may be untradable in size | **Severely constrained** |
| China A-shares (via QFII) | Moderate — accessible but with quota limits | **Moderate — quota constraints bind** |

A tiny S&P 500 ETF with $50 million in AUM can handle a $10 million trade without blinking, because the AP can hedge with S&P 500 futures — the most liquid equity derivative on the planet. A $5 billion frontier market ETF with "impressive" screen volume may struggle with the same trade because the underlying stocks in Vietnam or Nigeria simply can't be bought or sold in size.

### 2. The Bid-Ask Spread

The spread — the gap between what you can buy at and sell at — is the most actionable liquidity metric:

| Spread Type | Example | What It Costs You |
|---|---|---|
| **Tight** | $0.01 on a $500 ETF (0.002%) | Effectively free |
| **Normal** | $0.03 on a $100 ETF (0.03%) | $30 on $100K trade |
| **Wide** | $0.10 on a $50 ETF (0.20%) | $200 on $100K trade |
| **Dangerous** | $0.50+ on a $30 ETF (1.7%) | $1,700 on $100K trade |

### 3. The Number of Authorized Participants

More APs = more competition = tighter spreads. SPY has over 20 active APs. A niche thematic ETF may have just 2–3. When only one or two firms can create and redeem shares, they have pricing power — and you pay for it.

---

## Real ETF Liquidity, Ranked

| ETF | Underlying | Implied Liquidity | Typical Spread | Spread % |
|---|---|---|---|---|
| **SPY** | S&P 500 | **Unlimited** | $0.01 | 0.001% |
| **VOO** | S&P 500 | **Unlimited** | $0.01 | 0.001% |
| **QQQ** | Nasdaq-100 | **Unlimited** | $0.01 | 0.002% |
| **IWM** (Russell 2000) | US small-caps | Very high | $0.01–0.02 | 0.005% |
| **EEM** (Emerging Markets) | EM large-caps | High | $0.02–0.05 | 0.04% |
| **ASHR** (CSI 300 A-Shares) | China A-shares | Moderate | $0.05–0.15 | 0.15–0.40% |
| **Niche thematic** | Narrow sector | Low to moderate | $0.10–0.50 | 0.25–2.0% |

> SPY processes $45 billion in daily volume, but VOO — at $4 billion — has the same penny-wide spread. Why? Same underlying stocks. Same liquidity. Different screen volume, identical tradability.

---

## When Spreads Widen

Even the most liquid ETFs can have temporarily expensive spreads. Knowing when to avoid trading saves real money:

| Situation | What Happens | What to Do |
|---|---|---|
| **First 15 minutes of trading** | Underlying stocks still opening; market makers widen spreads to protect themselves | Wait until 10:00 AM ET |
| **Last 10 minutes of trading** | Closing auction approaching; spreads can gap | Trade earlier |
| **Major economic data release** | Fed decision, CPI, jobs report → volatility spike → wider spreads | Wait 15 minutes after the release |
| **ETF holds foreign stocks, local market closed** | e.g., trading a Japan ETF at 2 PM ET (Tokyo closed at 2 AM ET) | Trade when underlying market is open |
| **Low-liquidity underlying** | Always wider — structural, not timing-dependent | Accept the spread; use limit orders |

---

## How to Trade ETFs Without Overpaying

### 1. Always Use Limit Orders

A market order says "buy at whatever price is available." A limit order says "buy, but only at this price or better."

| Order Type | What Happens | When to Use |
|---|---|---|
| **Market Order** | Executes immediately at best available price — which may be terrible if spreads are wide | Almost never |
| **Limit Order** | Executes only at your specified price or better | Always — set it at the midpoint of bid/ask or slightly above |

### 2. Trade Mid-Day

All underlying markets are fully open. APs can hedge efficiently. Spreads are tightest. The sweet spot is roughly 10:30 AM – 3:30 PM ET.

### 3. For Large Trades (>$500K), Use a Broker's Block Desk

Most brokers have institutional trading desks that can execute large ETF orders directly with an AP, bypassing the exchange spread entirely. You'll often get a price inside the screen spread. Call your broker and ask.

### 4. Check the Spread Before Every Trade

Most brokerage platforms show real-time bid/ask. If the spread is more than 0.10% of the price ($0.10 on a $100 ETF), ask yourself: is there a more liquid alternative tracking the same index?

---

## The Volume Trap: When "Popular" Doesn't Mean "Liquid"

Consider these two ETFs:

| | QQQ | QQQM |
|---|---|---|
| **Index** | Nasdaq-100 | Nasdaq-100 |
| **Expense Ratio** | 0.18% | 0.15% |
| **AUM** | $480 billion | $95 billion |
| **Avg Daily Volume** | 58 million shares ($41B) | 5 million shares ($1.5B) |
| **Bid-Ask Spread** | $0.01 | $0.01 |

QQQ trades 12× more volume. But both have identical penny-wide spreads — because both hold the identical basket of Nasdaq-100 stocks. A retail investor buying 1,000 shares gets the same execution quality in either. Choosing QQQM saves 3 basis points per year without sacrificing a thing.

The volume trap works the other way too: a high-volume ETF with illiquid underlying holdings can have surprisingly wide spreads. Don't confuse screen activity with real liquidity.

---

## Red Flags: When to Worry About Liquidity

| Sign | What It Means |
|---|---|
| **Spread consistently >0.20% of price** | Trading costs are eating your returns |
| **Only 1–2 market makers** | No competition on pricing; spreads will stay wide |
| **Underlying market has capital controls** (e.g., certain China, frontier markets) | APs can't freely create/redeem; ETF may trade at persistent premium or discount to NAV |
| **ETF frequently trades at >1% premium/discount to NAV** | The creation/redemption mechanism isn't working smoothly |
| **Fund size under $50 million** | Risk of closure. Not a liquidity issue per se, but if it closes, you get cashed out at an inopportune price |

---

## Key Takeaways

1. **Volume and AUM don't determine liquidity.** The underlying holdings do. A tiny S&P 500 ETF is more liquid than a massive frontier market ETF.

2. **The creation/redemption mechanism** means ETF supply is elastic. Market makers can create and destroy shares on demand, as long as the underlying stocks are tradable.

3. **The bid-ask spread is what you should check**, not volume. Tighter = better execution. Look for spreads under 0.05% of price.

4. **Always use limit orders.** Market orders can execute at bad prices, especially when spreads are temporarily wide.

5. **Trade mid-day, avoid open/close.** The first and last 15 minutes are when spreads are widest.

6. **QQQ and QQQM are equally liquid** despite a 12× volume difference. Don't let screen volume scare you away from a cheaper, otherwise identical ETF.

---

> **Continue reading:** Now that you understand liquidity, learn [how to read an ETF fact sheet](/blog/how-to-read-etf-fact-sheet) and what [tracking error really means](/blog/etf-tracking-error-explained).

---

## Sources

- UBS — "Top ETF Misconceptions Debunked" (2025)
- BMO ETF Dashboard — "Inside ETF Liquidity: A Guide to Better Execution"
- Nasdaq — "ETF Liquidity: What Actually Drives Trading Capacity"
- American Century — "Low-Volume ETFs: Liquidity Myths That Cost Investors Alpha"
- MoneySense — "How to Spot and Avoid Illiquid ETFs" (February 2026)
- Natixis Investment Managers — "Clearing Up the Misconception: ETF Trade Volume vs. Liquidity" (2026)
- Morningstar — ETF trading best practices

---

> **Disclaimer:** ETF Bridge is an educational resource. This article does not constitute investment advice. Bid-ask spread data is approximate and current as of late June 2026. Spreads change continuously during trading hours. Always check the current spread on your brokerage platform before executing a trade. Investing involves risk, including the potential loss of principal.
