  function appendMessage(role, text) {
    const chatBox = document.getElementById("chat-box")

    const msgDiv = document.createElement("div");
    msgDiv.className = "message " + role;
    const avatar = document.createElement("img");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = text;
    if (role === "bot") {
      msgDiv.appendChild(avatar);
      msgDiv.appendChild(bubble);
    } else {
      msgDiv.appendChild(bubble);
    }

    chatBox.appendChild(msgDiv);
  }

  function handleSend() {
    const input = document.getElementById("user-input");
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage("user", msg);
    input.value = "";
    respondTo(msg);
  }
  function respondTo(msg) {
    let reply = "";
    if (msg.includes(" تواصل معا صانع") || msg.includes("مطور")) {
      reply = "📞 +212612345678\n💬 https://wa.me/212612345678\n📧 dev@example.com";
    } else if (msg.includes("شكرا") || msg.includes("شكر") || msg.includes("شكر لك")){
      reply = "😀🥰على الرحب والسعة!";
    } else if (msg.includes("اهلا") || msg.includes("سلام") || msg.includes("أهلا") || msg.includes("مرحبا")){
      reply = "كيف الحال";
    } else if(msg.includes("جيد")){
      reply= "👍🤖إذ كنت تريد اي مساعد لتجهيز موقعك أنا هنا للمساعد";
    } else if (msg.includes("كيف الحال")){
      reply="جيد";
    } else if (msg.includes("حسنا")) {
      reply= "🤖إذا تحتاج اي مساعد انا هنا";
    } else if (msg.includes("تواصل مع الشركة") || msg.includes("تواصل")){
      reply="0712421431📱رقم الهاتف المجموعة المطوري \n htpps://wa.ma/212712421431.com\n";
    } else if (msg.includes("كيف أصنع موقع خاص بي")|| msg.includes("أريد صنع الموقع")|| msg.includes("كيف أصنع موقع") || msg.includes("كيف اصنع موقع")){
      reply="حسنا!,لصنع موقع من إختيارك\n 1 تحديد فكرة الموقع\n 2.فئة الموقع هل هو موقع رياضي,ثقافي,أخبار..وغيرها\n 3.تجهيز موقع عبر موقعا\n 💻👌 🏃‍♂️تواصل الأن عبر وتساب🥰 وأعلمناء بمعلومات موفعك سارع الأن\n👨‍💻📞 للتواصل أكتب تواصل"
    }else if (msg.includes("من انت") || msg.includes("من أنت") || msg.includes("من تكون")|| msg.includes("من تكون")){
      reply="Cali أنا\nتم تطوري لمساعدتك للإنشاء موقعك"; 
    } else if (msg.includes("شكر على المعلومات")){
      reply="لا مشكلة";
       } else if (msg.includes("لا أحبك") || msg.includes("انت فاشل") || msg.includes("خطاء") || msg.includes("سيئ")){
      reply="🥰✨أسف 🙏 انا هنا فقط للمسعاد \n 🥰😀 إذا تحتاج أي مساعد صنع موقعك انا هنا"; 
       } else if (msg.includes("كم الثمن") || msg.includes("كم الثمن الموقع")|| msg.includes(" كم الثمن صنع الموقع")){
      reply="موقع بسيط 10 الى 50 دولار\nموقع متوسط 50 إلى 100 دولار\n  موقع كبير 100 إلى 1000 دولار\n أخبرني بنوع موقعك";
       } else if (msg.includes("بسيط")|| msg.includes("كبير") || msg.includes("متوسط")){
       reply="جيد لبدء صنع موقك تواصل مع الخبراء https://google.com";
       }else {
      reply = "❌ هذا لا يتعلق بالموقع.";
    }
    appendMessage("bot", "🔄 جارٍ المعالجة...");
    setTimeout(() => {
      const chatBox = document.getElementById("chat-box");
      chatBox.removeChild(chatBox.lastChild); // إزالة 🔄
      appendMessage("bot", reply);
    }, 3000);
  }