const nodemailer = require('nodemailer');

// Setup transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'd.vtechnologiees@gmail.com',
    pass: 'lpcs kbdw jlue zitr' // Replace with your real App Password
  }
});

// Email subject and body
const emailSubject = "Partner with DV Technologies: Powering Africa's Digital Future";

const emailBody = `
Dear Esteemed Partner,

Greetings from **DV Technologies**, where innovation meets impact.

We are a forward-thinking, Kenyan-based tech company committed to transforming businesses across Africa and beyond through accessible, secure, and intelligent digital solutions. Our mission is to empower **small enterprises**, **growing startups**, and **established organizations** to succeed in the digital age through tailored, scalable, and cost-effective technologies.

🔧 **Our Core Services Include:**
- 🖥️ Custom Software, Mobile & Web Development  
- 📊 Data Analytics, Automation & AI Integration  
- 🔐 Cybersecurity Solutions & Ethical Hacking Services  
- ☁️ Cloud Infrastructure & DevOps Setup  
- 🌐 Internet of Things (IoT) & Embedded Industrial Systems  
- 💳 **Point of Sale (POS)** solutions for small and medium businesses  

---

### 🤝 Why Choose DV Technologies?

- ✅ A dedicated team of engineers, designers, and data scientists  
- ✅ Industry-specific innovation for retail, logistics, healthcare, agri-tech & manufacturing  
- ✅ End-to-end delivery from prototyping to deployment  
- ✅ Affordable tech packages for **SMEs** and growing brands  
- ✅ Deep focus on performance, security, and uptime

Whether you're looking to **digitize operations**, **launch an app**, **improve data decisions**, or **automate your customer experience**, DV Technologies is your go-to partner.

---

### 💼 We Help Small Businesses Succeed

We understand the constraints small businesses face. That’s why we go beyond coding — offering **strategy, mentorship, and full-stack development** to help **entrepreneurs and SMEs thrive** in the 21st-century economy.

Let us **modernize your business**, streamline operations, and accelerate growth with our adaptable and budget-friendly tech services.

---

🔗 **Explore More & Claim Your Free Tech Opportunity!**

We invite you to visit our website and explore our innovative offerings.  
💥 In particular, don’t miss the **"Connect Crypto"** section where we’re offering a **free crypto mining experience** — available for a limited time.

🌍 [Visit Website →](https://daviesqunyu.github.io/D-V-TECHNOLOGIES/)  
📧 Email: d.vtechnologiees@gmail.com  
📱 WhatsApp: +254759075816  
📍 Nairobi, Kenya

We look forward to building the future — with you.

Warm regards,  
**DV Technologies**  
_"Innovating Today for a Smarter Tomorrow."_
`;

const recipients = [
  'contato@tradbras.com.br',
  'info@ryhlsa.com.ar',
  'sac@avibr.com.br',
  'info@all-diet.com.ar',
  'ventas@postamayorista.com.ar',
  'info@duchet.com.ar',
  'suporte@santosflora.com.br',
  'atendimento@konbini.com.br',
  'murrfood@murrfood.com',
  'info@bonafide.com.ar',
  'compras@iavelino.com.br',
  'ventas@elcriollosrl.com',
  'comercial@albee.com.br',
  'aurora@aurora.com.br',
  'tjp@tjp.cl',
  'contato@multifoods.com.br',
  'info@dblancaluna.com.ar',
  'casadequeijosceasa@hotmail.com',
  'sac@santaluzia.com.br',
  'four@fourltd.com.br',
  'gourmand@gourmand.com.br',
  'vendas@ortegadistribuidora.com.br',
  'ventas@inversionesunisur.cl',
  'cliente@melangegourmet.com',
  'promocoesnovasafra@novasafra.com.br',
  'rodinexp@gmail.com',
  'e-commerce@stuttgart.com.br',
  'cafe_tal@cafetal.cl',
  'carlos.munoz@comertex.cl',
  'contactenos@icb.cl',
  'ventas@altamirasa.cl',
  'contacto@santavictoria.cl',
  'cafebahia@cafebahia.com.uy',
  'belah@zonak.com.co',
  'festpan@festpan.com.br',
  'info@bio-salud.com.ar',
  'tilsen@tilsen.com.uy',
  'acubilla@saric.com.py',
  'vascol@vascol.com.py',
  'ventas@gecesac.com',
  'negocios@natucorp.net',
  'comercial@terranovaimp.com.br',
  'sergio@lube.com.br',
  'lgimport@leopoldogross.com.uy',
  'compras@kometo.com.ar',
  'ventas@dinavica.com',
  'jgonzalez@johnrestrepoa.com.co',
  'sac@lapastina.com',
  'atendimento@kaistudo.com.br',
  'contato@mrio.com.br',
  'contactenos@comestiblesalfa.com',
  'info@cafefundador.com',
  'info@titodistribuciones.com.uy',
  'soldo@soldo.com.uy',
  'ventas@dach.cl',
  'ventas@ayeimportexport.com.bo',
  'pedidos@cambre.com.uy'
];

// Send emails function
async function sendEmails() {
  for (const email of recipients) {
    const mailOptions = {
      from: '"DV Technologies" <d.vtechnologiees@gmail.com>',
      to: email,
      subject: emailSubject,
      text: emailBody
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent to ${email}: ${info.response}`);
    } catch (error) {
      console.error(`❌ Failed to send to ${email}:`, error.message);
    }
  }
}

sendEmails();
