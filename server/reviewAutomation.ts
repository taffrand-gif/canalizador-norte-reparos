// Automated Google Review System
// Sends SMS/WhatsApp 24h after service completion

export interface ServiceCompletion {
 id: string;
 customerName: string;
 customerPhone: string;
 customerEmail: string;
 serviceType: string;
 completionDate: Date;
 technicianName: string;
 city: string;
 reviewRequestSent: boolean;
 reviewReceived: boolean;
 reviewRating?: number;
 reviewText?: string;
}

export const reviewTemplates = {
 whatsapp: {
 initial: (customerName: string, serviceType: string) =>
 `Olá ${customerName}! 👋\n\n` +
 `Obrigado por escolher Norte Reparos para ${serviceType}.\n\n` +
 `Ficou satisfeito com o nosso serviço? ⭐\n\n` +
 `Ajude-nos com uma avaliação no Google (30 segundos):\n` +
 `https://g.page/r/REVIEW_LINK/review\n\n` +
 `A sua opinião ajuda outros clientes e motiva a nossa equipa! 🙏\n\n` +
 `Obrigado,\n` +
 `Equipa Norte Reparos`,

 reminder: (customerName: string) =>
 `Olá ${customerName}! 👋\n\n` +
 `Ainda não conseguimos ver a sua avaliação no Google.\n\n` +
 `Se tiver 30 segundos, agradecemos muito:\n` +
 `https://g.page/r/REVIEW_LINK/review\n\n` +
 `Obrigado! 🙏`,

 thankYou: (customerName: string, rating: number) =>
 `Olá ${customerName}! ⭐\n\n` +
 `Muito obrigado pela sua avaliação de ${rating} estrelas!\n\n` +
 `${rating === 5 ? 'Ficamos muito felizes por ter ficado satisfeito! 🎉' : 'Agradecemos o seu feedback e vamos continuar a melhorar.'}\n\n` +
 `Conte sempre connosco para futuras necessidades.\n\n` +
 `Equipa Norte Reparos`
 },

 sms: {
 initial: (customerName: string) =>
 `Olá ${customerName}! Obrigado por escolher Norte Reparos. Ficou satisfeito? Avalie-nos no Google (30s): https://g.page/r/REVIEW_LINK/review - Equipa Norte Reparos`,

 reminder: (customerName: string) =>
 `${customerName}, ainda não vimos a sua avaliação. Se tiver 30s, agradecemos: https://g.page/r/REVIEW_LINK/review - Norte Reparos`
 },

 email: {
 subject: 'Como foi o nosso serviço? ⭐',

 body: (customerName: string, serviceType: string, technicianName: string, completionDate: string) =>
 `<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <style>
 body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
 .container { max-width: 600px; margin: 0 auto; padding: 20px; }
 .header { background: #FF6B35; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
 .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
 .button { display: inline-block; background: #FF6B35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
 .stars { font-size: 30px; color: #FFD700; }
 .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
 </style>
</head>
<body>
 <div class="container">
 <div class="header">
 <h1>Obrigado, ${customerName}! 🙏</h1>
 </div>
 <div class="content">
 <p>Esperamos que tenha ficado satisfeito com o nosso serviço de <strong>${serviceType}</strong> realizado pelo técnico <strong>${technicianName}</strong> no dia <strong>${completionDate}</strong>.</p>

 <p>A sua opinião é muito importante para nós! ⭐</p>

 <p>Pode ajudar-nos com uma avaliação rápida no Google? Leva apenas 30 segundos e ajuda outros clientes a encontrar-nos.</p>

 <div style="text-align: center;">
 <div class="stars">⭐⭐⭐⭐⭐</div>
 <a href="https://g.page/r/REVIEW_LINK/review" class="button">Avaliar no Google</a>
 </div>

 <p><strong>Por que a sua avaliação é importante:</strong></p>
 <ul>
 <li>Ajuda outros clientes a escolher um serviço de confiança</li>
 <li>Motiva a nossa equipa a continuar o excelente trabalho</li>
 <li>Permite-nos melhorar continuamente</li>
 </ul>

 <p>Se tiver qualquer problema ou sugestão, responda a este email. Estamos sempre disponíveis!</p>

 <p>Obrigado,<br>
 <strong>Equipa Norte Reparos</strong><br>
 📞 +351 928 484 451 | 📧 geral@canalizador-norte-reparos.pt</p>
 </div>
 <div class="footer">
 <p>Norte Reparos - Serviços Profissionais em Trás-os-Montes<br>
 Garantia 2 anos • Atendimento 24h/7d/7d • 86 cidades</p>
 </div>
 </div>
</body>
</html>`
 }
};

// Review request scheduler
export class ReviewRequestScheduler {
 private serviceCompletions: ServiceCompletion[] = [];

