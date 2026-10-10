"use server";

type ContactResult = { success: boolean; message: string };

const LIMITS = { name: 100, email: 254, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Server actions are public endpoints, so only whitelisted, validated fields
// are forwarded to Web3Forms. Anything else a client sends is ignored.
export async function submitContactForm(
  formData: FormData,
): Promise<ContactResult> {
  const accessKey = process.env.WEB3FORMS_KEY;

  if (!accessKey) {
    console.error("WEB3FORMS_KEY is not set");
    return {
      success: false,
      message:
        "The contact form is temporarily unavailable. Please email me directly.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return { success: false, message: "Your message is too long." };
  }

  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("name", name);
  payload.append("email", email);
  payload.append("message", message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const data = await response.json();

    if (data.success) {
      return { success: true, message: "Message sent successfully!" };
    }

    console.error("Web3Forms rejected the submission", data);
    return {
      success: false,
      message: data.message || "Something went wrong while sending.",
    };
  } catch (error) {
    console.error("Web3Forms request failed", error);
    return {
      success: false,
      message: "Network error. Please try again in a moment.",
    };
  }
}
