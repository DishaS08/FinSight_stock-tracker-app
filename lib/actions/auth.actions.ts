// lib/actions/auth.actions.ts

export async function signInWithEmail(data: { email: string; password: string }) {
  console.log("Signing in:", data.email);
  return { success: true, message: "Signed in successfully!" };
}

export async function signUpWithEmail(data: { email: string; password: string }) {
  console.log("Signing up:", data.email);
  return { success: true, message: "Account created successfully!" };
}