 // Add completed service
 addServiceCompletion(service: Omit<ServiceCompletion, 'id' | 'reviewRequestSent' | 'reviewReceived'>) {
 const completion: ServiceCompletion = {
 ...service,
 id: `service_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
 reviewRequestSent: false,
 reviewReceived: false
 };

 this.serviceCompletions.push(completion);

 // Schedule review request for 24h later
 this.scheduleReviewRequest(completion);

 return completion.id;
 }

 // Schedule review request
 private scheduleReviewRequest(service: ServiceCompletion) {
 const delay24h = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

 setTimeout(() => {
 this.sendReviewRequest(service);
 }, delay24h);
 }

 // Send review request via WhatsApp/SMS/Email
 private async sendReviewRequest(service: ServiceCompletion) {
 console.log(`Sending review request to ${service.customerName}...`);

 try {
 // Send WhatsApp message
 await this.sendWhatsAppMessage(
 service.customerPhone,
 reviewTemplates.whatsapp.initial(service.customerName, service.serviceType)
 );

 // Send Email
 await this.sendEmail(
 service.customerEmail,
 reviewTemplates.email.subject,
 reviewTemplates.email.body(
 service.customerName,
 service.serviceType,
 service.technicianName,
 service.completionDate.toLocaleDateString('pt-PT')
 )
 );

 service.reviewRequestSent = true;

 // Schedule reminder for 3 days later if no review received
 setTimeout(() => {
 if (!service.reviewReceived) {
 this.sendReminder(service);
 }
 }, 3 * 24 * 60 * 60 * 1000); // 3 days

 } catch (error) {
 console.error('Error sending review request:', error);
 }
 }

 // Send reminder
 private async sendReminder(service: ServiceCompletion) {
 console.log(`Sending reminder to ${service.customerName}...`);

 try {
 await this.sendWhatsAppMessage(
 service.customerPhone,
 reviewTemplates.whatsapp.reminder(service.customerName)
 );
 } catch (error) {
 console.error('Error sending reminder:', error);
 }
 }

 // Send WhatsApp message (using WhatsApp Business API or Twilio)
 private async sendWhatsAppMessage(phone: string, message: string) {
 // In production, integrate with Twilio WhatsApp API:
 // https://www.twilio.com/docs/whatsapp/api

 console.log(`WhatsApp to ${phone}: ${message}`);

 // Example Twilio integration:
 /*
 const accountSid = process.env.TWILIO_ACCOUNT_SID;
 const authToken = process.env.TWILIO_AUTH_TOKEN;
 const client = require('twilio')(accountSid, authToken);

 await client.messages.create({
 from: 'whatsapp:+14155238886', // Twilio WhatsApp number
 to: `whatsapp:${phone}`,
 body: message
 });
 */
 }

 // Send SMS (using Twilio)
 private async sendSMS(phone: string, message: string) {
 console.log(`SMS to ${phone}: ${message}`);

 // Example Twilio integration:
 /*
 const accountSid = process.env.TWILIO_ACCOUNT_SID;
 const authToken = process.env.TWILIO_AUTH_TOKEN;
 const client = require('twilio')(accountSid, authToken);

 await client.messages.create({
 from: process.env.TWILIO_PHONE_NUMBER,
 to: phone,
 body: message
 });
 */
 }

 // Send Email
 private async sendEmail(email: string, subject: string, body: string) {
 console.log(`Email to ${email}: ${subject}`);

 // In production, integrate with email service (SendGrid, Mailgun, etc.)
 /*
 const sgMail = require('@sendgrid/mail');
 sgMail.setApiKey(process.env.SENDGRID_API_KEY);

 await sgMail.send({
 to: email,
 from: 'geral@canalizador-norte-reparos.pt',
 subject: subject,
 html: body
 });
 */
 }

 // Mark review as received
 markReviewReceived(serviceId: string, rating: number, text?: string) {
 const service = this.serviceCompletions.find(s => s.id === serviceId);

 if (service) {
 service.reviewReceived = true;
 service.reviewRating = rating;
 service.reviewText = text;

 // Send thank you message
 this.sendThankYou(service);
 }
 }

 // Send thank you message
 private async sendThankYou(service: ServiceCompletion) {
 if (!service.reviewRating) return;

 try {
 await this.sendWhatsAppMessage(
 service.customerPhone,
 reviewTemplates.whatsapp.thankYou(service.customerName, service.reviewRating)
 );
 } catch (error) {
 console.error('Error sending thank you:', error);
 }
 }

 // Get statistics
 getStatistics() {
 const total = this.serviceCompletions.length;
 const requestsSent = this.serviceCompletions.filter(s => s.reviewRequestSent).length;
 const reviewsReceived = this.serviceCompletions.filter(s => s.reviewReceived).length;
 const responseRate = requestsSent > 0 ? (reviewsReceived / requestsSent) * 100 : 0;

 const ratings = this.serviceCompletions
 .filter(s => s.reviewRating)
 .map(s => s.reviewRating!);

 const averageRating = ratings.length > 0
 ? ratings.reduce((a, b) => a + b, 0) / ratings.length
 : 0;

 return {
 totalServices: total,
 requestsSent,
 reviewsReceived,
 responseRate: responseRate.toFixed(1) + '%',
 averageRating: averageRating.toFixed(1),
 fiveStarReviews: ratings.filter(r => r === 5).length,
 fourStarReviews: ratings.filter(r => r === 4).length,
 threeStarReviews: ratings.filter(r => r === 3).length,
 twoStarReviews: ratings.filter(r => r === 2).length,
 oneStarReviews: ratings.filter(r => r === 1).length
 };
 }
}

// Singleton instance
export const reviewScheduler = new ReviewRequestScheduler();
