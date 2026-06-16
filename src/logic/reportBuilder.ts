import jsPDF from 'jspdf';
import type { AssessmentAnswers, AssessmentResults } from '../types/assessment';
import { safeguardQuestions } from '../data/safeguardQuestions';
export function exportPdfReport(results:AssessmentResults, answers:AssessmentAnswers){
 const doc = new jsPDF(); const margin=16; let y=18; const line=(text:string,size=10)=>{ doc.setFontSize(size); const lines=doc.splitTextToSize(text,178); if(y + lines.length*6 > 280){doc.addPage(); y=18;} doc.text(lines, margin, y); y += lines.length*6 + 2; };
 doc.setFont('helvetica','bold'); line('Ranger Shield Technical Safeguards Verification Report',16); doc.setFont('helvetica','normal'); line('Date generated: '+new Date().toLocaleDateString(),10); line('Overall safeguard implementation score: '+results.overallScore+'%',12); line('Risk level: '+results.riskLevel,12); line('Ranger Shield is a technical safeguards verification tool for small businesses. It is not a certified audit, compliance certification, vulnerability scanner, SIEM, or compliance guarantee.',9); y+=3;
 doc.setFont('helvetica','bold'); line('Category Breakdown',13); doc.setFont('helvetica','normal'); results.categoryScores.forEach(c=>line(c.category+': '+c.score+'% ('+c.answered+'/'+c.total+' answered, '+c.missingCount+' findings)',9)); y+=3;
 doc.setFont('helvetica','bold'); line('Top Remediation Actions',13); doc.setFont('helvetica','normal'); results.recommendations.slice(0,8).forEach((r,i)=>{ line((i+1)+'. ['+r.priority+'] '+r.title,10); line('Action: '+r.recommendedAction,9); line('Evidence to collect: '+r.evidenceToCollect.join('; '),9); }); y+=3;
 doc.setFont('helvetica','bold'); line('Evidence Users Should Collect',13); doc.setFont('helvetica','normal'); const weakIds = new Set(safeguardQuestions.filter(q=>answers[q.id] && answers[q.id] !== 'full').map(q=>q.id)); safeguardQuestions.filter(q=>weakIds.has(q.id)).slice(0,12).forEach(q=>line(q.category+' - '+q.evidenceNeeded.join('; '),9));
 doc.save('ranger-shield-verification-report.pdf');
}
