"use server"; 

export async function handleContact(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  // In production: save to DB, send email, etc.
  console.log("Server Action Received:", { name, message });

  return `Thanks ${name}, your message was received!`;
}
