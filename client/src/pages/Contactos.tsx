import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";

export default function Contactos() {
  const config = ACTIVE_CONFIG;
  const formattedPhone = `${config.phone.slice(0, 3)} ${config.phone.slice(3, 6)} ${config.phone.slice(6)}`;
  
  const [formType, setFormType] = useState<"contact" | "booking">("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    serviceType: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
  });

  useSEO({
    title: `Contactos | ${config.businessName}`,
    description: `Entre em contacto connosco. ${config.name} profissional disponível 24h/dia. Ligue ${formattedPhone}`,
    canonical: `https://${config.domain}/contactos`,
  });

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${config.googleAdsId}/${config.googleAdsConversionLabel}`,
        'event_callback': () => {
          window.location.href = `tel:${config.phone}`;
        }
      });
    } else {
      window.location.href = `tel:${config.phone}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const body: Record<string, string> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        _subject: "Novo contacto Norte-Reparos",
        _template: "table",
        _captcha: "false",
      };

      if (formType === "booking") {
        body.message = formData.message;
        body.cidade = formData.city;
        body.servico = formData.serviceType;
        body.morada = formData.address;
        body.data_preferida = formData.preferredDate;
        body.hora_preferida = formData.preferredTime;
        body._subject = "Nova reserva Norte-Reparos";
      } else {
        body.message = formData.message;
      }

      const res = await fetch("https://formsubmit.co/ajax/taff.rand@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(
          formType === "booking"
            ? "Pedido de reserva enviado com sucesso! Entraremos em contacto para confirmar."
            : "Mensagem enviada com sucesso! Entraremos em contacto em breve."
        );
        setFormData({
          name: "", email: "", phone: "", message: "",
          city: "", serviceType: "", address: "",
          preferredDate: "", preferredTime: "",
        });
      } else {
        throw new Error("Erro no envio");
      }
    } catch {
      toast.error("Erro ao enviar mensagem. Por favor, ligue-nos diretamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 sm:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contactos
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Estamos disponíveis 24 horas por dia, 7 dias por semana
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Informações de Contacto
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl">📞</div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Telefone</h3>
                      <button
                        onClick={handlePhoneClick}
                        className="text-red-600 hover:text-red-700 font-semibold text-lg sm:text-xl"
                      >
                        {formattedPhone}
                      </button>
                      <p className="text-gray-700 mt-1 text-sm sm:text-base">Disponível 24h/dia, 7 dias por semana</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl">💬</div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Envie-nos uma mensagem via WhatsApp para atendimento rápido
                      </p>
                      <button
                        onClick={() => {
                          const message = encodeURIComponent("Olá! Preciso de assistência.");
                          window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
                        }}
                        className="mt-2 bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
                      >
                        Abrir WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl">📍</div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Zona de Cobertura</h3>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Todo o distrito de Bragança<br />
                        Base: Macedo de Cavaleiros
                      </p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl">⏰</div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Horário</h3>
                      <p className="text-gray-700 text-sm sm:text-base">
                        <strong>Urgências:</strong> 24 horas por dia<br />
                        <strong>Incluindo:</strong> Fins de semana e feriados
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="mt-6 sm:mt-8 bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                    Precisa de assistência urgente?
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Ligue agora e teremos um técnico a caminho em minutos!
                  </p>
                  <button
                    onClick={handlePhoneClick}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors w-full text-sm sm:text-base"
                  >
                    📞 LIGUE AGORA: {formattedPhone}
                  </button>
                </div>
              </div>

              {/* Contact/Booking Form */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  Envie-nos uma Mensagem
                </h2>

                {/* Form Type Selector */}
                <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <button
                    type="button"
                    onClick={() => setFormType("contact")}
                    className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                      formType === "contact"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    💬 Contacto Simples
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("booking")}
                    className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                      formType === "booking"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    📅 Marcar Visita
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="912 345 678"
                    />
                  </div>

                  {/* Booking-specific fields */}
                  {formType === "booking" && (
                    <>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          Cidade *
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                          placeholder="Bragança"
                        />
                      </div>

                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Serviço *
                        </label>
                        <select
                          id="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                        >
                          <option value="">Selecione o serviço...</option>
                          {config.services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          Morada *
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                          placeholder="Rua Principal, 123"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                            Data Preferida *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value, preferredTime: "" })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>

                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                            Hora Preferida *
                          </label>
                          <select
                            id="preferredTime"
                            required
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                            disabled={!formData.preferredDate}
                          >
                            <option value="">{!formData.preferredDate ? "Selecione primeiro uma data" : "Selecione um horário..."}</option>
                            <option value="08:00-10:00">08:00 - 10:00</option>
                            <option value="10:00-12:00">10:00 - 12:00</option>
                            <option value="12:00-14:00">12:00 - 14:00</option>
                            <option value="14:00-16:00">14:00 - 16:00</option>
                            <option value="16:00-18:00">16:00 - 18:00</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {formType === "booking" ? "Descrição do Problema *" : "Mensagem *"}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={formType === "booking" ? 4 : 6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                      placeholder={formType === "booking" ? "Descreva o problema..." : "Descreva o seu pedido..."}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? "A enviar..." 
                      : formType === "booking" 
                        ? "📅 Solicitar Visita" 
                        : "💬 Enviar Mensagem"
                    }
                  </button>

                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Nossa Localização
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Base em Macedo de Cavaleiros, com cobertura em todo o distrito de Bragança
            </p>
            <div className="bg-gray-200 rounded-lg h-64 sm:h-96 flex items-center justify-center">
              <p className="text-gray-600 text-sm sm:text-base">
                📍 Macedo de Cavaleiros, Bragança
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
