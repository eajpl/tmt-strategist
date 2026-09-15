import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import CookieBanner from "./components/CookieBanner";
import PrelaunchBanner from "./components/PrelaunchBanner";
import ScrollToTop from "./components/ScrollToTop";

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Chargement...</p>
      </div>
    </div>
  );
}

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const News = lazy(() => import("./pages/News"));
const Observatory = lazy(() => import("./pages/Observatory"));
const Methodology = lazy(() => import("./pages/Methodology"));
const MethodologyDetails = lazy(() => import("./pages/MethodologyDetails"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Legal = lazy(() => import("./pages/Legal"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Glossary = lazy(() => import("./pages/Glossary"));
const Sources = lazy(() => import("./pages/Sources"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const NewsletterConfirm = lazy(() => import("./pages/NewsletterConfirm"));
const NewsletterUnsubscribe = lazy(() => import("./pages/NewsletterUnsubscribe"));
const Account = lazy(() => import("./pages/Account"));
const Profile = lazy(() => import("./pages/Profile"));
const AcquiHunting = lazy(() => import("./pages/AcquiHunting"));
const AcquirersRanking = lazy(() => import("./pages/AcquirersRanking"));
const SectorsRanking = lazy(() => import("./pages/SectorsRanking"));
const GeographicRanking = lazy(() => import("./pages/GeographicRanking"));
const ValuationMultiples = lazy(() => import("./pages/ValuationMultiples"));
const ValuationMultiplesGeo = lazy(() => import("./pages/ValuationMultiplesGeo"));
const ProfessionalKPIs = lazy(() => import("./pages/ProfessionalKPIs"));
const CompareDeals = lazy(() => import("./pages/CompareDeals"));
const MonthlyDealsExplorer = lazy(() => import("./pages/MonthlyDealsExplorer"));
const DealsDecember2025 = lazy(() => import("./pages/DealsDecember2025"));
const BPOObservatory = lazy(() => import("./pages/BPOObservatory"));
const CryptoObservatory = lazy(() => import("./pages/CryptoObservatory"));
const AIRoboticsObservatory = lazy(() => import("./pages/AIRoboticsObservatory"));
const BiotechObservatory = lazy(() => import("./pages/BiotechObservatory"));
const AfricaMenaObservatory = lazy(() => import("./pages/AfricaMenaObservatory"));
const ConfidenceDashboard = lazy(() => import("./pages/ConfidenceDashboard"));
const InnovationsRanking = lazy(() => import("./pages/InnovationsRanking"));
const EmergingInnovations = lazy(() => import("./pages/EmergingInnovations"));
const InnovationDetailPage = lazy(() => import("./pages/InnovationDetailPage"));
const StrategicReading = lazy(() => import("./pages/StrategicReading"));
const TMTForecast = lazy(() => import("./pages/TMTForecast"));
const ForecastDashboard = lazy(() => import("./pages/ForecastDashboard"));
const ScenariosDashboard = lazy(() => import("./pages/ScenariosDashboard"));
const MarketDrivers = lazy(() => import("./pages/MarketDrivers"));
const StrategicInsights = lazy(() => import("./pages/StrategicInsights"));
const Alerts = lazy(() => import("./pages/Alerts"));
const ApiDocs = lazy(() => import("./pages/ApiDocs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Success = lazy(() => import("./pages/Success"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminScraping = lazy(() => import("./pages/AdminScraping"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const ModerationDashboard = lazy(() => import("./pages/ModerationDashboard"));

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/verify-email" component={VerifyEmail} />
        <Route path="/newsletter/confirm/:token" component={NewsletterConfirm} />
        <Route path="/newsletter/unsubscribe/:token" component={NewsletterUnsubscribe} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/success" component={Success} />
        <Route path="/account" component={Account} />
        <Route path="/profile" component={Profile} />
        <Route path="/alerts"><Alerts /></Route>
        <Route path={"/news"}><News /></Route>
        <Route path={"/observatory"}><Observatory /></Route>
        <Route path={"/bpo-observatory"}><BPOObservatory /></Route>
        <Route path={"/crypto-observatory"}><CryptoObservatory /></Route>
        <Route path={"/ai-robotics-observatory"}><AIRoboticsObservatory /></Route>
        <Route path={"/biotech-observatory"}><BiotechObservatory /></Route>
        <Route path={"/africa-mena-observatory"}><AfricaMenaObservatory /></Route>
        <Route path={"/deals-december-2025"}><DealsDecember2025 /></Route>
        <Route path={"/deals-monthly"}><MonthlyDealsExplorer /></Route>
        <Route path="/compare" component={CompareDeals} />
        <Route path={"/acqui-hunting"}><AcquiHunting /></Route>
        <Route path="/acquirers-ranking"><AcquirersRanking /></Route>
        <Route path="/sectors-ranking"><SectorsRanking /></Route>
        <Route path="/geographic-ranking"><GeographicRanking /></Route>
        <Route path="/valuation-multiples"><ValuationMultiples /></Route>
        <Route path="/valuation-multiples-geo"><ValuationMultiplesGeo /></Route>
        <Route path="/professional-kpis"><ProfessionalKPIs /></Route>
        <Route path="/kpis"><Redirect to="/professional-kpis" /></Route>
        <Route path="/confidence-dashboard"><ConfidenceDashboard /></Route>
        <Route path="/innovations-ranking"><InnovationsRanking /></Route>
        <Route path="/emerging-innovations"><EmergingInnovations /></Route>
        <Route path="/innovation/:slug"><InnovationDetailPage /></Route>
        <Route path="/glossary" component={Glossary} />
        <Route path="/sources" component={Sources} />
        <Route path={"/forecast"}><TMTForecast /></Route>
        <Route path={"/forecast-prophet"}><ForecastDashboard /></Route>
        <Route path={"/scenarios"}><ScenariosDashboard /></Route>
        <Route path={"/market-drivers"}><MarketDrivers /></Route>
        <Route path={"/insights"}><StrategicInsights /></Route>
        <Route path={"/strategic-insights"}><Redirect to="/insights" /></Route>
        <Route path={"/strategic-reading"}><StrategicReading /></Route>
        <Route path={"/api-docs"}><ApiDocs /></Route>
        <Route path={"/methodology-details"} component={MethodologyDetails} />
        <Route path={"/methodology"} component={Methodology} />
        <Route path={"/about"} component={About} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/legal"} component={Legal} />
        <Route path={"/cookies"} component={CookiePolicy} />
        <Route path={"/terms"} component={TermsOfService} />
        <Route path={"/admin"}><Admin /></Route>
        <Route path={"/admin/scraping"} component={AdminScraping} />
        <Route path={"/admin/dashboard"} component={AdminDashboard} />
        <Route path={"/admin/moderation"} component={ModerationDashboard} />
        <Route path={"/old"}><Redirect to="/news" /></Route>
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <PrelaunchBanner />
          <CookieBanner />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
