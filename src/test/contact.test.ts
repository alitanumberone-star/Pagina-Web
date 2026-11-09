import { describe, expect, it } from "vitest";

import { whatsappLink } from "@/lib/contact";

describe("WhatsApp contact link", () => {
  it("opens a chat with 656 556 2250 using Mexico's +52 code", () => {
    expect(whatsappLink("Hola")).toBe("https://wa.me/526565562250?text=Hola");
  });

  it("encodes the prefilled message", () => {
    expect(whatsappLink("Curso EDM03 ¿precio?")).toBe(
      "https://wa.me/526565562250?text=Curso%20EDM03%20%C2%BFprecio%3F",
    );
  });
});
