// ===== EDIT YOUR ROLES HERE =====
// Add, remove, or reword lines. They appear in the sheet at the top of the page.
const roles = [
  { name: "Billing Specialist",             note: "Invoicing, recurring cycles, adjustments" },
  { name: "Data Entry Specialist",          note: "High-volume encoding, high accuracy" },
  { name: "AP / AR Assistant",              note: "Invoice checks, payment follow-ups" },
  { name: "Admin and Accounting Staff",     note: "Records, audits, reconciliation support" },
  { name: "IT Support / Technical Assistant", note: "BSIT background, computer systems" }
];

const rows = document.getElementById("roleRows");
roles.forEach((r, i) => {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "row" + (i === 0 ? " on" : "");
  row.innerHTML = `<span>${i + 1}</span><span>${r.name}</span><span>${r.note}</span>`;
  row.addEventListener("click", () => {
    rows.querySelectorAll(".row").forEach(x => x.classList.remove("on"));
    row.classList.add("on");
  });
  rows.appendChild(row);
});

// Copy email button
const copyBtn = document.getElementById("copyMail");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("johnkennethjamoso74@gmail.com");
    copyBtn.textContent = "Copied";
  } catch {
    copyBtn.textContent = "Copy failed. Select the email above.";
  }
  setTimeout(() => (copyBtn.textContent = "Copy email address"), 2000);
});

document.getElementById("year").textContent = new Date().getFullYear();
