import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';

const posts: Record<string, { title: string; date: string; content: string }> = {
  'saas-metrics-that-matter': {
    title: 'The Only SaaS Metrics That Actually Matter in 2025',
    date: 'February 10, 2025',
    content: `
# The Only SaaS Metrics That Actually Matter in 2025

In the fast-paced world of SaaS startups, founders often drown in metrics. Which ones actually matter? After analyzing hundreds of successful SaaS companies and speaking with top-tier VCs, here's what you need to focus on.

## The Foundation: MRR and ARR

Monthly Recurring Revenue (MRR) and Annual Recurring Revenue (ARR) form the bedrock of SaaS metrics. These aren't vanity metrics—they're the pulse of your business. MRR represents predictable, recurring revenue from subscriptions, while ARR projects this over a year.

**Why they matter:** VCs use ARR as a primary valuation driver. A company with $1M ARR commands dramatically different attention than one at $100K ARR. Track both gross and net MRR to understand the health of your revenue streams.

**Key insight:** Focus on net MRR growth rate (new MRR + expansion - churned MRR). This single number tells the story of your growth trajectory better than almost any other metric.

## Customer Acquisition Cost (CAC) and Lifetime Value (LTV)

The CAC to LTV ratio reveals whether your business model is sustainable. A healthy SaaS company maintains an LTV:CAC ratio of at least 3:1. Anything below 3:1 suggests you're spending too much to acquire customers relative to the value they bring.

**Calculating CAC:** Divide total sales and marketing expenses by the number of new customers acquired in that period. Include salaries, tools, advertising, and overhead costs.

**Calculating LTV:** Multiple average revenue per customer by gross margin and divide by churn rate. A simplified formula: LTV = (ARPU × Gross Margin %) / Monthly Churn Rate.

**The magic number:** Track your CAC payback period—how many months to recover acquisition costs. Best-in-class SaaS companies achieve payback in under 12 months. If you're beyond 18 months, you have a problem.

## Churn: The Silent Killer

Customer churn rate might be the most important metric for long-term success. Even seemingly small differences compound dramatically over time. A company with 5% monthly churn loses half its customers annually, while 2% churn retains far more value.

**Logo churn vs revenue churn:** Track both. You might have low logo churn but high revenue churn if your biggest customers are leaving. Revenue churn gives a more accurate picture of financial health.

**Net Revenue Retention (NRR):** This metric accounts for both churn and expansion. NRR over 100% means existing customers are spending more over time, even accounting for churn. Top SaaS companies achieve 120%+ NRR, essentially growing from the existing customer base alone.

## Growth Rate and the Rule of 40

Your growth rate determines your ceiling. Early-stage SaaS companies should target 100%+ year-over-year growth. As you scale, this percentage naturally declines, but consistent growth remains critical.

**The Rule of 40:** Add your growth rate percentage to your profit margin percentage. The sum should exceed 40%. For example, 30% growth + 15% profit margin = 45% (good). This metric helps balance growth with profitability.

## Unit Economics: The Ultimate Test

Unit economics determine if your business can scale profitably. Calculate the gross margin for each customer. In SaaS, aim for 80%+ gross margins. Lower margins suggest inefficient delivery or pricing issues.

**Key components:**
- Revenue per customer
- Cost of Goods Sold (COGS) per customer
- Gross margin per customer
- Contribution margin after direct costs

Poor unit economics can't be fixed with scale—they only magnify losses. Get these right before scaling aggressively.

## Engagement Metrics Matter More Than You Think

While financial metrics dominate VC conversations, engagement metrics predict future financial performance. Track daily and monthly active users (DAU/MAU), feature adoption rates, and time spent in the product.

**Leading indicators:** Engagement metrics serve as leading indicators for churn and expansion. Declining engagement often precedes cancellation by 30-60 days, giving you time to intervene.

## Cash Flow: Don't Run Out of Money

Cash flow metrics determine survival. Track:
- Monthly burn rate (cash spent monthly)
- Runway (months until cash runs out)
- Cash conversion score (efficiency of turning revenue into cash)

**Critical insight:** Profitability and cash flow aren't the same. You can be profitable on paper while running out of cash due to payment terms, inventory, or rapid growth.

## Conclusion: Context Matters

The metrics that matter most depend on your stage:

**Pre-$1M ARR:** Focus on product-market fit signals—engagement, retention, and NPS. Unit economics and CAC/LTV matter less at this stage.

**$1M-$10M ARR:** Dial in unit economics, CAC payback, and repeatable growth. This is where business model validation happens.

**$10M+ ARR:** Rule of 40, NRR, and efficient growth become paramount. VCs evaluate scalability and path to IPO or acquisition.

Don't track metrics for vanity. Each metric should inform decisions. If you're not acting on a metric, stop tracking it. Focus your energy on the 5-10 metrics that truly drive your business forward.

Remember: metrics are a means to an end—building a sustainable, growing business that solves real problems for real customers. Master these fundamentals, and you'll have the insights needed to navigate the complex journey of building a successful SaaS company.
    `
  },
  'fundraising-guide-2025': {
    title: 'Complete Fundraising Guide for Seed Stage Startups',
    date: 'February 8, 2025',
    content: `
# Complete Fundraising Guide for Seed Stage Startups

Raising your seed round in 2025 requires navigating a complex landscape of investors, terms, and expectations. This comprehensive guide walks you through every step of the seed fundraising process.

## Understanding the Current Seed Landscape

The seed stage has evolved significantly. What once was a $500K-$1M round has grown to $2M-$5M+ at many startups. Pre-seed rounds now occupy the space seed rounds once did, while seed rounds increasingly resemble Series A rounds from a decade ago.

**Key trends in 2025:**
- Larger round sizes but higher bars for traction
- More institutional investors (VCs) at seed stage
- Angels and angel syndicates still active but more selective
- Alternative funding (revenue-based financing, venture debt) gaining traction
- Remote fundraising fully normalized post-pandemic

## When to Raise Your Seed Round

Timing is everything in fundraising. Raise too early and you'll give away too much equity for too little capital. Wait too long and you risk running out of runway.

**Optimal timing signals:**
- Product-market fit indicators (strong retention, organic growth)
- Initial traction (even if modest—$10K-$50K MRR for SaaS)
- Team assembled (technical co-founder, key early hires)
- Clear market opportunity (TAM of $1B+)
- 12-18 months of runway remaining (start process before you're desperate)

**Red flags to wait:**
- No clear product vision or prototype
- Founding team incomplete or unstable
- No validation (customer interviews, pilots, early users)
- Personal conflicts or unclear equity splits among founders

## How Much to Raise

The eternal question: how much money should you raise? The standard advice remains relevant: raise enough to hit meaningful milestones that justify a step-function increase in valuation.

**Calculating your raise amount:**

1. Project 18-24 months of expenses (longer runway = less risk)
2. Add 20-30% buffer for unexpected costs
3. Factor in growth investments (hiring, marketing, infrastructure)

**Example calculation for a SaaS startup:**
- Engineering team (4 people × $150K × 2 years) = $1.2M
- Go-to-market team (2 people × $120K × 2 years) = $480K
- Founders (2 × $100K × 2 years) = $400K
- Office, tools, benefits = $200K
- Marketing and customer acquisition = $500K
- Buffer (25%) = $695K
- **Total raise target: ~$3.5M**

## Valuation Expectations

Seed stage valuations typically range from $5M to $20M post-money in 2025. Your valuation depends on multiple factors:

**What drives seed valuations:**
- Team pedigree (previous exits, domain expertise)
- Traction (revenue, users, engagement)
- Market size and growth rate
- Competition for the deal
- General market conditions

**Common valuation ranges by traction:**
- Pre-revenue: $5M-$8M post-money
- $10K-$50K MRR: $8M-$12M post-money
- $50K-$200K MRR: $12M-$20M post-money
- $200K+ MRR: Often Series A territory

**Pro tip:** Don't optimize for highest valuation. A slightly lower valuation from a great investor beats a high valuation from a mediocre investor every time.

## Building Your Target Investor List

Your target list should include 50-100 potential investors. This seems like a lot, but you'll need it. Conversion rates in fundraising are typically 1-3% from introduction to signed term sheet.

**Investor categories to target:**

1. **Tier 1 VCs:** Top-tier firms (Sequoia, Benchmark, a16z). Low success rate but game-changing if you get them.

2. **Emerging VCs:** Smaller, newer funds hungry for deals. Often more accessible and can provide great support.

3. **Sector-specialist VCs:** Funds focused on your industry. They understand your market deeply and bring relevant networks.

4. **Angel investors:** Individual investors, often successful operators or founders. Valuable for expertise and introductions.

5. **Corporate VCs:** Strategic investors from large companies. Can open doors but may have conflicting interests.

**Research each investor:**
- Recent investments (do they invest in your space?)
- Portfolio companies (can you get references?)
- Check size and stage focus
- Individual partner interests and backgrounds

## Crafting Your Pitch Deck

Your pitch deck is your primary fundraising tool. It needs to tell a compelling story in 10-15 slides. VCs see hundreds of decks monthly—yours must stand out.

**Essential slides:**

1. **Cover:** Company name, tagline, contact info
2. **Problem:** The pain point you're solving (make it visceral)
3. **Solution:** Your product (keep it simple)
4. **Why Now:** Market timing and trends
5. **Market Size:** TAM/SAM/SOM with bottom-up validation
6. **Product:** Demo or screenshots (show, don't just tell)
7. **Traction:** Metrics, growth, customer testimonials
8. **Business Model:** How you make money
9. **Competition:** Competitive landscape and your differentiation
10. **Team:** Why you're uniquely positioned to win
11. **Financials:** High-level projections
12. **Ask:** How much you're raising and use of funds

**Design principles:**
- Clean, professional design (hire a designer if needed)
- One key message per slide
- Heavy use of visuals over text
- Data-driven where possible
- Consistent branding and color scheme

## The Fundraising Process Timeline

Fundraising takes longer than you think. Budget 3-6 months from start to signed term sheet. Here's a realistic timeline:

**Month 1: Preparation**
- Finalize pitch deck and materials
- Build target investor list
- Get warm introductions
- Practice your pitch (20+ times minimum)

**Month 2-3: First meetings**
- Initial partner meetings
- Collect feedback and iterate
- Generate momentum with multiple processes in parallel
- Navigate partner meetings and diligence

**Month 3-4: Deep diligence**
- Provide detailed information
- Customer reference calls
- Product deep dives
- Financial model reviews

**Month 4-5: Term sheets and negotiation**
- Receive term sheets (hopefully multiple)
- Negotiate key terms
- Choose your investor

**Month 5-6: Closing**
- Legal due diligence
- Finalize documents
- Close the round
- Wire transfer

**Pro tip:** Always be closing. Even after you sign with one investor, keep backup options warm until funds are in the bank.

## Conclusion: Executing Your Raise

Fundraising is a full-time job that requires treating it like a startup itself. Stay organized, maintain momentum, learn from each meeting, and persist through rejection. The most successful fundraises combine great companies with excellent execution of the fundraising process.

Remember: fundraising is a means to an end. The goal isn't to raise money—it's to build a great company. Choose investors who help you achieve that mission.
    `
  },
  'cap-table-management': {
    title: 'Cap Table Management: Avoiding Common Founder Mistakes',
    date: 'February 5, 2025',
    content: `
# Cap Table Management: Avoiding Common Founder Mistakes

Your cap table might seem like a simple spreadsheet, but it's one of the most important documents in your company. Poor cap table management has killed more startups than bad products. Here's how to avoid the common pitfalls.

## What Is a Cap Table?

A capitalization table (cap table) tracks ownership in your company. It shows who owns what percentage, including founders, employees, investors, and option pools. As your company grows and raises capital, your cap table becomes increasingly complex.

**Key components:**
- Common stock (founders and employees)
- Preferred stock (investors)
- Stock options (ESOP/option pool)
- Convertible notes and SAFEs (pre-equity funding)
- Warrants and other securities

## Mistake #1: Unequal Founder Splits Without Vesting

The most common cap table mistake happens on day one: unequal founder equity splits without vesting schedules. Founders often divide equity based on initial ideas, status, or who had the idea first. This rarely reflects actual contribution over time.

**The problem:** When a founder with 40% equity leaves after six months, you're stuck with a ghost on your cap table who contributed little but owns a lot.

**The solution:** 
- Split equity based on expected future contribution, not past work
- Implement vesting schedules for ALL founders (typically 4 years with 1-year cliff)
- Consider dynamic equity splits that adjust based on actual contribution

**Example structure:**
- Founder A (CEO, full-time): 40%
- Founder B (CTO, full-time): 40%
- Founder C (Advisor turned part-time): 10%
- Option pool: 10%

All subject to 4-year vesting with 1-year cliff.

## Mistake #2: Giving Away Too Much Too Early

Early-stage founders often over-compensate advisors, early employees, or friends who help out. A generous 5% to an advisor might feel right in the moment but becomes painful when you're dividing ownership after a Series A.

**Common overgives:**
- Advisors: Often receive 0.5-1%, but founders give 2-5%
- Early employees: Market rate is 0.1-1% for first 10 employees, but founders give 2-5%
- Service providers: Agencies or contractors sometimes get equity when cash would be better

**The fix:**
- Use standard advisor agreements (0.25-1% vesting over 2 years)
- Benchmark employee equity against industry standards
- Pay cash for services whenever possible
- Remember: every percentage point you give away affects ALL future fundraising rounds

## Mistake #3: No Option Pool Before Fundraising

VCs will require an option pool (typically 10-20% of fully diluted shares) for employee incentives. If you don't create this before raising, it dilutes founders but not investors.

**Bad scenario:**
- Founders own 100% pre-raise
- VC invests for 20% of company
- VC requires 15% option pool created AFTER investment
- Founders now own 65%, not 80%

**Good scenario:**
- Founders own 85%, option pool is 15%
- VC invests for 20%
- Post-money: Founders 68%, Option pool 12%, VC 20%

**Action item:** Create your option pool before your first priced round. The dilution happens to founders, but that's better than diluting both founders and giving VCs effective preference over the pool.

## Mistake #4: Not Understanding Liquidation Preferences

Liquidation preferences determine who gets paid first and how much when your company is sold or liquidated. This can dramatically affect founder outcomes.

**Types of preferences:**

**1x Non-Participating (Standard and fair):**
- Investors get their money back first, OR convert to common
- They choose whichever is better
- Most founder-friendly structure

**2x-3x Participating (Founder-unfriendly):**
- Investors get 2-3x their money back PLUS participate in remaining proceeds
- Can leave founders with little in moderate exits

**Example exit scenario:**
- Company sells for $30M
- Investors put in $10M with 1x non-participating preference
- Investors choose between: $10M (preference) or $6M (20% ownership)
- They take $10M preference, founders get $20M

Same scenario with 2x participating:
- Investors get $20M (2x preference) PLUS $2M (20% of remaining $10M) = $22M total
- Founders get $8M total

**Pro tip:** Always negotiate for 1x non-participating. Fight hard on this term—it matters more than valuation in many exit scenarios.

## Mistake #5: Messy Cap Table from Multiple Instruments

Mixing SAFEs, convertible notes, equity, and warrants creates a complex mess. Each instrument has different conversion terms, making it hard to calculate actual ownership.

**Common scenario:**
- $500K SAFE with $5M cap and 20% discount
- $500K convertible note with $7M cap and 15% discount
- $1M direct equity at $10M valuation
- 10% option pool

Nobody can figure out who owns what without a lawyer and complex spreadsheet.

**Better approach:**
- Stick to one funding instrument when possible
- If using SAFEs or notes, standardize terms
- Convert everything before your Series A
- Use cap table management software (Carta, Pulley, Capshare)

## Mistake #6: Verbal Agreements and Informal Equity Promises

"We'll figure out your equity later" or "Don't worry, we'll take care of you" are recipes for disaster. Every equity agreement must be documented immediately.

**Why this fails:**
- Memories differ over time
- Company value changes
- Relationships deteriorate
- Legal disputes arise

**The fix:**
- Put everything in writing immediately
- Use standard templates (FAST agreement for advisors, etc.)
- File necessary paperwork (83(b) elections, stock purchase agreements)
- Never make verbal equity promises

## Mistake #7: Ignoring 83(b) Elections

When you receive stock subject to vesting, you must file an 83(b) election within 30 days or face massive tax consequences later.

**Without 83(b):**
- You're taxed on vesting schedule as ordinary income
- Tax bill based on fair market value at vesting time
- If your company grows, your tax bill explodes

**With 83(b):**
- You pay tax upfront (usually minimal since company is early stage)
- All future gains are capital gains
- Massive tax savings if company succeeds

**Critical:** You have exactly 30 days from stock grant. Missing this deadline cannot be fixed. Set multiple reminders and consult a tax advisor.

## Best Practices for Cap Table Management

**1. Use Professional Software**
- Carta, Pulley, or Capshare for cap table management
- Free spreadsheets break down as complexity grows
- Software handles complex scenarios (options, convertibles, multiple classes)

**2. Regular Audits**
- Review cap table quarterly
- Reconcile with legal documentation
- Check for errors or inconsistencies
- Update for exercises, terminations, and transfers

**3. Scenario Planning**
- Model future fundraising rounds
- Calculate dilution across multiple scenarios
- Understand how different exit values affect ownership
- Plan option pool needs 2-3 years ahead

**4. Clear Documentation**
- Keep all agreements in organized repository
- Maintain historical cap table snapshots
- Document decision rationale
- Store 83(b) elections and exercise records

**5. Professional Help**
- Work with startup-experienced lawyers
- Get accounting advice early
- Don't DIY equity compensation beyond simple grants
- Budget for professional cap table management

## Conclusion: Your Cap Table is Your Future

Your cap table determines not just current ownership, but your company's ability to attract talent, raise capital, and provide returns to everyone involved. Take it seriously from day one.

Common mistakes are avoidable with proper planning, documentation, and professional help. Invest time and money in getting your cap table right—it's one of the highest ROI activities in building your startup.

Remember: a clean cap table is a sign of professionalism. Investors notice. Employees notice. Your future self will notice.
    `
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;
  
  if (!post) return <Navigate to="/blog" />;
  
  return (
    <>
      <SEO title={post.title} description={post.content.substring(0, 160)} path={`/blog/${slug}`} type="article" />
      
      <article className="container blog-content" style={{ padding: '3rem 1.5rem', maxWidth: 800 }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>{post.date}</div>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1rem' }}>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
          if (line.startsWith('# ')) return '<h1>' + line.slice(2) + '</h1>';
          if (line.startsWith('## ')) return '<h2>' + line.slice(3) + '</h2>';
          if (line.startsWith('**') && line.endsWith('**')) return '<p><strong>' + line.slice(2, -2) + '</strong></p>';
          if (line.startsWith('- ')) return '<li>' + line.slice(2) + '</li>';
          if (line.trim() === '') return '<br/>';
          return '<p>' + line + '</p>';
        }).join('') }} />
      </article>
    </>
  );
}
