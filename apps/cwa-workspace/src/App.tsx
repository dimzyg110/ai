import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Search } from './components/Search';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import StakeholderCRM from './pages/StakeholderCRM';
import PharmacyPipeline from './pages/PharmacyPipeline';
import PrescriberEducation from './pages/PrescriberEducation';
import SponsorPipeline from './pages/SponsorPipeline';
import ProductTrustCards from './pages/ProductTrustCards';
import ProductLibrary from './pages/ProductLibrary';
import TrustBarriers from './pages/TrustBarriers';
import WebsiteResourceCentre from './pages/WebsiteResourceCentre';
import EducationHub from './pages/EducationHub';
import SalesScripts from './pages/SalesScripts';
import ComplianceQueue from './pages/ComplianceQueue';
import KPIDashboard from './pages/KPIDashboard';
import WeeklyReview from './pages/WeeklyReview';

export default function App() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-12 border-b border-cwa-border bg-white/80 backdrop-blur sticky top-0 z-10 flex items-center justify-between px-5">
          <div className="text-[12.5px] text-cwa-muted">
            CWA / Cannex · Sales &amp; Trust OS
          </div>
          <Search />
        </header>
        <main className="flex-1 overflow-hidden flex">
          <Routes>
            <Route path="/" element={<ExecutiveDashboard />} />
            <Route path="/stakeholder-crm" element={<StakeholderCRM />} />
            <Route path="/pharmacy-pipeline" element={<PharmacyPipeline />} />
            <Route
              path="/prescriber-education"
              element={<PrescriberEducation />}
            />
            <Route path="/sponsor-pipeline" element={<SponsorPipeline />} />
            <Route
              path="/product-trust-cards"
              element={<ProductTrustCards />}
            />
            <Route path="/product-library" element={<ProductLibrary />} />
            <Route path="/trust-barriers" element={<TrustBarriers />} />
            <Route
              path="/website-resource-centre"
              element={<WebsiteResourceCentre />}
            />
            <Route path="/education-hub" element={<EducationHub />} />
            <Route path="/sales-scripts" element={<SalesScripts />} />
            <Route path="/compliance-queue" element={<ComplianceQueue />} />
            <Route path="/kpi-dashboard" element={<KPIDashboard />} />
            <Route path="/weekly-review" element={<WeeklyReview />} />
            <Route path="*" element={<ExecutiveDashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
