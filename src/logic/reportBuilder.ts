import jsPDF from 'jspdf';
import type { AssessmentAnswers, AssessmentResults } from '../types/assessment';
import { safeguardQuestions } from '../data/safeguardQuestions';
export function exportPdfReport(results:AssessmentResults, answers:AssessmentAnswers){
 const doc = new jsPDF(); const margin=16; let y=18; const line=(text:string,size=10)=>{ doc.setFontSize(size); const lines=doc.splitTextToSize(text,178); if(y + lines.length*6 > 280){doc.addPage(); y=18;} doc.text(lines, margin, y); y += lines.length*6 + 2; };
 doc.setFont('helvetica','bold'); line('Ranger Shield Security Check-Up Report',16); doc.setFont('helvetica','normal'); line('Date generated: '+new Date().toLocaleDateString(),10); line('Overall security score: '+results.overallScore+'%',12); line('Risk level: '+results.riskLevel,12); line('This report is a self-assessment based on the answers provided. It is not a certified audit, a compliance certification, or a guarantee of security.',9); y+=3;
 doc.setFont('helvetica','bold'); line('Score by Area',13); doc.setFont('helvetica','normal'); results.categoryScores.forEach(c=>line(c.category+': '+c.score+'% ('+c.answered+'/'+c.total+' answered, '+c.missingCount+' to improve)',9)); y+=3;
 doc.setFont('helvetica','bold'); line('What to Fix First',13); doc.setFont('helvetica','normal'); results.recommendations.slice(0,8).forEach((r,i)=>{ line((i+1)+'. ['+r.priority+'] '+r.title,10); line('Action: '+r.recommendedAction,9); line('How to show it is done: '+r.evidenceToCollect.join('; '),9); }); y+=3;
 doc.setFont('helvetica','bold'); line('Records to Gather',13); doc.setFont('helvetica','normal'); const weakIds = new Set(safeguardQuestions.filter(q=>answers[q.id] && answers[q.id] !== 'full').map(q=>q.id)); safeguardQuestions.filter(q=>weakIds.has(q.id)).slice(0,12).forEach(q=>line(q.category+' - '+q.evidenceNeeded.join('; '),9));
 doc.save('ranger-shield-security-report.pdf');
}
