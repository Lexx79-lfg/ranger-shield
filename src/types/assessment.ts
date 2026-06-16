export type Category = 'Multi-Factor Authentication'|'Password Management'|'Email Security'|'Endpoint Protection'|'Software Updates'|'Network Segmentation'|'Guest Wi-Fi Isolation'|'Firewall Configuration'|'Backup Verification'|'Access Control'|'Device Encryption'|'Incident Response Basics';
export type AnswerValue = 'full'|'partial'|'none'|'unknown';
export type RiskLevel = 'High'|'Moderate'|'Low';
export type Priority = 'High'|'Medium'|'Low';
export interface SourceFramework { name:string; control:string }
export interface AnswerOption { label:'Fully implemented'|'Partially implemented'|'Not implemented'|'Not sure'; value:AnswerValue; score:number }
export interface SafeguardQuestion { id:string; category:Category; text:string; whyItMatters:string; relatedTechnicalSafeguard:string; sourceFrameworks:SourceFramework[]; evidenceNeeded:string[]; remediationSteps:string[]; aiGuideSummary:string; aiGuidePrompt:string; userFriendlyExplanation:string; followUpQuestions:string[]; answerOptions:AnswerOption[]; recommendationTrigger:AnswerValue[] }
export interface Recommendation { id:string; title:string; category:Category; priority:Priority; explanation:string; recommendedAction:string; whyItMatters:string; evidenceToCollect:string[]; remediationSteps:string[]; aiGuideSummary:string; aiGuidePrompt:string; userFriendlyExplanation:string; followUpQuestions:string[]; relatedFrameworks:SourceFramework[] }
export type AssessmentAnswers = Record<string, AnswerValue>;
export interface CategoryScore { category:Category; score:number; answered:number; total:number; missingCount:number }
export interface AssessmentResults { overallScore:number; riskLevel:RiskLevel; categoryScores:CategoryScore[]; weakCategories:CategoryScore[]; recommendations:Recommendation[]; answeredCount:number; totalQuestions:number }
