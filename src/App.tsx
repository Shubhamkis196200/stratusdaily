import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Blog from './pages/Blog';
import About from './pages/About';
import BlogPost from './pages/BlogPost';

// Import all tools
import StartupValuationCalculator from './tools/StartupValuationCalculator';
import BurnRateCalculator from './tools/BurnRateCalculator';
import RunwayEstimator from './tools/RunwayEstimator';
import CapTableBuilder from './tools/CapTableBuilder';
import PitchDeckScorer from './tools/PitchDeckScorer';
import TamSamSomCalculator from './tools/TamSamSomCalculator';
import UnitEconomicsCalculator from './tools/UnitEconomicsCalculator';
import MrrArrTracker from './tools/MrrArrTracker';
import ChurnRateCalculator from './tools/ChurnRateCalculator';
import CacCalculator from './tools/CacCalculator';
import LtvCalculator from './tools/LtvCalculator';
import BreakEvenAnalysis from './tools/BreakEvenAnalysis';
import RevenueForecast from './tools/RevenueForecast';
import FundingRoundSimulator from './tools/FundingRoundSimulator';
import EquityDilutionCalculator from './tools/EquityDilutionCalculator';
import StartupNameGenerator from './tools/StartupNameGenerator';
import BusinessModelCanvas from './tools/BusinessModelCanvas';
import LeanCanvas from './tools/LeanCanvas';
import SwotAnalysis from './tools/SwotAnalysis';
import CompetitorAnalysis from './tools/CompetitorAnalysis';
import MarketSizeEstimator from './tools/MarketSizeEstimator';
import PricingStrategyCalculator from './tools/PricingStrategyCalculator';
import CashFlowProjector from './tools/CashFlowProjector';
import InvoiceGenerator from './tools/InvoiceGenerator';
import EsopCalculator from './tools/EsopCalculator';
import VestingScheduleCalculator from './tools/VestingScheduleCalculator';
import Valuation409a from './tools/Valuation409a';
import ConvertibleNoteCalculator from './tools/ConvertibleNoteCalculator';
import SafeCalculator from './tools/SafeCalculator';
import TermSheetAnalyzer from './tools/TermSheetAnalyzer';
import OkrTracker from './tools/OkrTracker';
import ProductRoadmap from './tools/ProductRoadmap';
import SprintPlanning from './tools/SprintPlanning';
import UserStoryGenerator from './tools/UserStoryGenerator';
import AbTestCalculator from './tools/AbTestCalculator';
import CohortAnalysis from './tools/CohortAnalysis';
import FunnelConversion from './tools/FunnelConversion';
import EmailSubjectTester from './tools/EmailSubjectTester';
import SocialMediaRoi from './tools/SocialMediaRoi';
import ContentCalendar from './tools/ContentCalendar';
import SeoKeywordAnalyzer from './tools/SeoKeywordAnalyzer';
import DomainNameChecker from './tools/DomainNameChecker';
import BrandColorGenerator from './tools/BrandColorGenerator';
import PitchTimer from './tools/PitchTimer';
import ElevatorPitchBuilder from './tools/ElevatorPitchBuilder';
import InvestorUpdate from './tools/InvestorUpdate';
import BoardMeetingAgenda from './tools/BoardMeetingAgenda';
import ProfitMarginCalculator from './tools/ProfitMarginCalculator';
import SaasMetricsDashboard from './tools/SaasMetricsDashboard';
import GrowthRateCalculator from './tools/GrowthRateCalculator';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/startup-valuation-calculator" element={<StartupValuationCalculator />} />
          <Route path="/tools/burn-rate-calculator" element={<BurnRateCalculator />} />
          <Route path="/tools/runway-estimator" element={<RunwayEstimator />} />
          <Route path="/tools/cap-table-builder" element={<CapTableBuilder />} />
          <Route path="/tools/pitch-deck-scorer" element={<PitchDeckScorer />} />
          <Route path="/tools/tam-sam-som-calculator" element={<TamSamSomCalculator />} />
          <Route path="/tools/unit-economics-calculator" element={<UnitEconomicsCalculator />} />
          <Route path="/tools/mrr-arr-tracker" element={<MrrArrTracker />} />
          <Route path="/tools/churn-rate-calculator" element={<ChurnRateCalculator />} />
          <Route path="/tools/cac-calculator" element={<CacCalculator />} />
          <Route path="/tools/ltv-calculator" element={<LtvCalculator />} />
          <Route path="/tools/break-even-analysis" element={<BreakEvenAnalysis />} />
          <Route path="/tools/revenue-forecast" element={<RevenueForecast />} />
          <Route path="/tools/funding-round-simulator" element={<FundingRoundSimulator />} />
          <Route path="/tools/equity-dilution-calculator" element={<EquityDilutionCalculator />} />
          <Route path="/tools/startup-name-generator" element={<StartupNameGenerator />} />
          <Route path="/tools/business-model-canvas" element={<BusinessModelCanvas />} />
          <Route path="/tools/lean-canvas" element={<LeanCanvas />} />
          <Route path="/tools/swot-analysis" element={<SwotAnalysis />} />
          <Route path="/tools/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/tools/market-size-estimator" element={<MarketSizeEstimator />} />
          <Route path="/tools/pricing-strategy-calculator" element={<PricingStrategyCalculator />} />
          <Route path="/tools/cash-flow-projector" element={<CashFlowProjector />} />
          <Route path="/tools/invoice-generator" element={<InvoiceGenerator />} />
          <Route path="/tools/esop-calculator" element={<EsopCalculator />} />
          <Route path="/tools/vesting-schedule-calculator" element={<VestingScheduleCalculator />} />
          <Route path="/tools/valuation-409a" element={<Valuation409a />} />
          <Route path="/tools/convertible-note-calculator" element={<ConvertibleNoteCalculator />} />
          <Route path="/tools/safe-calculator" element={<SafeCalculator />} />
          <Route path="/tools/term-sheet-analyzer" element={<TermSheetAnalyzer />} />
          <Route path="/tools/okr-tracker" element={<OkrTracker />} />
          <Route path="/tools/product-roadmap" element={<ProductRoadmap />} />
          <Route path="/tools/sprint-planning" element={<SprintPlanning />} />
          <Route path="/tools/user-story-generator" element={<UserStoryGenerator />} />
          <Route path="/tools/ab-test-calculator" element={<AbTestCalculator />} />
          <Route path="/tools/cohort-analysis" element={<CohortAnalysis />} />
          <Route path="/tools/funnel-converter" element={<FunnelConversion />} />
          <Route path="/tools/email-subject-tester" element={<EmailSubjectTester />} />
          <Route path="/tools/social-media-roi" element={<SocialMediaRoi />} />
          <Route path="/tools/content-calendar" element={<ContentCalendar />} />
          <Route path="/tools/seo-keyword-analyzer" element={<SeoKeywordAnalyzer />} />
          <Route path="/tools/domain-name-checker" element={<DomainNameChecker />} />
          <Route path="/tools/brand-color-generator" element={<BrandColorGenerator />} />
          <Route path="/tools/pitch-timer" element={<PitchTimer />} />
          <Route path="/tools/elevator-pitch-builder" element={<ElevatorPitchBuilder />} />
          <Route path="/tools/investor-update" element={<InvestorUpdate />} />
          <Route path="/tools/board-meeting-agenda" element={<BoardMeetingAgenda />} />
          <Route path="/tools/profit-margin-calculator" element={<ProfitMarginCalculator />} />
          <Route path="/tools/saas-metrics" element={<SaasMetricsDashboard />} />
          <Route path="/tools/growth-rate-calculator" element={<GrowthRateCalculator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
