#!/usr/bin/env python3
import os
import re
import glob

def generate_quick_response(question):
    """Génère une réponse rapide adaptée à la question FAQ"""
    question_lower = question.lower()
    
    # Dictionnaire de réponses basées sur les mots-clés
    responses = {
        "urgente": "Intervenção em menos de 2 horas. Equipamento Ridgid pronto para desentupimentos ou reparação de fugas. Atendimento 24h/7 dias.",
        "desentupimento": "Desentupimento rápido com máquina Ridgid K-6200. Sem produtos químicos, sem danos nos canos. Garantia de serviço.",
        "fuga": "Detecção de fugas com câmara de inspeção. Localização precisa sem partir paredes. Reparação imediata com materiais de qualidade.",
        "preço": "Orçamento gratuito no local. Preços transparentes sem surpresas. Trabalho garantido com fatura e certificado.",
        "horário": "Atendimento 24 horas por dia, 7 dias por semana. Urgências resolvidas rapidamente, mesmo à noite ou fim-de-semana.",
        "garantia": "Todos os serviços têm garantia. Utilizamos materiais de primeira qualidade e técnicas profissionais comprovadas.",
        "equipamento": "Equipamento Ridgid profissional: câmaras de inspeção, máquinas de desentupimento, detetores de fugas. Tecnologia de ponta.",
        "zona": "Atuação em todo o distrito de Bragança e Vila Real. Desloco-me até si com equipamento completo na viatura.",
        "pagamento": "Aceitamos dinheiro, Multibanco, MB Way e transferência bancária. Faturação imediata com IVA incluído.",
        "tempo": "A maioria das intervenções resolve-se em 1-2 horas. Situações complexas com diagnóstico e orçamento prévio.",
        "esquentador": "Reparação de esquentadores e caldeiras. Diagnóstico gratuito. Peças originais com garantia do fabricante.",
        "canalização": "Instalação de canalização nova com materiais certificados. Cumprimento das normas de segurança e eficiência energética.",
        "casa de banho": "Instalação completa de casa de banho: sanita, lavatório, chuveiro, banheira. Acabamento profissional garantido.",
        "cheiro": "Eliminação de maus cheiros do esgoto. Limpeza e desinfeção completa. Identificação e correção da causa raiz.",
        "água": "Problemas de pressão de água, qualidade ou temperatura. Diagnóstico e solução para melhor conforto na sua casa.",
        "inverno": "Preparação da canalização para o inverno: isolamento de canos, prevenção de congelação, manutenção preventiva.",
        "prevenção": "Manutenção preventiva evita 80% dos problemas. Inspeção regular com câmara e limpeza profissional periódica."
    }
    
    # Chercher des mots-clés dans la question
    for keyword, response in responses.items():
        if keyword in question_lower:
            return response
    
    # Réponse par défaut
    return "Intervenção rápida com equipamento profissional Ridgid. Diagnóstico gratuito no local. Serviço garantido com fatura."

def add_faq_responses():
    """Ajoute des blocs 'Resposta Rápida' après chaque <h3> dans les FAQ"""
    
    # Pages prioritaires
    priority_pages = [
        "faq.html",
        "canalizador-braganca.html",
        "canalizador-vila-real.html",
        "canalizador-mirandela.html",
        "canalizador-chaves.html",
        "canalizador-macedo-de-cavaleiros.html",
        "faq-canalizador-braganca.html",
        "faq-canalizador-vila-real.html",
        "faq-canalizador-mirandela.html"
    ]
    
    for file_name in priority_pages:
        file_path = file_name
        if not os.path.exists(file_path):
            print(f"⚠ Fichier non trouvé: {file_path}")
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Chercher les sections FAQ
            # Pattern pour trouver <div class="faq-item"> ou sections similaires
            faq_pattern = r'(<div[^>]*class="[^"]*faq[^"]*"[^>]*>.*?</div>\s*</div>)'
            
            # Approche alternative: chercher les h3 dans un contexte FAQ
            # D'abord, trouver toutes les occurrences de <h3> avec leur contexte
            h3_pattern = r'(<h3[^>]*>(.*?)</h3>)'
            
            def add_response_after_h3(match):
                h3_tag = match.group(1)
                question_text = match.group(2).strip()
                
                # Nettoyer le texte de la question (enlever HTML)
                clean_question = re.sub(r'<[^>]+>', '', question_text)
                
                # Générer la réponse adaptée
                response = generate_quick_response(clean_question)
                
                # Créer le bloc Resposta Rápida
                resposta_rapida = f'''
<div style="background:#e3f2fd;padding:10px 15px;border-radius:5px;margin:8px 0 12px;font-size:14px">
<strong>💧 Resposta Rápida:</strong> {response}
</div>'''
                
                return h3_tag + '\n' + resposta_rapida
            
            # Appliquer le remplacement
            new_content = re.sub(h3_pattern, add_response_after_h3, content, flags=re.DOTALL | re.IGNORECASE)
            
            # Vérifier si des changements ont été faits
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✓ FAQ ajoutées: {file_path}")
                
                # Compter combien de réponses ont été ajoutées
                count = new_content.count("Resposta Rápida")
                old_count = content.count("Resposta Rápida")
                print(f"  → {count - old_count} nouvelles réponses rapides")
            else:
                print(f"✗ Aucun h3 FAQ trouvé: {file_path}")
                
        except Exception as e:
            print(f"✗ Erreur avec {file_path}: {e}")

if __name__ == "__main__":
    os.chdir("/Users/admin/projects/norte-reparos/client/public")
    add_faq_responses()