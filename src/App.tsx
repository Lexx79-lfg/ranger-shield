import { useState } from 'react';
import { Layout } from './components/Layout';
import { AssessmentProvider, useAssessment } from './context/AssessmentContext';
import { AssessmentPage } from './pages/AssessmentPage';
import { HomePage } from './pages/HomePage';
import { ResultsPage } from './pages/ResultsPage';
type Page='home'|'assessment'|'results';
function AppShell(){const [page,setPage]=useState<Page>('home'); const {hasStarted,startAssessment,answers}=useAssessment(); const begin=()=>{startAssessment();setPage('assessment')}; return <Layout>{page==='home'&&<HomePage onStart={begin} onResults={()=>setPage('results')} hasProgress={hasStarted||Object.keys(answers).length>0}/>} {page==='assessment'&&<AssessmentPage onResults={()=>setPage('results')}/>} {page==='results'&&<ResultsPage onAssessment={()=>setPage('assessment')}/>}</Layout>}
export default function App(){return <AssessmentProvider><AppShell/></AssessmentProvider>}
