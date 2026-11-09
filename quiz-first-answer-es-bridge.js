(() => {
  const quiz = document.querySelector("iframe[data-quiz-analytics]");
  if (!quiz) return;

  const site = window.top;
  try {
    if (site.location.origin !== "https://test4citizenusa.com") return;
  } catch {
    return;
  }

  window.addEventListener("message", (event) => {
    if (event.origin !== "https://mickymike20226.github.io" ||
        event.source !== quiz.contentWindow ||
        event.data !== "quiz_first_answer_es") return;

    if (typeof site.gtag === "function") {
      site.gtag("event", "quiz_first_answer_es", { send_to: "G-22M67B5J1B" });
    }
  });
})();
