import { recommendations } from '../data/recommendations';
import { safeguardQuestions } from '../data/safeguardQuestions';
import type { AnswerValue, AssessmentAnswers, AssessmentResults, Category, RiskLevel } from '../types/assessment';
const valueScore: Record<AnswerValue, number> = { full:1, partial:.5, none:0, unknown:0 };
const categories = [...new Set(safeguardQuestions.map(q=>q.category))] as Category[];
export function getRiskLevel(score:number):RiskLevel{ if(score < 60) return 'High'; if(score < 85) return 'Moderate'; return 'Low'; }
export function calculateResults(answers:AssessmentAnswers):AssessmentResults{
 const answeredCount = Object.keys(answers).length;
 const totalQuestions = safeguardQuestions.length;
 const totalScore = safeguardQuestions.reduce((sum,q)=>sum+(answers[q.id] ? valueScore[answers[q.id]] : 0),0);
 const overallScore = Math.round((totalScore / totalQuestions) * 100);
 const categoryScores = categories.map(category=>{ const qs=safeguardQuestions.filter(q=>q.category===category); const answered=qs.filter(q=>answers[q.id]).length; const earned=qs.reduce((sum,q)=>sum+(answers[q.id] ? valueScore[answers[q.id]] : 0),0); const missingCount=qs.filter(q=>answers[q.id] && answers[q.id] !== 'full').length; return {category,score:Math.round((earned/qs.length)*100),answered,total:qs.length,missingCount}; }).sort((a,b)=>a.score-b.score);
 const weakCategories = categoryScores.filter(c=>c.score<85 || c.missingCount>0).slice(0,5);
 const recommendationCategories = new Set(weakCategories.map(c=>c.category));
 const prioritized = recommendations.filter(r=>recommendationCategories.has(r.category)).sort((a,b)=>({High:0,Medium:1,Low:2}[a.priority]-{High:0,Medium:1,Low:2}[b.priority]));
 return { overallScore, riskLevel:getRiskLevel(overallScore), categoryScores, weakCategories, recommendations:prioritized, answeredCount, totalQuestions };
}
export function getCompletionPercent(answers:AssessmentAnswers){ return Math.round((Object.keys(answers).length / safeguardQuestions.length) * 100); }
