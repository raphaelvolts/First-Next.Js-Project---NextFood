"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>
        Failed to share the Meal. Please make sure all your input fields are
        filled and are valid.
      </p>
    </main>
  );
}
