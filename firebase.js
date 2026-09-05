<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>دخول المديرة | Sakura Tales</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #fff7fb, #ffd6e8);
      color: #633f51;
    }

    .login-box {
      width: 90%;
      max-width: 400px;
      background: white;
      padding: 35px 25px;
      border-radius: 25px;
      box-shadow: 0 10px 35px rgba(150, 70, 110, 0.15);
      text-align: center;
    }

    .logo {
      font-size: 30px;
      color: #a84f78;
      font-weight: bold;
      margin-bottom: 8px;
    }

    h2 {
      color: #8f4668;
      margin-bottom: 25px;
    }

    input {
      width: 100%;
      padding: 14px;
      margin-bottom: 15px;
      border: 1px solid #f0c5d8;
      border-radius: 15px;
      outline: none;
      font-size: 15px;
    }

    input:focus {
      border-color: #d982aa;
    }

    button {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 15px;
      background: #d982aa;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background: #c96f9a;
    }

    #message {
      margin-top: 15px;
      font-size: 14px;
    }

    .back {
      display: block;
      margin-top: 20px;
      color: #a84f78;
      text-decoration: none;
    }
  </style>
</head>

<body>

  <div class="login-box">
    <div class="logo">🌸 Sakura Tales</div>

    <h2>دخول المديرة 👑</h2>

    <input
      type="email"
      id="email"
      placeholder="البريد الإلكتروني"
    >

    <input
      type="password"
      id="password"
      placeholder="كلمة المرور"
    >

    <button id="loginBtn">دخول</button>

    <div id="message"></div>

    <a class="back" href="index.html">العودة للموقع 🌷</a>
  </div>

  <script type="module">
    import { signInWithEmailAndPassword }
      from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

    import { auth } from "./firebase.js";

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    const message = document.getElementById("message");

    loginBtn.addEventListener("click", async () => {
      message.textContent = "جاري تسجيل الدخول...";

      try {
        await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );

        message.textContent = "تم الدخول بنجاح 🌸";

        setTimeout(() => {
          window.location.href = "admin.html";
        }, 700);

      } catch (error) {
        message.textContent = "الإيميل أو كلمة المرور غير صحيحة.";
      }
    });
  </script>

</body>
</html>
