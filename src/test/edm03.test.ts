import { describe, expect, it } from "vitest";

import { EDM03_PRACTICES, activitiesToReach, maxLevel } from "@/lib/edm03";

const byCode = (code: string) => EDM03_PRACTICES.find((p) => p.code === code)!;

describe("EDM03 capability levels (COBIT 2019, cap. 4)", () => {
  it("EDM03.01 needs 4 activities for level 2 and all 7 for level 3", () => {
    const p = byCode("EDM03.01");
    expect(activitiesToReach(p, 2)).toBe(4);
    expect(activitiesToReach(p, 3)).toBe(7);
    expect(maxLevel(p)).toBe(3);
  });

  it("EDM03.02 needs 4 activities for level 2 and all 5 for level 3", () => {
    const p = byCode("EDM03.02");
    expect(activitiesToReach(p, 2)).toBe(4);
    expect(activitiesToReach(p, 3)).toBe(5);
  });

  it("EDM03.03 reaches up to level 4", () => {
    const p = byCode("EDM03.03");
    expect(activitiesToReach(p, 2)).toBe(1);
    expect(activitiesToReach(p, 3)).toBe(2);
    expect(activitiesToReach(p, 4)).toBe(4);
    expect(maxLevel(p)).toBe(4);
  });
});
