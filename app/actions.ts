"use server";

export async function submitContactForm(formData: FormData) {
  const emailKey = process.env.WEB3FORMS_KEY;

  if (!emailKey) {
    return { success: false, message: "Server configuration error: WEB3FORMS_KEY missing." };
  }

  formData.append("access_key", emailKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return { success: true, message: "Message sent successfully!" };
    }

    return { success: false, message: data.message || "Something went wrong while sending." };
  } catch (error) {
    return { success: false, message: "Network error occurred." };
  }
}
