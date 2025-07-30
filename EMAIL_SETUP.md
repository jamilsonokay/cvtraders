# Configuração do Sistema de Envio de Emails - CV Traders Hub

## Visão Geral
O sistema de contato está configurado para enviar emails automaticamente para `jamesrtrtrading@gmail.com` quando alguém preenche o formulário de contato no site.

## Configuração Necessária

### 1. Configurar Conta Gmail
Para que o sistema funcione, você precisa configurar uma conta Gmail:

1. **Ativar Autenticação de 2 Fatores:**
   - Acesse [myaccount.google.com](https://myaccount.google.com)
   - Vá em "Segurança" → "Verificação em duas etapas"
   - Ative a verificação em duas etapas

2. **Gerar Senha de Aplicativo:**
   - Ainda na seção "Segurança"
   - Procure por "Senhas de aplicativo"
   - Gere uma nova senha de aplicativo para "Mail"
   - **Guarde essa senha** - você só verá ela uma vez

### 2. Configurar Variáveis de Ambiente
Edite o arquivo `.env.local` na raiz do projeto:

```env
# Substitua pelos seus dados reais
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo-de-16-caracteres
```

**⚠️ IMPORTANTE:**
- Use a **senha de aplicativo**, não a senha normal da sua conta
- Nunca compartilhe essas credenciais
- O arquivo `.env.local` já está no `.gitignore` para segurança

### 3. Testar o Sistema
1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse `http://localhost:3001/contact`

3. Preencha e envie o formulário de teste

4. Verifique se o email chegou em `jamesrtrtrading@gmail.com`

## Como Funciona

### Fluxo do Sistema:
1. Usuário preenche formulário em `/contact`
2. Dados são enviados para API `/api/contact`
3. API valida os dados
4. Email é enviado via Nodemailer + Gmail
5. Usuário recebe confirmação de sucesso/erro

### Recursos Implementados:
- ✅ Validação de campos obrigatórios
- ✅ Template HTML profissional para emails
- ✅ Tratamento de erros
- ✅ Feedback visual para o usuário
- ✅ Segurança (email de destino não exposto)
- ✅ Reset automático do formulário após envio

## Solução de Problemas

### Erro "Invalid login":
- Verifique se a autenticação de 2 fatores está ativada
- Confirme se está usando a senha de aplicativo, não a senha normal
- Verifique se o email está correto

### Erro "Connection timeout":
- Verifique sua conexão com a internet
- Alguns firewalls podem bloquear conexões SMTP

### Email não chega:
- Verifique a pasta de spam
- Confirme se o email de destino está correto
- Teste com outro email de destino

## Estrutura dos Arquivos

```
app/
├── api/contact/route.ts     # API endpoint para envio
├── contact/page.tsx         # Página do formulário
└── components/sections/
    └── FaqSection.tsx       # Link "Entre em contato"

.env.local                   # Credenciais (não versionado)
EMAIL_SETUP.md              # Este arquivo de instruções
```

## Próximos Passos
1. Configure as credenciais no `.env.local`
2. Teste o sistema
3. Se necessário, ajuste o template do email
4. Deploy para produção (configure as variáveis de ambiente no Vercel/Netlify)

---

**Nota:** Este sistema está pronto para produção. Apenas configure as credenciais e estará funcionando!