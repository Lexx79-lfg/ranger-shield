import { FileDown } from 'lucide-react';
import { exportPdfReport } from '../logic/reportBuilder';
import type { AssessmentAnswers, AssessmentResults } from '../types/assessment';
export function ReportButton({results,answers}:{results:AssessmentResults;answers:AssessmentAnswers}){return <button onClick={()=>exportPdfReport(results,answers)} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500"><FileDown className="h-5 w-5"/>Export PDF report</button>}
