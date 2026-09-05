<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>لوحة التحكم | Sakura Tales</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #fff7fb;
      color: #633f51;
    }

    header {
      background: linear-gradient(135deg, #ffd6e8, #f5b5d1);
      padding: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    h1 {
      margin: 0;
      color: #8f4668;
      font-size: 23px;
    }

    button {
      border: none;
      border-radius: 14px;
      padding: 11px 17px;
      cursor: pointer;
      font-size: 15px;
      font-family: inherit;
    }

    #logoutBtn {
      background: white;
      color: #a84f78;
    }

    main {
      max-width: 950px;
      margin: auto;
      padding: 25px 15px;
    }

    .box {
      background: white;
      padding: 25px;
      margin-bottom: 25px;
      border-radius: 22px;
      box-shadow: 0 5px 20px rgba(150, 70, 110, 0.12);
    }

    h2 {
      color: #9b4770;
      margin-top: 0;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 13px;
      margin-bottom: 12px;
      border: 1px solid #f0c5d8;
      border-radius: 13px;
      outline: none;
      font-size: 15px;
      font-family: inherit;
      background: white;
    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    .save {
      width: 100%;
      background: #d982aa;
      color: white;
    }

    .save:hover {
      background: #c96f9a;
    }

    .message {
      margin-top: 12px;
      text-align: center;
      font-weight: bold;
    }

    .manga {
      padding: 18px;
      margin-bottom: 15px;
      border: 1px solid #f5d8e5;
      border-radius: 18px;
      background: #fffafd;
    }

    .manga-top {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .manga img {
      width: 75px;
      height: 95px;
      object-fit: cover;
      border-radius: 10px;
      background: #ffeaf2;
    }

    .manga-info {
      flex: 1;
    }

    .manga-info h3 {
      margin: 0 0 7px;
      color: #9b4770;
    }

    .actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    .edit {
      background: #ffe8f1;
      color: #a84f78;
    }

    .delete {
      background: #ffe0e9;
      color: #a33f69;
    }

    .chapters {
      margin-top: 18px;
      padding-top: 15px;
      border-top: 1px solid #f5d8e5;
    }

    .chapter {
      background: white;
      border: 1px solid #f2d9e4;
      border-radius: 12px;
      padding: 10px;
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .chapter-actions {
      display: flex;
      gap: 5px;
    }

    .small {
      padding: 8px 11px;
      font-size: 13px;
    }

    .add-chapter {
      background: #f7c3d9;
      color: #7e3f5d;
    }

    .empty {
      text-align: center;
      padding: 20px;
      color: #a4778d;
    }

    #editBox {
      display: none;
    }

    @media (max-width: 600px) {
      .manga-top {
        align-items: flex-start;
      }

      .manga img {
        width: 65px;
        height: 85px;
      }

      .chapter {
        flex-direction: column;
        align-items: stretch;
      }
    }
  </style>
</head>

<body>

<header>
  <h1>🌸 Sakura Tales — لوحة التحكم</h1>
  <button id="logoutBtn">تسجيل الخروج</button>
</header>

<main>

  <!-- إضافة مانهوا -->
  <section class="box">
    <h2>➕ إضافة مانهوا جديدة</h2>

    <input id="title" type="text" placeholder="اسم المانهوا">

    <textarea id="description" placeholder="وصف المانهوا"></textarea>

    <input id="genres" type="text" placeholder="التصنيفات — مثال: Romance, Comedy">

    <input id="cover" type="url" placeholder="رابط صورة الغلاف">

    <select id="status">
      <option value="ongoing">مستمرة</option>
      <option value="completed">مكتملة</option>
    </select>

    <button class="save" id="addBtn">
      حفظ المانهوا 🌸
    </button>

    <div class="message" id="statusMessage"></div>
  </section>


  <!-- تعديل مانهوا -->
  <section class="box" id="editBox">

    <h2>✏️ تعديل المانهوا</h2>

    <input id="editTitle" type="text" placeholder="اسم المانهوا">

    <textarea id="editDescription" placeholder="وصف المانهوا"></textarea>

    <input id="editGenres" type="text" placeholder="التصنيفات">

    <input id="editCover" type="url" placeholder="رابط الغلاف">

    <select id="editStatus">
      <option value="ongoing">مستمرة</option>
      <option value="completed">مكتملة</option>
    </select>

    <button class="save" id="saveEditBtn">
      حفظ التعديل 💗
    </button>

    <button id="cancelEditBtn" style="margin-top:10px;width:100%;background:#eee;color:#777;">
      إلغاء
    </button>

    <div class="message" id="editMessage"></div>

  </section>


  <!-- قائمة المانهوا -->
  <section class="box">

    <h2>📚 المانهوا الموجودة</h2>

    <div id="mangaList">
      جاري التحميل... 🌸
    </div>

  </section>

</main>


<script type="module">

  import { auth, db } from "./firebase.js";

  import {
    onAuthStateChanged,
    signOut
  } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

  import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy
  } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


  /* =========================
     تسجيل الدخول
  ========================= */

  onAuthStateChanged(auth, (user) => {

    if (!user) {
      window.location.href = "login.html";
      return;
    }

    loadManga();

  });


  /* =========================
     تسجيل الخروج
  ========================= */

  document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

      await signOut(auth);

      window.location.href = "login.html";

    });


  /* =========================
     العناصر
  ========================= */

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const genres = document.getElementById("genres");
  const cover = document.getElementById("cover");
  const mangaStatus = document.getElementById("status");

  const addBtn = document.getElementById("addBtn");
  const mangaList = document.getElementById("mangaList");
  const message = document.getElementById("statusMessage");

  const editBox = document.getElementById("editBox");

  let editingId = null;


  /* =========================
     إضافة مانهوا
  ========================= */

  addBtn.addEventListener("click", async () => {

    if (!title.value.trim()) {
      message.textContent = "اكتبي اسم المانهوا أولًا 🌸";
      return;
    }

    if (!cover.value.trim()) {
      message.textContent = "ضعي رابط صورة الغلاف 🌸";
      return;
    }

    try {

      addBtn.disabled = true;
      addBtn.textContent = "جاري الحفظ...";

      await addDoc(collection(db, "manga"), {

        title: title.value.trim(),

        description: description.value.trim(),

        genres: genres.value.trim(),

        cover: cover.value.trim(),

        status: mangaStatus.value,

        createdAt: Date.now()

      });

      message.textContent = "تمت إضافة المانهوا بنجاح 🌸💗";

      title.value = "";
      description.value = "";
      genres.value = "";
      cover.value = "";

      await loadManga();

    } catch (error) {

      console.error(error);

      message.textContent =
        "حدث خطأ أثناء الحفظ: " + error.message;

    } finally {

      addBtn.disabled = false;
      addBtn.textContent = "حفظ المانهوا 🌸";

    }

  });


  /* =========================
     تحميل المانهوا
  ========================= */

  async function loadManga() {

    mangaList.innerHTML = "جاري التحميل... 🌸";

    try {

      const snapshot =
        await getDocs(collection(db, "manga"));

      if (snapshot.empty) {

        mangaList.innerHTML =
          '<div class="empty">لا توجد مانهوا حتى الآن 🌸</div>';

        return;
      }

      mangaList.innerHTML = "";

      snapshot.forEach((item) => {

        const data = item.data();

        const div = document.createElement("div");

        div.className = "manga";

        div.innerHTML = `

          <div class="manga-top">

            <img
              src="${escapeHtml(data.cover || "")}"
              alt="غلاف"
            >

            <div class="manga-info">

              <h3>
                ${escapeHtml(data.title || "بدون اسم")}
              </h3>

              <p>
                ${escapeHtml(data.genres || "بدون تصنيف")}
              </p>

              <small>
                ${data.status === "completed"
                  ? "✅ مكتملة"
                  : "🌸 مستمرة"}
              </small>

            </div>

          </div>

          <div class="actions">

            <button
              class="edit"
              data-edit="${item.id}">
              ✏️ تعديل
            </button>

            <button
              class="delete"
              data-delete="${item.id}">
              🗑️ حذف
            </button>

          </div>

          <div class="chapters">

            <strong>📖 الفصول</strong>

            <div class="chapter-list">
              جاري تحميل الفصول...
            </div>

            <button
              class="add-chapter small"
              data-chapter="${item.id}">
              ➕ إضافة فصل
            </button>

          </div>

        `;


        /* تعديل */

        div
          .querySelector("[data-edit]")
          .addEventListener("click", () => {

            openEdit(item.id, data);

          });


        /* حذف */

        div
          .querySelector("[data-delete]")
          .addEventListener("click", async () => {

            const yes =
              confirm(
                "هل تريدين حذف هذه المانهوا؟"
              );

            if (!yes) return;

            try {

              await deleteDoc(
                doc(db, "manga", item.id)
              );

              await loadManga();

            } catch (error) {

              console.error(error);

              alert(
                "حدث خطأ أثناء الحذف: " +
                error.message
              );

            }

          });


        /* إضافة فصل */

        div
          .querySelector("[data-chapter]")
          .addEventListener("click", () => {

            addChapter(item.id);

          });


        mangaList.appendChild(div);

        loadChapters(
          item.id,
          div.querySelector(".chapter-list")
        );

      });

    } catch (error) {

      console.error(error);

      mangaList.innerHTML =
        "حدث خطأ في تحميل المانهوا.<br><br>" +
        error.message;

    }

  }


  /* =========================
     فتح التعديل
  ========================= */

  function openEdit(id, data) {

    editingId = id;

    document.getElementById("editTitle").value =
      data.title || "";

    document.getElementById("editDescription").value =
      data.description || "";

    document.getElementById("editGenres").value =
      data.genres || "";

    document.getElementById("editCover").value =
      data.cover || "";

    document.getElementById("editStatus").value =
      data.status || "ongoing";

    editBox.style.display = "block";

    window.scrollTo({
      top: editBox.offsetTop - 15,
      behavior: "smooth"
    });

  }


  /* =========================
     حفظ التعديل
  ========================= */

  document
    .getElementById("saveEditBtn")
    .addEventListener("click", async () => {

      if (!editingId) return;

      const newTitle =
        document.getElementById("editTitle").value.trim();

      if (!newTitle) {

        document.getElementById("editMessage").textContent =
          "اسم المانهوا مطلوب 🌸";

        return;

      }

      try {

        await updateDoc(
          doc(db, "manga", editingId),
          {

            title: newTitle,

            description:
              document
                .getElementById("editDescription")
                .value
                .trim(),

            genres:
              document
                .getElementById("editGenres")
                .value
                .trim(),

            cover:
              document
                .getElementById("editCover")
                .value
                .trim(),

            status:
              document
                .getElementById("editStatus")
                .value

          }
        );

        document.getElementById("editMessage").textContent =
          "تم تعديل المانهوا بنجاح 💗";

        await loadManga();

      } catch (error) {

        console.error(error);

        document.getElementById("editMessage").textContent =
          "حدث خطأ: " + error.message;

      }

    });


  /* =========================
     إلغاء التعديل
  ========================= */

  document
    .getElementById("cancelEditBtn")
    .addEventListener("click", () => {

      editBox.style.display = "none";

      editingId = null;

    });


  /* =========================
     الفصول
  ========================= */

  async function loadChapters(mangaId, container) {

    try {

      const snapshot =
        await getDocs(
          collection(
            db,
            "manga",
            mangaId,
            "chapters"
          )
        );

      if (snapshot.empty) {

        container.innerHTML =
          "<small>لا توجد فصول حتى الآن.</small>";

        return;

      }

      container.innerHTML = "";

      snapshot.forEach((item) => {

        const data = item.data();

        const chapter = document.createElement("div");

        chapter.className = "chapter";

        chapter.innerHTML = `

          <span>
            📖 ${escapeHtml(
              data.title || "فصل بدون اسم"
            )}
          </span>

          <div class="chapter-actions">

            <button
              class="delete small">
              🗑️
            </button>

          </div>

        `;

        chapter
          .querySelector(".delete")
          .addEventListener("click", async () => {

            if (
              !confirm(
                "هل تريدين حذف هذا الفصل؟"
              )
            ) return;

            try {

              await deleteDoc(
                doc(
                  db,
                  "manga",
                  mangaId,
                  "chapters",
                  item.id
                )
              );

              loadChapters(
                mangaId,
                container
              );

            } catch (error) {

              alert(
                "حدث خطأ: " +
                error.message
              );

            }

          });

        container.appendChild(chapter);

      });

    } catch (error) {

      console.error(error);

      container.innerHTML =
        "<small>تعذر تحميل الفصول.</small>";

    }

  }


  /* =========================
     إضافة فصل
  ========================= */

  async function addChapter(mangaId) {

    const chapterTitle =
      prompt(
        "اكتبي اسم أو رقم الفصل:",
        "الفصل 1"
      );

    if (!chapterTitle) return;

    const chapterUrl =
      prompt(
        "ضعي رابط قراءة الفصل:"
      );

    if (!chapterUrl) return;

    try {

      await addDoc(
        collection(
          db,
          "manga",
          mangaId,
          "chapters"
        ),
        {

          title: chapterTitle,

          url: chapterUrl,

          createdAt: Date.now()

        }
      );

      alert(
        "تمت إضافة الفصل بنجاح 🌸"
      );

      await loadManga();

    } catch (error) {

      console.error(error);

      alert(
        "حدث خطأ أثناء إضافة الفصل: " +
        error.message
      );

    }

  }


  /* =========================
     حماية النصوص
  ========================= */

  function escapeHtml(text) {

    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }

</script>

</body>
</html>
