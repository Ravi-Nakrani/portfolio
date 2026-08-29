import { redirect } from "next/navigation";

/**
 * Single-page portfolio: redirect all unmatched routes to the home page.
 */
export default function NotFound() {
  redirect("/");
}
